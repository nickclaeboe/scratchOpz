## preVirtualHost.conf

```
SSLUseStapling off
```

```
<IfModule mod_deflate.c>
	# Insert filter
	SetOutputFilter DEFLATE
	<IfModule mod_setenvif.c>
		# Netscape 4.x has some problems…
		BrowserMatch ^Mozilla/4 gzip-only-text/html

		# Netscape 4.06-4.08 have some more problems
		BrowserMatch ^Mozilla/4.0[678] no-gzip

		# MSIE masquerades as Netscape, but it is fine
		BrowserMatch bMSIE !no-gzip !gzip-only-text/html

		# Don’t compress images
		SetEnvIfNoCase Request_URI .(?:gif|jpe?g|png)$ no-gzip dont-vary
	</IfModule>

	<IfModule mod_headers.c>
		# Make sure proxies don’t deliver the wrong content
		Header append Vary User-Agent env=!dont-vary
	</IfModule>
</IfModule>
```

```
## EXPIRES CACHING ##
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/pdf "access plus 1 month"
ExpiresByType text/x-javascript "access plus 1 month"
ExpiresByType application/x-shockwave-flash "access plus 1 month"
ExpiresByType application/javascript "access plus 1 year"
ExpiresByType image/x-icon "access plus 1 year"
ExpiresDefault "access plus 2 days"
ExpiresByType application/vnd.ms-fontobject "access plus 1 year"
ExpiresByType application/x-font-ttf "access plus 1 year"
ExpiresByType application/x-font-opentype "access plus 1 year"
ExpiresByType application/x-font-woff "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
## EXPIRES CACHING ##
```

```
<filesMatch ".(ico|pdf|flv|jpg|jpeg|png|gif|svg|js|css|swf|webp)$">
Header set Cache-Control "max-age=31536000, public"
</filesMatch>
```


