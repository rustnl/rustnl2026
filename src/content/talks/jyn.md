---
tracks:
 - B-1
title: "Precise, consistent, and reliable code coverage "
level: ""
tags: []
duration: 30 # 15 or 30 min
day: "tuesday"
---

Most existing coverage tools are aimed at "good enough" measurements, where percentages are used as a rough estimate, and the change in percentage is used to determine whether a code change hurts or helps total coverage.

For Ferrocene, a safety-certified Rust compiler, rough estimates aren't enough. In this talk I describe how we made coverage precise enough that we can test in CI the exact source code lines that are covered, applied this to Rust's core library, and used it to demonstrate to a safety assessor that a subset of core has 100% line coverage, allowing it to be used in safety-critical systems.
