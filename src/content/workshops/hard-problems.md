---
title: "How to learn hard things"
abstract: "Push yourself out of your comfort zone by fixing tricky bugs from a wide range of the computing field. Learn new tools, debugging skills, and mental models for thinking about programs."
level: "beginner to advanced"
participants: 16
img: "hard-problems.png"
published: true
---

One of the most valuable skills as a developer is learning new technologies and codebases. It’s a shame, then, that this skill is so rarely explicitly taught. In this workshop, you will get “exposure therapy” to working on hard problems with unfamiliar technologies, including debugging, development, and reading other people’s code.

This workshop does not require any particular prior knowledge; it is intentionally designed to be outside the comfort zone of most developers. Any level of experience, from student to Linux kernel or compiler hacker, is welcome.

The workshop will follow a learn‑by‑doing methodology, learning from peers and expert instructors. The exercises are shaped similarly to CTF challenges, but in a format that you might really see in an issue tracker or README. You are encouraged to work with and learn from other attendees :)

Exercises will include:

- a eBPF syscall tracer written in Rust
- a WASM sandbox for running Rust on the backend in a controlled environment
- LLVM coverage instrumentation internals
- distributed network proxies
- …and more!

**Note:** this workshop contains a wide array of exercises, some of which are highly platform specific. To make sure you can participate in as many as possible, please come with Linux and Docker already installed on your laptop. Full details of prerequisites are listed below. Don’t worry if you can’t install everything beforehand; there will be dedicated time for setup.

### prerequisites

All talks: a working Rust toolchain.

- eBPF: Linux install with working Rust toolchain (docker or WSL ok). libbpf and linux-headers.
- Coverage: LLVM tools (not just clang). [cargo-binutils](https://github.com/rust-embedded/cargo-binutils) provides an easy way to install these.
- WASM: docker.
- Network proxy: docker.
- libstdc++ symbols: docker.
