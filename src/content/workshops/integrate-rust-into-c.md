---
title: "Integrate Rust into existing (embedded) C applications"
abstract: "Rust is a great fit for refactoring and extending existing C applications. Especially at low level. This workshop is about empowering people to integrate Rust into existing C applications - especially in the context of bare-metal microcontroller software. Let's get our hands dirty!"
level: "intermediate"
published: true
participants: 16
img: "integrate-rust-into-c.png"
---

This is a hands-on workshop where you will start with an existing C microcontroller application and learn how to extend it with Rust: How to integrate Rust into the build, how to add support for Rust's runtime, how call back and forth between the languages and how to make use of its breadth ecosystem. You will be the one making these steps - but no worries, you will be guided well along the way.

The application you are dealing with is a WiFi scanner displaying nearby networks on a small display. Your task will be to get Rust in this application, add already existing code for QR code generation, and finally to display the generated codes so that you can connect to open networks with a scan from your phone.

And what works in such an environment, works well in less restricted environments too.

If you feel comfortable with C and foundational Rust, are curious about how to bring them together and are not afraid of working with a microcontroller board, this workshop is for you.

# Prerequisites

* Intermediate Rust experience (you've built at least one small project in Rust)
* Laptop with a Rust toolchain installed (instructions follow)
* Workshop materials, sample code, and a microcontroller board will be provided

# Target Audience

Developers who can write working C and Rust code and want to learn how to integrate these languages (in an embedded context).

## What you'll learn

* What is required for the Rust runtime
* How to integrate into the (CMake) build of an existing C application
* How interface Rust and C with Rust's Foreign Function Interface (FFI)
* How to build, or better generate, FFI abstractions
* How to use static Rust containers
* How to add support for dynamic memory allocations