---
tracks: 
 - A-1
title: "Knock, knock. Race condition! Who's there? - A Refactoring Story "
level: ""
tags: []
duration: 30 # 15 or 30 min
day: ""
---

Concurrency in Rust can be hard, especially when the language throws other obstacles in your way. Like with this request that found me one day. What started as a humble ask to remove some indentation and nesting turned into a crime scene of concurrency gone wrong. Innocent memory being shared across tasks. A supervision task that made everything worse. A race condition waiting to strike.

In this talk, we will apply refactoring techniques that address structure, ownership, and readability, while simultaneously making the actual problem visible.

We'll solve the emerging concurrency problem by identifying what we actually want to accomplish, then turn everything upside down. In doing so, we'll rediscover proven patterns for async programming that predate async Rust but remain relevant today.
