# Running Out of Diskspace 
### Wordpress Bitnami AWS EC2 LINUX/UNIX Server running Apache2
- unable to write files
- bloated wp_options table 

# Useful Links

Connect to phpMyAdmin locally to edit sql tables
* [Documentation](https://docs.bitnami.com/virtual-machine/faq/get-started/access-phpmyadmin/)
* http://127.0.0.1:8888/phpmyadmin/ 

```
- In the “Connection -> SSH -> Tunnels” section, add a new forwarded port by introducing the following values:
- Source port: 8888
- Destination: localhost:80
```

Purge Binary Logs
* [Documentation](https://dev.mysql.com/doc/refman/5.6/en/purge-binary-logs.html)
* Disable Bin logs
* my.cnf

# Useful CMD's

Restart MySQL Service via CMD line.
 
```
sudo /opt/bitnami/ctlscript.sh restart mysql
```
