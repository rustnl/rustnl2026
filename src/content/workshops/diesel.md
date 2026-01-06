---
title: "Building Web applications with Diesel"
abstract: "Diesel is a performant and type-safe query builder and ORM (object relational mapper) for Rust. In this hands-on workshop, you will learn how Diesel can be used to build web applications in Rust."
level: "intermediate"
published: true
---

In this workshop you will learn how to use Diesel to develop database based web applications in Rust. The workshop starts with an introduction to Diesel and Axum. Afterwards we will talk about testing strategies, how to integrate Diesel efficiently in an async environment and finally how to extend Diesel.

All parts of the workshop are accompanied by hands-on exercises. Participants will build their own small web application as part of the workshop.

The workshop consists of the following different parts:

### Diesel Basics

In this part, we will explain how Diesel models Insert, Query, Update and Delete statements. We develop an example application together to perform each of these operations. As part of this step you will see which of the offered options for each operation should be used in which use-case.

### Building Web applications with Diesel

Diesel on it's own let you interact with your database. To actually expose information received from the database via an web API an additional web framework like Axum is required. This part of the workshop will give you a short overview on how to use Axum for this task.

### Testing With Diesel

Writing tests is equally important to implementing functionality to ensure that your application is working as expected. In this part of the workshop we will talk about how to integrate Diesel efficiently in your test setup and what to test at all. We also shortly cover how to test Axum endpoints in an efficient manner.

### Using Diesel in an async environment

Database interactions often don't happen in isolation, but as part of a larger more complex system. In this workshop part we will learn about how to use Diesel in an async environment, which different solutions exist and what trade-offs are relevant. For this we will look at various real world examples and their choices.

### Extending Diesel

Diesel offers many features out-of-the-box, but sooner or later you may want to use something that’s not supported by the built-in DSL. In this workshop part you will learn how to extend the DSL (domain specific language) in such cases. It will be shown how to support custom SQL types and otherwise unsupported SQL constructs.

Diesel is a performant and type-safe query builder and ORM (object
relational mapper) for Rust.
In this hands-on workshop, you will learn how Diesel can be used to
build complex database-dependent applications.

## Target Audience

This workshop is designed for developers using Rust to develop software that interacts with database system. Participants are assumed to have at least basic Rust knowledge.

## Prerequisites

Participants are expected to bring their own laptop with a working Rust development setup.


