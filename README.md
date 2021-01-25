# PHP Async Comparison

The goal of this project is to explore different async runtimes and framework combinations in PHP with example projects.

## Goals

The Goal is to implement a standard set of features/functionality in various different runtime+framework combinations to compare the implementations.

Features:

- Async PSR compliant HHTP server
- Async RabbitMQ Async message processor
- Async compatible postgres DB/ORM implementation

## Table comparison

| Project                | Runtime        | Framework | Implementation |
| ---------------------- | -------------- | --------- | -------------- |
| `amp`                  | amp            | N/A       | ❌             |
| `reactphp`             | reactphp       | N/A       | 🚧             |
| `reactphp-driftphp`    | reactphp       | driftphp  | ❌             |
| `reactphp-ppm-symfony` | reactphp + ppm | symfony   | ❌             |
| `roadrunner`           | roadrunner     | N/A       | ❌             |
| `roadrunner-spiral`    | roadrunner     | spiral    | ❌             |
| `swoole`               | swoole         | N/A       | 🚧             |
| `swoole-swoft`         | swoole         | swoft     | ❌             |
| `swoole-slim`          | swoole         | slim      | ❌             |
