FROM ubuntu:bionic

RUN DEBIAN_FRONTEND=noninteractive
RUN ln -fs /usr/share/zoneinfo/UTC /etc/localtime

RUN apt-get update
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:ondrej/php --yes
RUN apt-get update
RUN apt-get install -y vim apache2 php7.3 php7.3-xml php7.3-mbstring php7.3-sqlite php7.3-curl php7.3-intl php7.3-bcmath

RUN mkdir /var/www/teambrh
COPY ./ /var/www/teambrh/
COPY ./vhosts/teambrh.conf /etc/apache2/sites-enabled/teambrh.conf
COPY ./vhosts/apache2.conf /etc/apache2/apache2.conf
RUN a2enmod rewrite

RUN chmod 0777 -R /var/www/teambrh/storage
RUN chown www-data:www-data -R /var/www/teambrh/storage


ENTRYPOINT ["/var/www/teambrh/entry.sh"]
#RUN setup.sh

EXPOSE 80
