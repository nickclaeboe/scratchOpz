# Preload CSS styles
> DEFERING CSS , USE THIS ONE, SO PAGE ISN'T STUCK UNSTYLED WHILE LOADING RENDER BLOCKING ASSSETS

```
<link rel='preload' href='assets/combine_css.css' as='style' onload="this.onload=null;this.rel='stylesheet'"> 
<noscript><link rel="stylesheet" href="ssets/combine_css.css"></noscript> 
``` 

# CSS Hover Animations

```
.product:hover {
    transform: translateX(0px)translateY(-20px)scaleX(1)scaleY(1)rotate(0deg)skewX(0deg)skewY(0deg);
}
```

https://animate.style/[https://animate.style/]
