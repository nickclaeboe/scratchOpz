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

# if debugging and can't delete files off server
* [StackOverFlow discussion/reference](https://stackoverflow.com/questions/11289551/argument-list-too-long-error-for-rm-cp-mv-commands#answer-48377999)

- If you’re trying to delete a very large number of files at one time (I deleted a directory with 485,000+ today), you will probably run into this error:

```
/bin/rm: Argument list too long.
```

- The problem is that when you type something like rm -rf *, the * is replaced with a list of every matching file, like “rm -rf file1 file2 file3 file4” and so on. There is a relatively small buffer of memory allocated to storing this list of arguments and if it is filled up, the shell will not execute the program.

- To get around this problem, a lot of people will use the find command to find every file and pass them one-by-one to the “rm” command like this:

```
find . -type f -exec rm -v {} \;
```

- My problem is that I needed to delete 500,000 files and it was taking way too long.

- I stumbled upon a much faster way of deleting files – the “find” command has a “-delete” flag built right in! Here’s what I ended up using:

```
find . -type f -delete
```

- Using this method, I was deleting files at a rate of about 2000 files/second – much faster!

- You can also show the filenames as you’re deleting them:

```
find . -type f -print -delete
```

- …or even show how many files will be deleted, then time how long it takes to delete them:

```
root@devel# ls -1 | wc -l && time find . -type f -delete
```

```
100000
real    0m3.660s
user    0m0.036s
sys     0m0.552s
```
# Purge Binary Logs
[DOCUMENTATION](https://dev.mysql.com/doc/refman/5.6/en/purge-binary-logs.html)
### additions to my.cnf
2 Snippets to append to the [mysqld] section of your my.cnf
* bitnami addressed the binlog issue with their newer AMI's
``` 
expire_logs_days = 7
```
or
```
binlog_expire_logs_seconds=604800
```
both snippets are essentially the same thing, the latter of the 2 above is the newest included in the new bitnami aws ec2 wordpress AMI's
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
