import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    tracks: z.array(z.string()),
    title: z.string(),
    level: z.string(),
    tags: z.array(z.string()),
    duration: z.number(),
    day: z.string(),
  })
});

const workshops = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/workshops" }),
  schema: z.object({
    // tracks: z.array(z.string()),
    title: z.string(),
    abstract: z.string(),
    level: z.string(),
    published: z.boolean(),
    // tags: z.array(z.string()),
    // duration: z.number(),
    // day: z.string(),
  })
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    title: z.string(),
    org: z.string(),
    url: z.string(),
    bluesky: z.string(),
    linkedin: z.string(),
    twitter: z.string(),
    mastodon: z.string(),
    talk: reference("talks"),
    github: z.string(),
  }),
});

const trainers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/trainers" }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    title: z.string(),
    // org: z.string(),
    // url: z.string(),
    // bluesky: z.string(),
    linkedin: z.string(),
    twitter: z.string(),
    mastodon: z.string(),
    workshop: reference("workshops"),
    github: z.string(),
  }),
});



export const collections = { talks, workshops, people, trainers };