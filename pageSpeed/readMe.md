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

## Lazy Load images below the fold
Definition: 
> Lazy Loading is a set of techniques in web and application development that defers the loading of resources on a page to a later point in time—when those resources are actually needed instead of loading them up front.
> These techniques help in improving performance, better utilization of the device’s resources and reducing associated costs.

### Lazy loading images in an image tag
To defer the load, put the image URL in an attribute other than src. Let’s say we specify the image URL in the data-src attribute of the image tag. Now that src is empty and the browser won’t trigger the image load:
```
<img data-src="https://ik.imagekit.io/demo/default-image.jpg" />
```
Next, use the following JS to trigger the `data-src` to load the deferred images
```
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
```

## Lazy Load CSS Background Images
### HTML 
```
<div id="bg-image" class="lazy"></div>
``` 
### CSS
```
* {
  font-family: sans-serif;
}

#container {
  font-size: 20px;
  line-height: 30px;
  max-width: 600px;
}

#bg-image.lazy {
   background-image: none;
   background-color: #F1F1FA;
}
#bg-image {
  background-image: url("https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-600,h-400");
  max-width: 600px;
  height: 400px;
}
```
### javaScript
```
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})
```
-----------------------
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

## What this does is basically turn off the loading of the iFrame until we tell it to do so (using Javascript). The script tells the browser to load the iFrame, so whenever the browser gets to loading the script, the (deferred) loading of the iFrame occurs after.
