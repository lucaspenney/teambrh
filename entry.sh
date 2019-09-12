#!/bin/bash
/usr/bin/php /var/www/teambrh/artisan config:cache
/usr/bin/php /var/www/teambrh/artisan key:generate
/usr/bin/php /var/www/teambrh/artisan config:cache
/usr/sbin/apachectl -D FOREGROUND