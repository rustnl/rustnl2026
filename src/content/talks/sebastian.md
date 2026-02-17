---
tracks: 
 - B-1
title: "Writing shaders for graphics in plain Rust"
level: ""
tags: []
duration: 30 # 15 or 30 min
day: "tuesday"
---

Rust-GPU is a rustc codegen backend that compiles embedded rust code to GPU shaders.
You can then use these shaders in bevy, your custom wgpu engine or with plain Vulkan.
But how does it compare to rust-like DSLs, such as wgsl or burn? Why are we targetting SPIR-V, yet can compile to wgsl?
And if we really can compile ordinary rust, what could we run on graphics cards?
