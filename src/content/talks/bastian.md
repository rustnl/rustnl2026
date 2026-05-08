---
tracks: 
 - compiler
title: "How we replace common C⁠(⁠+⁠+⁠) libraries with Rust at scale"
level: ""
tags: []
duration: 15 # 15 or 30 min
day: "tuesday"
---

Google depends on a lot of C(++) libraries for fundamental tasks like image and audio decoding, XML and JSON parsing, etc. 
Unfortunately, due to the nature of C and C++ these libraries are suspect to a large amount of memory safety vulnerabilites and are generally considere unsafe. 
To tackle this security risk, our team at Google moved all these common parsing and decoding libraries over to Rust alternatives. 
We use Crubit to expose a C++ interface for these libraries and then change the callsites to use the Rust alternative.

This talk will explain our experience while doing this kind of work and announce that we are open sourcing all these libraries’ C++ bindings, so that others can do the same. 
