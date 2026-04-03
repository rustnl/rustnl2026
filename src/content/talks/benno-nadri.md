---
tracks:
 - rust-project
title: "Field Projections — Making Custom Pointers feel Builtin"
level: ""
tags: []
duration: 30
day: "wednesday"
---

Rust makes heavy use of custom pointers filling the gap (&
going beyond) between references (`&T` and `&mut T`) and
raw pointers (`*const T` and `*mut T`). Currently, they
have two major issues: ergonomics and feature parity with
builtin references and `Box<T>`. Raw pointers and their
extensions (e.g. `NonNull<T>`) have especially bad
ergonomics. We are working on proposing the Field
Projection language feature that aims to remedy these
shortcomings of custom (dumb & smart) pointers. Our current
approach is an ambitious generalization of `Deref` that
supports a plethora of custom pointers from `MyBox<T>`
(that has *all* the properties of `Box<T>`) to
`VolatilePtr<T>` (which is only using
`{read,write}_volatile` to access the pointee). Our
proposal integrates tightly with existing features such as
place expressions, operations on places, the
borrow-checker, and autoref. Field Projections was a
[project goal in 2025H2](https://rust-lang.github.io/rust-project-goals/2025h2/field-projections.html)
and is very likely to [continue in 2026](https://rust-lang.github.io/rust-project-goals/2026/field-projections.html).
In the last few months we have made incredible progress and
want to involve greater parts of the community.
