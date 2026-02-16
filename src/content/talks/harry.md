---
tracks: 
 - B-2
title: "Racing with Rust: building telemetry tools for racing simulators. "
level: ""
tags: []
duration: 15 # 15 or 30 min
day: ""
---

Car-simulator racing has seen a recent surge in activity, more users, and even more competitive driving at the E-sports levels.
As the community of e-sports drivers become more competitive, they require more detailed telemetry analysis tools to perfect car setups, and understand how to perfect their driving technique to gain the last 1/100ths of seconds...

This session introduces how I built a rust-based sim-racing telemetry tool.
The tool interacts with racing games via the game's shared-memory output, recording the telemetry in real-time as the car is being driven around the track.
Resulting data is uploaded to a website where graphs and analysis can be done to understand how to improve laptimes!

The Rust application being built is a windows binary, with a UI and system-tray, Game SHM interface (using windows SHM APIs, and some unsafe magic..) and a HTTPS endpoint to upload the telemetry to. 
We also built a WinSparkle wrapper for secure updates to the software.

During the talk, we discuss how the Rust language influenced the software architecture of the result; as real-time recording is required to extract the data from the game, performance and jitter matter!
