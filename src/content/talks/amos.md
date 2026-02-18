---
tracks: 
 - A-1
title: "One year of facet: reflections on reflection"
level: ""
tags: []
duration: 15 # 15 or 30 min
day: "tuesday"
---

The https://github.com/facet-rs/facet project is over a year old at this point (the point this talk would be given) — is it stable yet?
What have people built with it? Is it fast enough? What crates can it replace?

There were JIT efforts, how well did that work?
What's the perf like vs serde?
Can you do codegen with it?
Can you build an RPC system on top of it? 
The reflection MVP landed — what does this mean for facet? For others? (It's good news, on a long timeline, even less derive macros).
Sometimes reflection doesn't cut it, you have to emit code (e.g. implement the Error/Display trait) for compat with the rest of the ecosystem - can you use re-use facet's parsing job here? (Yes you can, there's a plug-in system, cf. facet-display).
XML is notoriously annoying to deserialize with serde b/c it doesn't fit the data model that well (attributes vs children etc.).
Is facet any better at it? (fortunately yes).
flatten+untagged enum is another ser/de pain point in Rust, how well does facet do there? (very well, thx to facet-solver).
