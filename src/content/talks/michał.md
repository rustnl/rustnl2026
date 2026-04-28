---
tracks:
 - rust-project
title: "Why Rust's Semantics Don't Fit GPUs (Yet)"
level: ""
tags: []
duration: 15
day: "wednesday"
---

GPUs are a world fraught with unsafe code - and a place where Rust still
struggles to find its footing. The semantics of Rust are insufficient to
correctly model GPUs: we lack support for address spaces, convergence, and the
thread-local stack. In this talk, I want to discuss how we work around those
issues and what fully fixing them would require.
