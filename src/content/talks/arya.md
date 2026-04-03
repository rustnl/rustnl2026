---
tracks: 
 - main
title: "Obsessive Optimization with String Interning"
level: ""
tags: []
duration: 15 # 15 or 30 min
day: "wednesday"
---

Low-level performance optimization is a challenging endeavor. 
It requires a wide breadth of knowledge and can be agonizingly slow. 
But there's such a sense of joy in seeing that your code has become that little bit faster. 
You can _always_ be better. 
It's my favorite thing in the world.

In this talk, I'll guide you through this process, with a deep dive in string interning. 
It has a simple problem statement, it's easy to write a naive implementation, and there's an _astonishing_ amount to optimize. 
I'll walk you through my journey of writing a multi-threaded string interner, from the problem statement to publishing the fastest string interning library on crates.io. 
My goal is to show you the joy of low-level optimization, and to share the tools needed to it yourself.
