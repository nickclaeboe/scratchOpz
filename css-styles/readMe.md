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

https://animate.style/


## Absolute Centering with CSS
```
.parent{
  position: relative;
}
.child{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
	/******** use below on nav's **** repeated elements *******************/
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
	
	/******** use below on HOVER btn , etc.. **** repeated elements *******************/
	-webkit-transform: translateY(-5px);
    transform: translateY(-5px);
	transition: 0.2s linear;
	
	
* { 
	transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out; 
}
