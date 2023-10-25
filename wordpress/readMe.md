# WordPress Helpers & Scripts

Create A Custom PHP Application
Many users run a Bitnami stack as a development environment for their own PHP projects (as opposed to running third-party applications such as Joomla! or WordPress). To deploy your PHP application in this environment, follow these steps.

Create the same structure used by Bitnami when installing Bitnami PHP applications. To do this, follow these steps:

Run the following commands to create the directories and assign the necessary permissions.
```
sudo mkdir /opt/bitnami/myapp
sudo chown -R bitnami:daemon /opt/bitnami/myapp
sudo chmod -R g+w /opt/bitnami/myapp
```
Create and edit the /opt/bitnami/apache/conf/vhosts/myapp-vhost.conf file and add the configuration block shown below:
```
  <VirtualHost 127.0.0.1:80 _default_:80>
    ServerAlias *
    DocumentRoot /opt/bitnami/myapp
    <Directory "/opt/bitnami/myapp">
      Options -Indexes +FollowSymLinks -MultiViews
      AllowOverride All
      Require all granted
    </Directory>
  </VirtualHost>
```
NOTE: If your application uses .htaccess files, you should change the AllowOverride None option to AllowOverride All. Find out how to move the .htaccess file content to the main server configuration file.

Create and edit the /opt/bitnami/apache/conf/vhosts/myapp-https-vhost.conf file and add the configuration block shown below:
```
  <VirtualHost 127.0.0.1:443 _default_:443>
    ServerAlias *
    DocumentRoot /opt/bitnami/myapp
    SSLEngine on
    SSLCertificateFile "/opt/bitnami/apache/conf/bitnami/certs/server.crt"
    SSLCertificateKeyFile "/opt/bitnami/apache/conf/bitnami/certs/server.key"
    <Directory "/opt/bitnami/myapp">
      Options -Indexes +FollowSymLinks -MultiViews
      AllowOverride All
      Require all granted
    </Directory>
  </VirtualHost>
```
NOTE: If your application uses .htaccess files, you should change the AllowOverride None option to AllowOverride All. Find out how to move the .htaccess file content to the main server configuration file.

Restart the Apache server:

```
sudo /opt/bitnami/ctlscript.sh restart apache
```
You should now be able to access the application at http://SERVER-IP/.

NOTE: If you wish to deploy multiple custom applications with a separate virtual host for each, remove the ServerAlias * parameter from the configurations shown above, as this parameter will cause all applications to be served from the same virtual host. In this case, you must either configure different domains for each of your applications, or configure new Apache aliases to access the applications using subdirectories.

Once you have created and deployed your custom PHP application, you can also proceed to create and integrate a database with your application, or use a custom domain with it.

Check out the following tutorial if you want to learn more about configuring a custom PHP application.



