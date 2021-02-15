# Create an SSL certificate for Apache

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
