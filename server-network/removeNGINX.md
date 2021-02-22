## Address already in use: AH00072: make_sock: could not bind to address [::]:80
### This could be brought about by Nginx, if you have it install run these two command to uninstall it. Use commands(1 or 2) and 3

```
sudo apt-get remove nginx nginx-common
```
Removes all but config files.
```
sudo apt-get purge nginx nginx-common
```
Removes everything.
```
sudo apt-get autoremove
```
After using any of the above commands, use this in order to remove dependencies used by nginx which are no longer required.
