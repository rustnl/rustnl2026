---
tracks:
 - B-1
title: "One Language, Two IDE Engines"
level: ""
tags: []
duration: 30 # 15 or 30 min
day: "tuesday"
---

What makes an IDE different from a compiler — and why does Rust stretch that distinction to its limits?
This talk explores what it means for an IDE to “understand” Rust code, and why features like name resolution, type inference, and powerful macros make that understanding so complex.
We’ll trace the evolution of Rust IDE support — from matklad’s and others' early work on IntelliJ Rust plugin and RLS into modern rust-analyzer and RustRover — and highlight how ideas, people, and approaches have crossed between the two ecosystems (including a few traces like the legendary “intellijrulez”).

We’ll then examine the architectural foundations behind these tools. rust-analyzer combines the roles of LSP server and query-based computational engine, designed for interactive, incremental analysis.
RustRover builds on the IntelliJ PSI framework, layering its own system of code insight and type reasoning.
Comparing how both engines handle project models, name resolution, macro expansion, type inference, and trait solving reveals two distinct but converging philosophies of IDE design — and points toward the next frontier: bringing MIR-level analysis and borrow checking into the editor itself.
