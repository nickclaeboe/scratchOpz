# Defer YouTube Video Scripts to `data-src` to help page speed scores
### original article https://isotropic.co/how-to-defer-parsing-of-javascript-for-youtube-embeds/

```
<script>
   function init() {
      var vidDefer = document.getElementsByTagName('iframe');
      for (var i=0; i<vidDefer.length; i++) {
        if(vidDefer[i].getAttribute('data-src')) {
          vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
        } } }
  window.onload = init;
</script>
```

### Example embed code, grab `allow` etc.

```
<iframe width="768" height="432" src="https://www.youtube.com/embed/BJRxhCy1Qmk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

### Make these 2 changes
- the src="https://www.yo..." to data-src="https://www.yo..."
- Add a new src=""

* What this does is basically turn off the loading of the iFrame until we tell it to do so (using Javascript). The script tells the browser to load the iFrame, so whenever the browser gets to loading the script, the (deferred) loading of the iFrame occurs after.
