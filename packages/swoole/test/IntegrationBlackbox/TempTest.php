<?php

declare(strict_types=1);

namespace Pseudo\AsyncExamples\Swoole\Test\IntegrationBlackbox;

use PHPUnit\Framework\TestCase;

/**
 * @covers \Pseudo\AsyncExamples\Swoole\AppConfig
 */
class TempTest extends TestCase
{
    public function testTempEndpoint()
    {
        $this->markTestIncomplete(
            'This test has not been implemented yet.'
        );
        $url = "http://localhost:8080";
        $options = array(
            'http' => array(
            'method'  => 'POST',
            'header' => "Content-Type: application/json\r\n" .
                       "Accept: application/json\r\n"
            )
        );
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        $response = json_decode($result, true);

        $this->assertEquals($response['ok'], true);
    }
}
