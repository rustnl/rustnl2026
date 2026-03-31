---
tracks: 
 - applied-rust
title: "Debunking Rust Wasm Performance Myths: Why We Moved Core Business Logic to Rust at Canva"
level: ""
tags: []
duration: 30 # 15 or 30 min
day: "wednesday"
---
There is an ongoing myth in the web community that states you should only reach for WebAssembly when you're doing "heavy computation"—image processing, games, AI, or complex simulations — because the overhead of Foreign-Function Interface (FFI) across the JS/Wasm barrier is supposedly too high for everything else.

In this talk we put those myths to the test by sharing lessons from shipping production-grade systems in Rust Wasm at Canva.

We will share findings ranging from the usage patterns the community expects (heavy compute running the Vello CPU 2D vector graphics rasteriser) to architectures the community advises against: complex application logic and data modelling via a fine-grained wasm-bindgen API.

We’ll demonstrate why cargo-culted understandings of Rust Wasm performance are dangerously incomplete.
