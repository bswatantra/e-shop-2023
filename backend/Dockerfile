FROM php:8.7-fpm

RUN apt-get update && \
	apt-get install -y libzip-dev iputils-ping supervisor wget



RUN wget https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions \
	&& cp install-php-extensions /usr/local/bin/


RUN chmod +x /usr/local/bin/install-php-extensions && \
	install-php-extensions @composer pgsql pdo_pgsql redis pcntl gd zip


RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

WORKDIR /var/www/html

COPY . /var/www/html

USER www


EXPOSE 8000
CMD ["php-fpm"]
