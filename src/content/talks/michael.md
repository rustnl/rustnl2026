---
tracks:
 - B-2
title: "Programming Your Own DSL in Rust – Experiences from Developing µcad"
level: ""
tags: []
duration: 30 # 15 or 30 min
day: ""
---

In 2025, we developed µcad (pronounced micro-cad), a domain-specific language for CAD for describing geometries.
The µcad interpreter and renderer is implemented almost entirely in Rust, leveraging the language’s performance, features and tooling.

In this talk, we will share experiences and insight about:

* which Rust crates we have used
* how we achieved consistency between language specification and documentation,
* auto-generating tests
* architectural patterns

We will discuss what worked well, what surprised us, and the lessons we learned while developing a domain-specific programming language from scratch.
