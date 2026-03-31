---
tracks:
 - rust-project
title: "FFI in Miri at 8000 segfaults per second"
level: ""
tags: []
duration: 30
day: "wednesday"
---

Miri is an essential tool for checking unsafe Rust code, but it
had always been limited to running that code and no more. Work
has been done over the past years to make it possible to
perform arbitrary FFI from within it while still detecting
almost all UB, enabling more and more real-world code to be
validated. Doing so required writing most of a debugger inside
Miri, pulling in a disassembler, and making very liberal use of
unix signals.
