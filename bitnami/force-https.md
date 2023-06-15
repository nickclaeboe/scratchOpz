```
  <VirtualHost _default_:80>
    DocumentRoot "/opt/bitnami/apache/htdocs"
    RewriteEngine On
    RewriteCond %{HTTPS} !=on
    RewriteCond %{HTTP_HOST} !^(localhost|127.0.0.1)
    RewriteRule ^/(.*) https://example.com/$1 [R,L]
    ...
  </VirtualHost>
  ```
