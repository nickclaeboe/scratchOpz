# Bitnami 
## Create an SSL certificate for Apache

Generate a new private key:
```
sudo openssl genrsa -out /opt/bitnami/apache2/conf/server.key 2048
```

Create a certificate:
```
sudo openssl req -new -key /opt/bitnami/apache2/conf/server.key -out /opt/bitnami/apache2/conf/cert.csr
```

Until the certificate is received, create a temporary self-signed certificate:
```
sudo openssl x509 -in /opt/bitnami/apache2/conf/cert.csr -out /opt/bitnami/apache2/conf/server.crt -req -signkey /opt/bitnami/apache2/conf/server.key -days 365
```

# Remove Bitnami Banner 
## Lower Right Page Peel Banner Removal CLI code
To remove the banner link to the Bitnami Info page, follow these steps:

Log in to into your server console using SSH and execute the following command. Remember to replace APPNAME with the actual name or directory location of your application.
- I use mostly wordpress for this 
```
sudo /opt/bitnami/apps/wordpress/bnconfig --disable_banner 1
```
- standard cmd
```
sudo /opt/bitnami/apps/APPNAME/bnconfig --disable_banner 1
```
Restart the Web server
```
sudo /opt/bitnami/ctlscript.sh restart apache
```
