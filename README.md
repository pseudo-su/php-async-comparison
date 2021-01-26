# PHP Async Comparison

This project is to explore different async runtimes and framework combinations in PHP with example projects.

## Goals

The aim is to implement a standard set of features/functionality in various different runtime+framework combinations to compare the implementations.

Features:

- Async PSR compliant HHTP server
- Async RabbitMQ Async message processor
- Async compatible postgres DB/ORM implementation

## Table comparison

| Project                | Status | Runtime        | Framework | Libraries                 |
|------------------------|--------|----------------|-----------|---------------------------|
| `amp`                  | ❌      | amp            | N/A       |                           |
| `reactphp`             | 🚧     | reactphp       | N/A       |                           |
| `reactphp-driftphp`    | ❌      | reactphp       | driftphp  |                           |
| `reactphp-ppm-symfony` | ❌      | reactphp + ppm | symfony   |                           |
| `roadrunner`           | ❌      | roadrunner     | N/A       |                           |
| `roadrunner-spiral`    | ❌      | roadrunner     | spiral    |                           |
| `swoole`               | 🚧     | swoole         | N/A       | `php-amqplib/php-amqplib` |
| `swoole-slim`          | ❌      | swoole         | slim      |                           |
| `swoole-swoft`         | ❌      | swoole         | swoft     |                           |
