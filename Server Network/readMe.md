# Sever-Network Helpers & Scripts
--------------------------------------------------------
# Optimizing EC2 Instance - Fresh Install
httpd.conf path: 
```
/opt/bitnami/apache2/conf/httpd.conf
```

## Leverage Browser Cacheing
> Uncomment 
```
" LoadModule expires_module modules/mod_expires.so " on line 112 of httpd.conf
```

Place below code  at the bottom just above the bitnami includes.
```
## GZIP COMPRESSION ##
SetOutputFilter DEFLATE
AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/x-javascript application/x-httpd-php
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4\.0[678] no-gzip
BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
BrowserMatch \bMSI[E] !no-gzip !gzip-only-text/html
SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-gzip
Header append Vary User-Agent env=!dont-vary
## GZIP COMPRESSION ##  
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

```
################# test this shit ##########################
<IfModule mod_mime.c>
    AddType text/css .css
    AddType application/x-javascript .js
    AddType text/x-component .htc
    AddType text/html .html .htm
    AddType text/richtext .rtf .rtx
    AddType image/svg+xml .svg .svgz
    AddType text/plain .txt
    AddType text/xsd .xsd
    AddType text/xsl .xsl
    AddType text/xml .xml
    AddType video/asf .asf .asx .wax .wmv .wmx
    AddType video/avi .avi
    AddType image/bmp .bmp
    AddType application/java .class
    AddType video/divx .divx
    AddType video/webm .webm
    AddType application/msword .doc .docx
    AddType application/vnd.ms-fontobject .eot
    AddType application/x-msdownload .exe
    AddType image/gif .gif
    AddType application/x-gzip .gz .gzip
    AddType image/x-icon .ico
    AddType image/jpeg .jpg .jpeg .jpe
    AddType application/vnd.ms-access .mdb
    AddType audio/midi .mid .midi
    AddType video/quicktime .mov .qt
    AddType audio/mpeg .mp3 .m4a
    AddType video/mp4 .mp4 .m4v
    AddType video/mpeg .mpeg .mpg .mpe
    AddType application/vnd.ms-project .mpp
    AddType application/x-font-otf .otf
    AddType application/vnd.oasis.opendocument.database .odb
    AddType application/vnd.oasis.opendocument.chart .odc
    AddType application/vnd.oasis.opendocument.formula .odf
    AddType application/vnd.oasis.opendocument.graphics .odg
    AddType application/vnd.oasis.opendocument.presentation .odp
    AddType application/vnd.oasis.opendocument.spreadsheet .ods
    AddType application/vnd.oasis.opendocument.text .odt
    AddType audio/ogg .ogg .ogv
    AddType application/pdf .pdf
    AddType image/png .png
    AddType application/vnd.ms-powerpoint .pot .pps .ppt .pptx
    AddType audio/x-realaudio .ra .ram
    AddType application/x-shockwave-flash .swf
    AddType application/x-tar .tar
    AddType image/tiff .tif .tiff
    AddType application/x-font-ttf .ttf .ttc
    AddType application/x-font-woff .woff
    AddType audio/wav .wav
    AddType audio/wma .wma
    AddType application/vnd.ms-write .wri
    AddType application/vnd.ms-excel .xla .xls .xlsx .xlt .xlw
    AddType application/zip .zip
    AddType application/json .json
</IfModule>

<FilesMatch "\.(php|html|htm|xml|js|css|json)$">
    FileETag None
    BrowserMatch MSIE best-standards-support
    AddDefaultCharset utf-8
    AddLanguage en-US .html .htm .css .js

    <IfModule mod_mime.c>
        AddCharset utf-8 .php .html .xml .css .js .json
    </IfModule>

    <IfModule mod_headers.c>
        Header unset ETag
        Header unset Pragma
        Header set X-UA-Compatible IE=8 env=best-standards-support
        Header append Vary: Accept-Encoding
    </IfModule>
</FilesMatch>

<FilesMatch "\.(ttf|otf|eot|woff)$">
    FileETag None
    AddDefaultCharset utf-8

    <IfModule mod_headers.c>
        Header unset ETag
        Header unset Pragma
        Header set Cache-Control "max-age=31536000, public, must-revalidate"
        Header append Access-Control-Allow-Origin "http://cloudfront.net"
    </IfModule>
</FilesMatch>

<FilesMatch "\.(jpg|jpeg|png|gif|swf)$">
    FileETag None

    <IfModule mod_headers.c>
        Header unset ETag
        Header unset Pragma
        Header set Cache-Control "max-age=31536000, public, must-revalidate"
    </IfModule>
</FilesMatch>

<FilesMatch "\.(js|css|jpg|png|jpeg|gif|xml|json|txt|pdf|mov|avi|otf|woff|ico|swf)$">
    RequestHeader unset Cookie
    Header unset Cookie
    Header unset Set-Cookie
</FilesMatch>
```

```
###################### Git Hub Master httpd.conf #####################################

# ----------------------------------------------------------------------
# Apache configuration file
# This file is best used in /apache2/httpd.conf, but works (slower) in .htaccess
#
# I've spent quite a bit of time compiling what I find to be optimial to me
# and my server. This file is based on:
# - HTML5BoilerPlate: https://github.com/h5bp/html5-boilerplate/
# - W3 Edge: http://www.w3-edge.com/
# - Yahoo! Best Practices: http://developer.yahoo.com/performance/rules.html
# - Caching Tutorial: http://www.mnot.net/cache_docs/
# - Personal experience
#
# v1.2 / 2013.07.01 / Greg Rickaby
# ----------------------------------------------------------------------

# Specify a Default Charset
AddDefaultCharset utf-8

# ----------------------------------------------------------------------
# Cache Control via HTTP Headers + Expires
# Generation of Expires and Cache-Control HTTP headers according to user-specified criteria
# http://httpd.apache.org/docs/2.0/mod/mod_headers.html
# ----------------------------------------------------------------------

# Expires Defaults
<IfModule mod_expires.c>
	ExpiresActive On
	# Set default expires to 2 days
	ExpiresDefault A172800
	ExpiresByType text/css A31536000
	ExpiresByType application/x-javascript A31536000
	ExpiresByType text/x-component A31536000
	ExpiresByType text/html A3600
	ExpiresByType text/richtext A3600
	ExpiresByType image/svg+xml A3600
	ExpiresByType text/plain A3600
	ExpiresByType text/xsd A3600
	ExpiresByType text/xsl A3600
	ExpiresByType text/xml A3600
	ExpiresByType video/asf A31536000
	ExpiresByType video/avi A31536000
	ExpiresByType image/bmp A31536000
	ExpiresByType application/java A31536000
	ExpiresByType video/divx A31536000
	ExpiresByType application/msword A31536000
	ExpiresByType application/vnd.ms-fontobject A31536000
	ExpiresByType application/x-msdownload A31536000
	ExpiresByType image/gif A31536000
	ExpiresByType application/x-gzip A31536000
	ExpiresByType image/x-icon A31536000
	ExpiresByType image/jpeg A31536000
	ExpiresByType application/vnd.ms-access A31536000
	ExpiresByType audio/midi A31536000
	ExpiresByType video/quicktime A31536000
	ExpiresByType audio/mpeg A31536000
	ExpiresByType video/mp4 A31536000
	ExpiresByType video/mpeg A31536000
	ExpiresByType application/vnd.ms-project A31536000
	ExpiresByType application/x-font-otf A31536000
	ExpiresByType application/vnd.oasis.opendocument.database A31536000
	ExpiresByType application/vnd.oasis.opendocument.chart A31536000
	ExpiresByType application/vnd.oasis.opendocument.formula A31536000
	ExpiresByType application/vnd.oasis.opendocument.graphics A31536000
	ExpiresByType application/vnd.oasis.opendocument.presentation A31536000
	ExpiresByType application/vnd.oasis.opendocument.spreadsheet A31536000
	ExpiresByType application/vnd.oasis.opendocument.text A31536000
	ExpiresByType audio/ogg A31536000
	ExpiresByType application/pdf A31536000
	ExpiresByType image/png A31536000
	ExpiresByType application/vnd.ms-powerpoint A31536000
	ExpiresByType audio/x-realaudio A31536000
	ExpiresByType image/svg+xml A31536000
	ExpiresByType application/x-shockwave-flash A31536000
	ExpiresByType application/x-tar A31536000
	ExpiresByType image/tiff A31536000
	ExpiresByType application/x-font-ttf A31536000
	ExpiresByType audio/wav A31536000
	ExpiresByType audio/wma A31536000
	ExpiresByType application/vnd.ms-write A31536000
	ExpiresByType application/vnd.ms-excel A31536000
	ExpiresByType application/zip A31536000
</IfModule>

# No caching for dynamic files
<filesMatch "\.(php|cgi|pl|htm)$">
	ExpiresDefault A0
	Header set Cache-Control "no-store, no-cache, must-revalidate, max-age=0"
	Header set Pragma "no-cache"
</filesMatch>

# 1 MIN
<filesMatch "\.(html)$">
	ExpiresDefault A60
	Header set Cache-Control "max-age=60, must-revalidate"
</filesMatch>

# 2 DAYS
<filesMatch "\.(xml|txt)$">
	ExpiresDefault A172800
	Header set Cache-Control "max-age=172800, must-revalidate"
</filesMatch>

# 1 WEEK
<filesMatch "\.(jpg|jpeg|png|gif|swf|js|css)$">
	ExpiresDefault A604800
	Header set Cache-Control "max-age=604800, must-revalidate"
</filesMatch>

# 1 MONTH
<filesMatch "\.(ico|pdf|flv)$">
	ExpiresDefault A2419200
	Header set Cache-Control "max-age=2419200, must-revalidate"
</filesMatch>

# ----------------------------------------------------------------------
# Mime Types
# Mime Associates the requested filename's extensions with the file's behavior and content
# http://httpd.apache.org/docs/2.0/mod/mod_mime.html
# ----------------------------------------------------------------------

<IfModule mod_mime.c>
	AddType text/css .css
	AddType application/x-javascript .js
	AddType text/x-component .htc
	AddType text/html .html .htm
	AddType text/richtext .rtf .rtx
	AddType image/svg+xml .svg .svgz
	AddType text/plain .txt
	AddType text/xsd .xsd
	AddType text/xsl .xsl
	AddType text/xml .xml
	AddType video/asf .asf .asx .wax .wmv .wmx
	AddType video/avi .avi
	AddType image/bmp .bmp
	AddType application/java .class
	AddType video/divx .divx
	AddType application/msword .doc .docx
	AddType application/vnd.ms-fontobject .eot
	AddType application/x-msdownload .exe
	AddType image/gif .gif
	AddType application/x-gzip .gz .gzip
	AddType image/x-icon .ico
	AddType image/jpeg .jpg .jpeg .jpe
	AddType application/vnd.ms-access .mdb
	AddType audio/midi .mid .midi
	AddType video/quicktime .mov .qt
	AddType audio/mpeg .mp3 .m4a
	AddType video/mp4 .mp4 .m4v
	AddType video/mpeg .mpeg .mpg .mpe
	AddType application/vnd.ms-project .mpp
	AddType application/x-font-otf .otf
	AddType application/vnd.oasis.opendocument.database .odb
	AddType application/vnd.oasis.opendocument.chart .odc
	AddType application/vnd.oasis.opendocument.formula .odf
	AddType application/vnd.oasis.opendocument.graphics .odg
	AddType application/vnd.oasis.opendocument.presentation .odp
	AddType application/vnd.oasis.opendocument.spreadsheet .ods
	AddType application/vnd.oasis.opendocument.text .odt
	AddType audio/ogg .ogg
	AddType application/pdf .pdf
	AddType image/png .png
	AddType application/vnd.ms-powerpoint .pot .pps .ppt .pptx
	AddType audio/x-realaudio .ra .ram
	AddType application/x-shockwave-flash .swf
	AddType application/x-tar .tar
	AddType image/tiff .tif .tiff
	AddType application/x-font-ttf .ttf .ttc
	AddType audio/wav .wav
	AddType audio/wma .wma
	AddType application/vnd.ms-write .wri
	AddType application/vnd.ms-excel .xla .xls .xlsx .xlt .xlw
	AddType application/zip .zip
</IfModule>

# ----------------------------------------------------------------------
# Gzip compression
# Compress content before it is delivered to the client
# http://httpd.apache.org/docs/2.0/mod/mod_deflate.html
# ----------------------------------------------------------------------

<IfModule mod_deflate.c>
	# Force deflate for mangled headers developer.yahoo.com/blogs/ydn/posts/2010/12/pushing-beyond-gzipping/
	<IfModule mod_setenvif.c>
		<IfModule mod_headers.c>
			SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
			RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
		</IfModule>
	</IfModule>

	<IfVersion < 2.4.4>
		<IfModule filter_module>
			# HTML, TXT, CSS, JavaScript, JSON, XML, HTC:
			FilterDeclare	COMPRESS
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$text/html
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$text/css
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$text/plain
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$text/xml
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$text/x-component
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$application/javascript
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$application/json
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$application/xml
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$application/xhtml+xml
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$application/rss+xml
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$application/atom+xml
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$application/vnd.ms-fontobject
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$image/svg+xml
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$image/x-icon
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$application/x-font-ttf
			FilterProvider	COMPRESS	DEFLATE	resp=Content-Type	$font/opentype
			FilterChain	COMPRESS
			FilterProtocol	COMPRESS	DEFLATE	change=yes;byteranges=no
		</IfModule>
	</IfVersion>
	
	<IfVersion >= 2.4.4>
		<IfModule filter_module>
			FilterDeclare	COMPRESS
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'text/html'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'text/css'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'text/plain'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'text/xml'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'text/x-component'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'application/javascript'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'application/json'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'application/xml'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'application/xhtml+xml'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'application/rss+xml'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'application/atom+xml'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'application/vnd.ms-fontobject'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'image/svg+xml'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'image/x-icon'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'application/x-font-ttf'"
			FilterProvider	COMPRESS	DEFLATE	"%{Content_Type} = 'font/opentype'"
			FilterChain	COMPRESS
			FilterProtocol	COMPRESS	DEFLATE	change=yes;byteranges=no
		</IfModule>
	</IfVersion>

	<IfModule !mod_filter.c>
		# Legacy versions of Apache
		AddOutputFilterByType DEFLATE text/html text/plain text/css application/json
		AddOutputFilterByType DEFLATE application/javascript
		AddOutputFilterByType DEFLATE text/xml application/xml text/x-component
		AddOutputFilterByType DEFLATE application/xhtml+xml application/rss+xml application/atom+xml
		AddOutputFilterByType DEFLATE image/x-icon image/svg+xml application/vnd.ms-fontobject application/x-font-ttf font/opentype
	</IfModule>

</IfModule>

# ----------------------------------------------------------------------
# Start rewrite engine
# Provides a rule-based rewriting engine to rewrite requested URLs on the fly
# http://httpd.apache.org/docs/2.0/mod/mod_rewrite.html
# ----------------------------------------------------------------------

# FollowSymLinks must be enabled for this to work
<IfModule mod_rewrite.c>
	Options +FollowSymlinks
	RewriteEngine On
</IfModule>

# Block access to "hidden" directories whose names begin with a period
<IfModule mod_rewrite.c>
	RewriteCond %{SCRIPT_FILENAME} -d
	RewriteCond %{SCRIPT_FILENAME} -f
	RewriteRule "(^|/)\." - [F]
</IfModule>

# ----------------------------------------------------------------------
# Disable server signature (Security)
# Configures the Server HTTP response header
# http://httpd.apache.org/docs/2.2/mod/core.html#serversignature
# ----------------------------------------------------------------------

ServerSignature Off
ServerTokens Prod

# ----------------------------------------------------------------------
# Disable directory browsing (Security)
# Generates directory indexes, automatically, similar to the Unix ls command or the Win32 dir shell command
# http://httpd.apache.org/docs/2.0/mod/mod_autoindex.html
# ----------------------------------------------------------------------

<IfModule mod_autoindex.c>
	Options -Indexes
</IfModule>

# ----------------------------------------------------------------------
# Block access to backup and source files (Security)
# This files may be left by some text/html editors and pose a great security danger
# ----------------------------------------------------------------------

<FilesMatch "(\.(bak|config|sql|fla|psd|ini|log|sh|inc|swp|dist)|~)$">
	Order allow,deny
	Deny from all
	Satisfy All
</FilesMatch>

# ----------------------------------------------------------------------
# Increase cookie security (Security)
# This files may be left by some text/html editors and pose a great security danger
# ----------------------------------------------------------------------
<IfModule php5_module>
	php_value session.cookie_httponly true
</IfModule>

# ----------------------------------------------------------------------
# Webfont access
# Allow access from all domains for webfonts.
# ----------------------------------------------------------------------

<IfModule mod_headers.c>
	<FilesMatch "\.(ttf|ttc|otf|eot|woff|font.css)$">
		Header set Access-Control-Allow-Origin "*"
	</FilesMatch>
</IfModule>

# ----------------------------------------------------------------------
# Force latest IE rendering engine
# ----------------------------------------------------------------------

<IfModule mod_headers.c>
	Header set X-UA-Compatible "IE=Edge,chrome=1"
		# mod_headers can't match by content-type, but we don't want to this header on everything
		<FilesMatch "\.(js|css|gif|png|jpe?g|pdf|xml|oga|ogg|m4a|ogv|mp4|m4v|webm|svg|svgz|eot|ttf|otf|woff|ico|webp|appcache|manifest|htc|crx|oex|xpi|safariextz|vcf)$" >
			Header unset X-UA-Compatible
		</FilesMatch>
</IfModule>

# ----------------------------------------------------------------------
# Instructs the proxies to cache two versions of the resource: one compressed, and one uncompressed. 
# https://developers.google.com/speed/docs/best-practices/caching#LeverageProxyCaching
# ----------------------------------------------------------------------
<IfModule mod_headers.c>
  <FilesMatch "\.(js|css|xml|gz)$">
    Header append Vary: Accept-Encoding
  </FilesMatch>
</IfModule>

# ----------------------------------------------------------------------
# CORS-enabled images (@crossorigin)
# Send CORS headers if browsers request them; enabled by default for images.
# http://developer.mozilla.org/en/CORS_Enabled_Image
# http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html
# http://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/
# http://wiki.mozilla.org/Security/Reviews/crossoriginAttribute
# ----------------------------------------------------------------------

<IfModule mod_setenvif.c>
	<IfModule mod_headers.c>
		<FilesMatch "\.(gif|png|jpe?g|svg|svgz|ico|webp)$">
			SetEnvIf Origin ":" IS_CORS
			Header set Access-Control-Allow-Origin "*" env=IS_CORS
		</FilesMatch>
	</IfModule>
</IfModule>
```
--------------------------------------------------------

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


---------------------------------------------------------

## Address already in use: AH00072: make_sock: could not bind to address [::]:80
### This could be brought about by Nginx, if you have it install run these two command to uninstall it. Use commands(1 or 2) and 3

```
sudo apt-get remove nginx nginx-common
```
Removes all but config files.
```
sudo apt-get purge nginx nginx-common
```
Removes everything.


After using any of the above commands, use this in order to remove dependencies used by nginx which are no longer required.
```
sudo apt-get autoremove
```
