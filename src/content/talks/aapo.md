---
tracks:
 - rust-project
title: "Can I borrow that? (Reborrow traits)"
level: ""
tags: []
duration: 15
day: "wednesday"
---

Exclusive references make Rust, yet they cannot be built within
Rust: the core act of reborrowing, that is giving temporary
exclusive access and reclaiming exclusivity afterwards, is a
feature implemented outside of the language. For custom user
types or even reference wrappers like `Option<&mut T>` the best
one can do is use explicit methods like `as_deref_mut` or
`rb_mut`. The `Reborrow` traits project goal aims to fix this
gap and make exclusive references buildable within the
language. Come hear the how and why, why-nots, and what is to
come!
