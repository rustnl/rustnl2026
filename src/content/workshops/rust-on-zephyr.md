---
title: "Embedded Development With Rust on Zephyr"
abstract: "The Zephyr RTOS is a mature operating system ecosystem, with support for over 900 boards, and numerous features. Recently, it has become possible to develop applications in Rust running on Zephyr. There are a lot of pieces involved in doing this, both in setting up a development environment for Zephyr, configuring and building Zephyr, as well as integrating this with a Rust application."
level: "advanced"
participants: 20
published: true
---

The Zephyr RTOS is a mature operating system ecosystem, with support for over 900 boards, and numerous features. Recently, it has become possible to develop applications in Rust running on Zephyr. There are a lot of pieces involved in doing this, both in setting up a development environment for Zephyr, configuring and building Zephyr, as well as integrating this with a Rust application.

This workshop will begin with setting up a Zephyr development environment, as well as a general overview of how Zephyr works, from directory layout, configuration, building and such. The goal will be to run a basic C hello world program on Zephyr. We will then move on to running a Rust application, covering the additional configuration, along with how Zephyr's build system and cargo interact. This will end with a similar basic Rust hello world program running on the same target.

We will then move to more advanced areas of the parts of the Zephyr API that are currently exposed to Rust. The result of this will be a small multi-threaded program with interacting threads.

As the Zephyr API surface is large, and the Rust work is still in its early stages, we will cover how to safely use parts of the C API directly from Rust. This will include some of the common gotchas of this approach. Lastly, we will cover what is needed to make Rust-friendly interfaces to new parts of the Zephyr API, with the goal of hoping to bring more contributions to the project.

There will be an overview of the various tradeoffs between different modes of developing Rust programs on embedded devices, including bare metal, a "thin" platform, such as Embassy, or RTIC, and a richer RTOS interface, such as Rust on Zephyr.

Prerequisites:
- A laptop setup for Rust development. The course will focus on Mac or Linux machines. WSL2 might work, but there are challenges to accessing the hardware that will have to be done manually.
- The [https://docs.zephyrproject.org/latest/develop/getting_started/index.html](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) guide should be followed to setup the laptop to build and run Zephyr projects. Although we will cover this process, and assist where there are issues, following these directions before the workshop will allow more time to be spent on the Rust on Zephyr specifics. The participant should be able to run the hello world example on the qemu_x86 target.
- A Nordic ABCxyz board (provided)
- An available USB port
- A basic working knowledge of Rust programming in a desktop environment. You should be familiar with `Cargo.toml` and have written some Rust code.
- Knowledge of embedded or microcontroller programming
