---
tracks: 
 - main
title: "Untrusted data in Linux, how rust is going to save us"
level: ""
tags: []
duration: 30 # 15 or 30 min
day: "wednesday"
---

One of the most common security issues in all software is handling data that is not trusted properly. The Linux kernel is not unique in this, and has had some rudimentary ways to track data flowing from userspace into the kernel for decades. 

Unfortunately, that tracking is very limited, and relies on external checkers to be run on the codebase which often does not happen. One of the speaker's long-time goals is to fix this properly, with a way to always track when data is untrusted and passes the trusted barrier. 

It seems that Rust is going to finally provide this, allowing for a much more secure kernel over time, making the untrusted/trusted boundary explicit and mandatory to check. 

This talk is going to go into that proposal, why it's needed, and how it will work, ideally saving thousands of future kernel bugs from ever being able to be introduced.

