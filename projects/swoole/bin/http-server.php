<?php

require_once dirname(__DIR__).'/vendor/autoload.php';

use Swoole\Constant;
use Swoole\Http\Server;
use Swoole\Http\Request;
use Swoole\Http\Response;

$host = getenv('HOST') ?: '0.0.0.0';
$port = getenv('PORT') ?: '8080';

$server = new Server($host, (int) $port);

// All the options set here are optional.
$server->set(
    [
        Constant::OPTION_HTTP_COMPRESSION       => true,
        Constant::OPTION_HTTP_COMPRESSION_LEVEL => 5,
    ]
);

$server->on(
    "request",
    function (Request $request, Response $response) {
        // Next method call is to show how to change HTTP status code from the default one (200) to something else.
        $response->status('200');

        $response->header('Content-Type', 'application/json');

        $response->end(
            <<<EOT
            {
                "meta": {},
                "errors": [],
                "data": [
                    {
                        "id": "33c70830-2256-456f-b2b6-78ce5fabbb94"
                    }
                ]
            }
            EOT
        );
    }
);
$server->start();
