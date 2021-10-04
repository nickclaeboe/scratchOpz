# PageSpeed Helpers & Scripts

### Defer iFrame video for page load optimization 

[Sauce](https://www.minddevelopmentanddesign.com/blog/how-to-defer-parsing-of-javascript-for-youtube-iframe-videos-in-wordpress/)

```
<script>
  function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
      if (vidDefer[i].getAttribute('data-src')) {
        vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
      }
    }
  }
  window.onload = init;
</script>
```


```
```

```
```
