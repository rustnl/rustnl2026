---
tracks: 
 - compiler
title: "When Iterators Aren't Zero Cost"
level: ""
tags: []
duration: 15 # 15 or 30 min
day: "tuesday"
---
Here’s something that surprises many new Rust developers: iterators can be *faster* than hand-written loops. The compiler sees the pattern, LLVM works its magic, and the result outperforms manual code.

Now here’s something that surprises even experienced Rust developers: in certain cases, iterators make code 3-4x slower. We’re taught to believe that iterators are zero cost. But what happens when they aren't?

On modern CPUs, performance comes from pipelining and vectorization, and `rustc` does a lot of work to transform our beautiful chains of iterators into highly optimized machine code. But, sometimes we just ask too much. An innocuous definition of `next` can lead to a 100x slowdown, and adding seemingly unnecessary batching can recover the missing performance.

This talk covers the diagnosis (how to spot iterator overhead in profiles), the theory (why batching helps at the CPU level), and the implementation (a production batched iterator design using columnar storage, compile-time batch sizes, and skip-ahead semantics).
