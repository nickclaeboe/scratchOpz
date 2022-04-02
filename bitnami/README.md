# Bitnami 

The following is a list of snippets and commands for daily use with AWS Lamp Bitnmai EC2 Deployable AMI`amazon machine image`

## Create an SSL certificate for Apache
- Generate a new private key:
```
sudo openssl genrsa -out /opt/bitnami/apache2/conf/server.key 2048
```
- Create a certificate:
```
sudo openssl req -new -key /opt/bitnami/apache2/conf/server.key -out /opt/bitnami/apache2/conf/cert.csr
```
- Until the certificate is received, create a temporary self-signed certificate:
```
sudo openssl x509 -in /opt/bitnami/apache2/conf/cert.csr -out /opt/bitnami/apache2/conf/server.crt -req -signkey /opt/bitnami/apache2/conf/server.key -days 365
```

## Remove Bitnami Banner 
> Lower Right Page Peel Banner Removal CLI code
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
> Reference/Documentation [Start or stop services](https://docs.bitnami.com/aws/how-to/bitnami-remove-banner/)
## Start or stop services
> Each Bitnami stack includes a control script that lets you easily stop, start and restart services.
- Obtain the status of a service:
```
sudo /opt/bitnami/ctlscript.sh status
```
- Call it without any service name arguments to start all services:
```
sudo /opt/bitnami/ctlscript.sh start
```
- Or use it to restart a single service, such as Apache only, by passing the service name as argument:
```
sudo /opt/bitnami/ctlscript.sh restart apache
```
- Use this script to stop all services:
```
sudo /opt/bitnami/ctlscript.sh stop
```
- Restart the services by running the script without any arguments:
```
sudo /opt/bitnami/ctlscript.sh restart
```
> Reference/Documentation [Start or stop services](https://docs.bitnami.com/aws/faq/administration/control-services/)

# Apache fails to start, Address already in use (but not really)
### Error 
`Address already in use: make_sock: could not bind to address 0.0.0.0:80`
### Issue
`Make sure you are not declaring Listen 80 twice in .conf files.`
- Run this shell cmd to find running apache processes
```
netstat -ltnp | grep :80
```
- then run 
```
sudo kill -9 1047
```
- Where `1047` is the pid of the program running on port `80`. You can replace the pid that you obtained from `netstat`

### Notes to address MYSQL not starting after above it addressed
```
In the same directory, you'll find binlog.index file.
windows: C:\Program Files\MySQL\MySQL Server X.0\data\binlog.index
Linux: /var/lib/mysql/binlog.index
Remove entry of './binlog.000007' and restart the server..
```

# Helpful CMD's
List diskspace and sort top 5 results
```
du -hs /opt/bitnami/*/*/* | sort -rh | head -5
```

Delete files from folder and print/show results as cmd runs
```
find . -type f -print -delete
```

### Password Protect Directories
```
https://docs.bitnami.com/aws/infrastructure/lamp/administration/use-htpasswd/
```
