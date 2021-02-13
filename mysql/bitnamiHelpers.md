# Running Out of Diskspace 

- unable to write files
- bloated wp_options table 

# Connect to phpMyAdmin locally to edit sql tables

[docs](https://docs.bitnami.com/virtual-machine/faq/get-started/access-phpmyadmin/)

http://127.0.0.1:8888/phpmyadmin/ 

Disable Bin logs
my.cnf

Restart MySQL Service via CMD line.
>
```
sudo /opt/bitnami/ctlscript.sh restart mysql
```
