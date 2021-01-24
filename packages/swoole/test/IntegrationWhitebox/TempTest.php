<?php

declare(strict_types=1);

namespace Pseudo\PhpServiceTemplate\Test\IntegrationWhitebox;

use PHPUnit\Framework\TestCase;

/**
 * @covers \Pseudo\PhpServiceTemplate\AppConfig
 */
class TempTest extends TestCase
{
    public function testPlaceholder()
    {
        $this->assertEquals(true, true);
    }
}
