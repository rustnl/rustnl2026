---
tracks:
 - main
title: "Tracking down undefined behaviour in Servo"
level: ""
tags: []
duration: 30 # 15 or 30 min
day: "wednesday"
---

Servo is a web rendering engine written in Rust that relies on a lot of unsafe code. What actually happens when that unsafe code breaks the language's rules?

We'll walk through a mysterious panic in Servo that took two weeks to understand and resolve, explore how undefined behaviour in a program can manifest, and discuss techniques to catch similar issues before they ships.
