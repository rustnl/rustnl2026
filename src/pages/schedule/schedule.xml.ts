// schedule.xml machine-readable conference format, see https://c3voc.de/wiki/schedule
// Output validated against https://c3voc.de/schedulexml/validate
//
// We use an evil hack to get the AST from the Tuesday and Wednesday.astro files that contain the data we need.

import type { APIContext } from 'astro';
import { parse } from "@astrojs/compiler";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { createHash } from 'crypto';
import { main, secondary, tertiary, quaternary } from "../../components/timetable/data.ts";
// @ts-ignore
import { get_talk, get_speakers } from "../../components/timetable/Item.astro";

const dir = path.dirname(fileURLToPath(import.meta.url));
const ROOM_NAMES: Record<string, string> = {
  main: main,
  secondary: secondary,
  tertiary: tertiary,
  quaternary: quaternary,
}

const CONF_TZ = "+02:00"

async function getAst(file: string) {
  const src = readFileSync(path.resolve(dir, file), "utf8");
  const { ast } = await parse(src);
  return ast;
}


export async function GET(context: APIContext): Promise<Response> {
  const tuesdayAst = await getAst("../../components/timetable/Tuesday.astro");
  const wednesdayAst = await getAst("../../components/timetable/Wednesday.astro");

  var rssString = `
<?xml version='1.0' encoding='utf-8' ?>
<schedule xsi:noNamespaceSchemaLocation="https://c3voc.de/schedule/schema.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <generator name="rustnl2026" />
  <version>1.0</version>
  <conference>
    <title>RustWeek 2026</title>
    <acronym>rustnl2026</acronym>
    <days>2</days>
    <start>2026-05-19</start>
    <end>2026-05-20</end>
    <timeslot_duration>00:05</timeslot_duration>
    <time_zone_name>Europe/Amsterdam</time_zone_name>
  </conference>
  `;

  rssString += astroToXml(tuesdayAst, 1);
  rssString += astroToXml(wednesdayAst, 2);

  rssString += `</schedule>\n`
  rssString = rssString.trim();
  return new Response(rssString, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

function astroToXml(ast: any, dayIndex: number): string {
  const timetable = ast.children.filter((child: any) => child.type == "component" && child.name == "Timetable")[0];

  const dateStr = getAttr(timetable, "day")!;

  var tracks: Array<string> = [];
  var rooms: Record<string, boolean> = {};

  var items: Array<Item> = [];

  timetable.children.forEach((child: any) => {
    if (child.type == "component" && child.name == "TrackIndicator") {
      tracks.push(getAttr(child, "track")!);
    } else if (child.type == "component" && child.name == "Item") {
      let item = parseItem(child);
      item.track = tracks[parseInt(item.track) - 1];
      if (item.slug) {
        const talk = get_talk(item.slug)
        item.title = talk.frontmatter.title;
        //item.track = talk.frontmatter.tracks[0];
        if (!item.speakers) {
          item.speakers = item.speakers || get_speakers(item.slug);
        }
      }
      items.push(item);
      rooms[item.room] = true;
    }
  });

  var rssString = `<day date="${dateStr}" start="${dateTimeStr(dateStr, "08:30")}" end="${dateTimeStr(dateStr, "19:00")} " index="${dayIndex} ">\n`

  for (let room in rooms) {
    rssString += `  <room name="${ROOM_NAMES[room]}">\n`

    items.filter((item) => item.room == room).forEach((item) => {
      const slug = item.slug ? slugify(item.slug) : slugify(item.title!) + `-${dateStr}-${item.track}`;
      const id = slugToId(slug);
      const guid = slugToGuid(slug);
      let personsXml = "";
      item.speakers?.forEach((speaker) => {
        personsXml += `<person>${speaker.name}</person>`
      });
      rssString += `
        <event id="${id}" guid="${guid}">
          <date>${dateTimeStr(dateStr, item.time!)}</date>
          <start>${item.time?.padStart(5, "0")}</start>
          <duration>${formatDuration(item.durationMins)}</duration>
          <room>${room}</room>
          ${item.slug ? `<url>https://2026.rustweek.org/talks/${item.slug}</url>` : ""}
          <slug>rustnl2026-${slug.padEnd(4, "_")}</slug>
          <title>${escape(item.title ?? item.slug!)}</title>
          <track>${item.track}</track>
          <type>talk</type>
          <abstract></abstract>
          <description></description>
          <persons>${personsXml}</persons>
        </event>\n`;
    });

    rssString += `  </room>\n`
  }
  rssString += `</day>\n`

  return rssString;
}

type Item = {
  title: string | undefined;
  slug: string | undefined;
  track: string;
  time: string;
  durationMins: number;
  room: string;
  speakers: Array<any> | undefined;
};

function parseItem(node: any): Item {
  const title = getAttr(node, "title");
  const slug = getAttr(node, "talk_slug");
  const track = getAttr(node, "track")!;
  const time = getAttr(node, "time")!;
  const durationMins = parseInt(getAttr(node, "duration") ?? "0");
  const room = getAttr(node, "room")!;
  const speakersStr = getAttr(node, "speakers");
  const speakers = speakersStr ? parseSpeakers(speakersStr) : undefined;
  if (!slug && !title) throw new Error(`Item has neither slug nor title: ${node}`);
  return { title, slug, track, time, durationMins, room, speakers };
}

function getAttr(node: any, attrName: string): string | undefined {
  const attr = node.attributes.filter((attr: any) => attr.name == attrName)[0];
  if (attr === undefined) {
    return undefined;
  }
  return attr.value;
}

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function dateTimeStr(dateStr: string, time: string): string {
  return `${dateStr}T${time.padStart(5, "0")}:00${CONF_TZ}`;
}

function slugify(s: string): string {
  return s.toLowerCase().replace("ł", "l").replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function slugToId(seed: string): number {
  const h = createHash('sha1').update(seed).digest('hex');
  return parseInt(h.slice(0, 8), 16) & 0x7fffffff;
}
function slugToGuid(seed: string): string {
  const h = createHash('sha1').update(seed).digest('hex');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20, 32)}`;
}

function formatDuration(mins: number): string {
  return `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
}

type Speaker = {
  name: string;
};

function parseSpeakers(str: string): Array<Speaker> {
  // i'm sorry …
  const arr = Function(`"use strict"; return (${str})`)();
  return arr.map((obj: Speaker) => { return { "name": obj.name } });
}
