# Running Out of Diskspace 
### Wordpress Bitnami AWS EC2 LINUX/UNIX Server running Apache2
- unable to write files
- bloated wp_options table 

# Useful Links

Connect to phpMyAdmin locally to edit sql tables
* [DOCUMENTATION](https://docs.bitnami.com/virtual-machine/faq/get-started/access-phpmyadmin/)
* http://127.0.0.1:8888/phpmyadmin/ 

```
- In the “Connection -> SSH -> Tunnels” section, add a new forwarded port by introducing the following values:
- Source port: 8888
- Destination: localhost:80
```
* [BITNAMI FORUM POST](https://community.bitnami.com/t/something-taking-up-space-and-growing/64532)

# Purge Binary Logs
[DOCUMENTATION](https://dev.mysql.com/doc/refman/5.6/en/purge-binary-logs.html)
### additions to my.cnf
``` 
Disable Bin logs
expire_logs_days = 7
```

# Useful CMD's

Restart MySQL Service via CMD line.
 
```
sudo /opt/bitnami/ctlscript.sh restart mysql
```

Sorting Disk Usage

```
du -hs /opt/bitnami/*/*/* | sort -rh | head -5
```

# User Documented Fix
### Optimize Table in phpmyadmin
```
phpMyAdmin > wp_options > Operations > Analyze Table
```
[SOURCE](https://pixl.my/fixed-wp_options-table-is-huge-for-no-reason/)
