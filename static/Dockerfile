# Dockerfile pour le serveur statique
FROM php:5.6-apache

# Copie des fichiers statiques dans le dossier web d'Apache
COPY src/ /var/www/html/

# Activation du module mod_rewrite pour Apache 
RUN a2enmod rewrite
