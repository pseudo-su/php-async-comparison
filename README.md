# PHP Async Comparison

This project is to explore different async runtimes and framework combinations in PHP with example projects.

## Goals

The aim is to implement a standard set of features/functionality in various different runtime+framework combinations to compare the implementations.

Features:

- Async PSR compliant HHTP server
- Async RabbitMQ Async message processor
- Async compatible postgres DB/ORM implementation

## Table comparison

| Project                | Status | Runtime        | Framework | Libraries                 | badges                                                                                                                                                                                                                                                                                                           |
|------------------------|--------|----------------|-----------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `amp`                  | ❌      | amp            | N/A       |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/amp-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/amp-acceptance-tests.json)           |
| `reactphp`             | 🚧     | reactphp       | N/A       |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/reactphp-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/reactphp-acceptance-tests.json) |
| `reactphp-driftphp`    | ❌      | reactphp       | driftphp  |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/reactphp-driftphp-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/reactphp-driftphp-acceptance-tests.json)           |
| `reactphp-ppm-symfony` | ❌      | reactphp + ppm | symfony   |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/reactphp-ppm-symfony-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/reactphp-ppm-symfony-acceptance-tests.json)           |
| `roadrunner`           | ❌      | roadrunner     | N/A       |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/roadrunner-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/roadrunner-acceptance-tests.json)           |
| `roadrunner-spiral`    | ❌      | roadrunner     | spiral    |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/roadrunner-spiral-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/roadrunner-spiral-acceptance-tests.json)           |
| `swoole`               | 🚧     | swoole         | N/A       | `php-amqplib/php-amqplib` | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/swoole-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/swoole-acceptance-tests.json)     |
| `swoole-slim`          | ❌      | swoole         | slim      |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/swoole-slim-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/swoole-slim-acceptance-tests.json)           |
| `swoole-swoft`         | ❌      | swoole         | swoft     |                           | ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/swoole-swoft-project-tests.json) ![](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/pseudo-su/7cc457b63114c8042d88652573411bed/raw/swoole-swoft-acceptance-tests.json)           |
