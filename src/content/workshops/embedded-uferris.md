---
title: "Empowered by the Ecosystem: Learning Embedded Rust with uFerris"
abstract: "The embedded Rust ecosystem is dynamic and rapidly growing. It is powerful, yet can be overwhelming without a solid mental model. In this workshop, you’ll learn how to navigate the ecosystem and use it to your advantage, staying resilient as crates evolve."
level: "intermediate"
published: true
---

A common path in embedded learning focuses on configuring and controlling peripherals, usually with code handed to learners for modification. While useful, this approach alone isn't enough most of the time for embedded Rust, where abstractions evolve, and examples can become outdated quickly.

This workshop teaches basic peripherals by example, but with an emphasis on ecosystem navigation. Participants will learn how to set up projects, understand embedded Rust driver patterns, read documentation effectively, and adapt public examples to their own needs. The goal is to build a mental model for navigating a fast-moving ecosystem. Not just “here’s how you program peripheral X on controller Y.”

The workshop will begin with an overview of key levels of abstraction in embedded Rust, then move into hands-on sessions covering project setup, basic I/O, GPIO, interrupts, and I2C. A recurring theme will be learning by discovering, fetching, and modifying existing examples from open-source repositories. Participants will practice finding examples, understanding how they work, and extending them. For example, converting a polling-based button example into an interrupt-driven one, or moving from raw I2C access to a driver crate.

The workshop will use the uFerris platform. uFerris is a versatile learning board designed to support multiple microcontrollers on a single reference platform, making it easy to switch targets without changing hardware. It also provides interfaces for several standard peripherals, allowing participants to practice and experiment with a consistent setup across targets.

Learning Outcomes:

- Navigating the Embedded Rust Ecosystem
- Setting up a Basic Project & Running Public Examples for Standard Peripherals
- Confidence in Reading Embedded Documentation
- Adapting Examples to Custom Needs

### Prerequisites

- Laptop with Rust toolchain & esp-flash installed
- uFerris Megalops Baseboard Hardware (will be provided)
- ESP32-C3 Xiao with pre-soldered pins (will be provided)
- Basic familiarity with Rust (e.g., variables, functions, structs, basic ownership concepts)
- Basic embedded or microcontroller experience not required, but would be helpful.

### Target Audience

Beginners in embedded Rust who want a practical, ecosystem-driven approach to learning embedded development.