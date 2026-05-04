---
tracks:
 - rust-project
title: "Interop is the New Rewrite: Design Axioms for Rust's Next Frontier"
level: ""
tags: []
duration: 30
day: "wednesday"
---



Demand for Rust is growing rapidly in codebases currently dominated by C++. This presents the Rust Project with a huge opportunity and a difficult question: Can we build fine-grained cross-language interop without ruining Rust?

The forces of language adoption are running into fundamental limits of managing risk in large, heavily coupled systems. To meet this moment, Rust needs design efforts that span the language, libraries, and tooling to enable incremental migration. Rust maintainers need to understand the dynamics leading to its present success and future growth. And Rust users need to understand how the next phase of Rust adoption impacts them. We will answer:

- How do we introduce expressive extension points without making Rust a union of all languages?
- How do we establish "local soundness" in mixed Rust/C++ codebases?
- Why is this effort worth it for Rust users who don't care about interop?
- How should Rust Project teams govern and evaluate a wave of interop-motivated requests?

This is a roadmap for how we scale Rust's adoption without compromising our core values.
