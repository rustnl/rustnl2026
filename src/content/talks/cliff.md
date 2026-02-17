---
tracks: 
 - A-1
title: "Common Pitfalls of Rewriting Things In Rust"
level: ""
tags: []
duration: 30 # 15 or 30 min
day: "tuesday"
---

While a lot of systems code can be expressed easily in Rust, there are common patterns from C, C++, and Go that are just more effort to copy than they're worth.
I'll go through some common cases, examine what properties of Rust make them harder to use, and evaluate alternative strategies that play more to the language's strengths.

Expect appearances from: cycles in callback pointers; intrusive linked lists; virtual class hierarchies; and more
