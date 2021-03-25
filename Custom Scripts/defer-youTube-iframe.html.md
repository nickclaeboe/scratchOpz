# How to Defer Parsing of Javascript for YouTube Iframe Videos 
### The key to making this work is a little bit of editing of the YouTube embed code. This will prevent the video from loading during the initial page render.
1. We need to remove the link from the iframe’s src attribute, so we are left with src=””
2. add a data-src attribute
3. add the link from the original src attribute to the data-src attribute

### Example Embed Share Code
```
<iframe width="560" height="315" src="" data-src="https://www.youtube.com/embed/Hpv3jqmYRjk" frameborder="0" allowfullscreen></iframe>
```

### Javascript Snippet
```
<script type="text/javascript">
    function init() {
      setTimeout(function () {
        var vidDefer = document.getElementsByTagName(‘iframe’);
        for (var i = 0; i < vidDefer.length; i++) {
          if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
          }
        }
      }, 1000);
    }
    window.onload = init;
</script>
```
