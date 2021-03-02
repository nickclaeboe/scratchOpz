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
