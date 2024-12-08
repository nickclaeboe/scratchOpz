    RewriteEngine On
    RewriteCond %{HTTPS} off [OR]
    RewriteCond %{HTTP_HOST} ^www\. [NC]
    RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
    RewriteRule ^ https://%1%{REQUEST_URI} [L,NE,R=301]

https://stackoverflow.com/questions/1478173/htaccess-redirect-www-to-non-www-with-ssl-https#answer-47890904
