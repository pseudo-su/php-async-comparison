FROM phpswoole/swoole:4.6.1-php8.0-alpine as builder

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app
COPY composer.json composer.lock ./

RUN composer install \
        --no-scripts \
        --no-progress \
        --no-suggest \
        --prefer-dist \
        --no-dev \
        --no-autoloader \
        --no-interaction

RUN composer dump-autoload \
        --no-scripts \
        --no-dev \
        --optimize

FROM phpswoole/swoole:4.6.1-php8.0-alpine as server

WORKDIR /app

COPY src/ src/
COPY bin/ bin/
COPY --from=builder /app/vendor /app/vendor

CMD [ "php", "./bin/http-server.php" ]
