---
tracks:
 - applied-rust
title: "Creativity loves constraint (solvers) "
level: ""
tags: []
duration: 30 # 15 or 30 min
day: "wednesday"
---

Learn the maths behind constraint solvers, how to implement it efficiently with Rust linear algebra crates, and how we've built our new open-source, WebAssembly-compatible constraint solver.

The talk will introduce the idea of constraint solvers and why they're useful, walk the audience through the math behind them, then look at specifically how we implement that math in Rust efficiently. I'll show off how to use Faer, the linear algebra library, SymPy, a Python library for math which can output Rust code directly, WebAssembly analysis tools to help understand performance, and the proptest crate to gain confidence about our code quality.

The constraint solver we've built is completely open-source and MIT-licensed, which fills a gap in the market. Existing open-source solvers are GPL and the generally-used ones are proprietary and expensive. We hope to publicize this open-source library and ensure it's easy for the community to use this for building good software upon.
