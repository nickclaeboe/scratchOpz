<VirtualHost *:80>
    ServerName funnelopz.com
    ServerAlias www.funnelopz.com
    DocumentRoot "/opt/bitnami/apps/wordpress/htdocs"
    
    Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
</VirtualHost>

<VirtualHost *:443>
    ServerName funnelopz.com
    ServerAlias www.funnelopz.com
    DocumentRoot "/opt/bitnami/apps/wordpress/htdocs"
    SSLEngine on
 #   SSLCertificateFile "/opt/bitnami/apps/wordpress/conf/certs/server.crt"
 #  SSLCertificateKeyFile "/opt/bitnami/apps/wordpress/conf/certs/server.key"
    SSLCertificateFile "/opt/bitnami/apache2/conf/funnelopz_com.crt"
    SSLCertificateKeyFile "/opt/bitnami/apache2/conf/fopz.key"
    SSLCertificateChainFile /opt/bitnami/apache2/conf/funnelopz_com.ca-bundle
        SSLProtocol all -SSLv2 -SSLv3
        SSLCipherSuite ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA;
        SSLHonorCipherOrder on
    Include "/opt/bitnami/apps/wordpress/conf/httpd-app.conf"
</VirtualHost>
