<?php

require_once dirname(__DIR__).'/vendor/autoload.php';

use Swoole\Http\Server;
use Swoole\Http\Request;
use Swoole\Http\Response;

use Slim\App;

$host = getenv('HOST') ?: '0.0.0.0';
$port = getenv('PORT') ?: '8080';

$server = new Server($host, $port);

// a swoole server is evented just like express
$server->on('start', function (Server $server) use ($host, $port) {
    echo sprintf('Swoole http server is started at http://%s:%s' . PHP_EOL, $host, $port);
});

// handle all requests with this response
$server->on('request', function (Request $req, Response $res) {
    // populate the global state with the request info
    $_SERVER['REQUEST_URI'] = $req->server['request_uri'];
    $_SERVER['REQUEST_METHOD'] = $req->server['request_method'];
    $_SERVER['REMOTE_ADDR'] = $req->server['remote_addr'];

    $_GET = $req->get ?? [];
    $_POST = $req->post ?? $req->rawContent();
    $_FILES = $req->files ?? [];

    // each request should create a new App()
    $app = new App();

    // example of a JSON response
    $app->get('/examples', function ($request, $response, $args) {
        return $response->withJson([
            'data' => [
                [ 'id' => '33c70830-2256-456f-b2b6-78ce5fabbb94' ]
            ]
        ]);
    });

    // suppress output by passing "true"
    $slim = $app->run(null);

    // transfer the Slim headers to the Swoole app
    foreach ($slim->getHeaders() as $key => $value) {
        // content length is set when calling "end"
        if ($key !== 'Content-Length') {
            $res->header($key, $value[0]);
        }
    }

    $res->status($slim->getStatusCode());

    // write the output
    $res->end($slim->getBody());
});

$server->start();
