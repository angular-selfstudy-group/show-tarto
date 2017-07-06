FROM nginx:latest

COPY dist/ /usr/share/nginx/html  
COPY .docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080