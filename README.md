# PHP Async Comparison

This project is to explore different async runtimes and framework combinations in PHP with example projects.

![PHP Composer](https://github.com/pseudo-su/php-async-comparison/workflows/PHP%20Composer/badge.svg)

## Goals

The aim is to implement a standard set of features/functionality in various different runtime+framework combinations to compare the implementations.

Features:

- Async PSR compliant HHTP server
- Async RabbitMQ Async message processor
- Async compatible postgres DB/ORM implementation

## Table comparison

![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/reactphp.json)

| Project                | Status | Runtime        | Framework | Libraries                 | badges                                                                                                                                   |
|------------------------|--------|----------------|-----------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `amp`                  | ❌      | amp            | N/A       |                           |                                                                                                                                          |
| `reactphp`             | 🚧     | reactphp       | N/A       |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/reactphp.json) |
| `reactphp-driftphp`    | ❌      | reactphp       | driftphp  |                           |                                                                                                                                          |
| `reactphp-ppm-symfony` | ❌      | reactphp + ppm | symfony   |                           |                                                                                                                                          |
| `roadrunner`           | ❌      | roadrunner     | N/A       |                           |                                                                                                                                          |
| `roadrunner-spiral`    | ❌      | roadrunner     | spiral    |                           |                                                                                                                                          |
| `swoole`               | 🚧     | swoole         | N/A       | `php-amqplib/php-amqplib` | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/swoole.json)   |
| `swoole-slim`          | ❌      | swoole         | slim      |                           |                                                                                                                                          |
| `swoole-swoft`         | ❌      | swoole         | swoft     |                           |                                                                                                                                          |
