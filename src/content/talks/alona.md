---
tracks: 
 - B-1
title: "Out of tree access to compiler state"
level: ""
tags: []
duration: 30 # 15 or 30 min
day: ""
---

The rust compiler develops a rich understanding of your source code. In addition to using this to produce an executable, this is also use to power many tools (such as `rustdoc`, `miri`, and `clippy`) that ship with the rust toolchain.

But what if you want to do this for your own tool? There are many different ways to get access to `rustc`'s understanding, each with their own tradeoffs.

This talk will discuss why you might want access to such understanding, the ways to get it, why those ways are all unsatisfactory, and what the rust project could do to make this better.
