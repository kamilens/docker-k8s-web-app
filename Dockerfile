FROM nginx
EXPOSE 80
ADD ./dist/web-app /usr/share/nginx/html
