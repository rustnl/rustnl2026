---
tracks: 
 - B-1
title: "How we replace common C⁠(⁠+⁠+⁠) libraries with Rust at scale"
level: ""
tags: []
duration: 15 # 15 or 30 min
day: "tuesday"
---

Google depends on a lot of C(++) libraries for fundamental tasks like image and audio decoding, XML and JSON parsing, etc. Unfortunately, due to the nature of C and C++ these libraries are suspect to a large amount of memory safety vulnerabilites and are generally considere unsafe. To tackle this security risk, our team at Google moved all these common parsing and decoding libraries over to Rust alternatives. We use Crubit to expose a C++ interface for these libraries and then change the callsites to use the Rust alternative.

This talk will explain our experience while doing this kind of work and announce that we are open sourcing all these libraries’ C++ bindings, so that others can do the same. hile a lot of systems code can be expressed easily in Rust, there are common patterns from C, C++, and Go that are just more effort to copy than they're worth.
I'll go through some common cases, examine what properties of Rust make them harder to use, and evaluate alternative strategies that play more to the language's strengths.

Expect appearances from: cycles in callback pointers; intrusive linked lists; virtual class hierarchies; and more
