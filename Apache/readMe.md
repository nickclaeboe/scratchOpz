# Security Headers 
## `.htaccess` Apache 2 Server

```
Header always set X-Frame-Options SAMEORIGIN
Header always set X-Xss-Protection "1; mode=block"
Header always set X-Content-Type-Options "nosniff"
Header set Referrer-Policy: no-referrer-when-downgrade
Header add Strict-Transport-Security "max-age=31415926;includeSubDomains;"
Header set Content-Security-Policy: frame-ancestors 'none';
Header set Content-Security-Policy: default-src https:; script-src https:; style-src https:
```

### Injecting Security Headers via `PHP`

```
<?php 								
  if (!headers_sent()) {
    $headers_list = headers_list();
    if (!in_array("X-XSS-Protection", $headers_list)) {header("X-XSS-Protection: 1; mode=block"); }
    if (!in_array("X-Content-Type-Options", $headers_list)) {header("X-Content-Type-Options: nosniff"); }
    if (!in_array("X-Frame-Options", $headers_list)) {header("X-Frame-Options: SAMEORIGIN"); }
    if (!in_array("Strict-Transport-Security", $headers_list)) {header("Strict-Transport-Security: max-age=2592000; includeSubDomains"); }
    if (!in_array("Content-Security-Policy", $headers_list)) {header("Content-Security-Policy: upgrade-insecure-requests"); }
    if (!in_array("Referrer-Policy", $headers_list)) {header("Referrer-Policy: strict-origin-when-cross-origin"); }
  }
?>
```

## `example.com.nginx.conf` NGINX Server

```
add_header X-Frame-Options SAMEORIGIN always;
add_header X-Xss-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy: no-referrer-when-downgrade;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Content-Security-Policy "default-src https:; script-src https: 'unsafe-inline'; style-src https: 'unsafe-inline'; ";
add_header Feature-Policy "geolocation none;midi none;notifications none;push none;sync-xhr none;microphone none;camera none;magnetometer none;gyroscope none;speaker self;vibrate none;fullscreen self;payment none;";
```

## Correctly redirect to https - virtual hosts, bitnami SSL.conf

    RewriteEngine On
    RewriteCond %{HTTPS} off [OR]
    RewriteCond %{HTTP_HOST} ^www\. [NC]
    RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
    RewriteRule ^ https://%1%{REQUEST_URI} [L,NE,R=301]

https://stackoverflow.com/questions/1478173/htaccess-redirect-www-to-non-www-with-ssl-https#answer-47890904
