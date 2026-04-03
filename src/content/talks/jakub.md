---
tracks:
 - rust-project
title: "Rewriting bors: how hard can it be?"
level: ""
tags: []
duration: 30
day: "wednesday"
---

Three years ago, we set out to rewrite bors, the merge queue
bot used to merge all pull requests in the `rust-lang/rust`
repository. A merge queue bot just parses some pull request
commands, then pushes commits to a repo, waits until CI is
green and merges the result into a target branch. Sounds
simple, right? How hard can that be? Well, let's find out
together in this talk! I'll show what infrastructure changes we
had to make to enable using new bors, how its integration test
suite works and how we designed it to robustly handle various
nasty race conditions so that it is able to battle with
GitHub's quirks.
