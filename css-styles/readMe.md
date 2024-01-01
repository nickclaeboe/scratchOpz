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

```
.game {
  -webkit-filter: brightness(100%);
  -moz-filter: brightness(100%);
  -o-filter: brightness(100%);
  -ms-filter: brightness(100%);
  filter: brightness(100%);
}

.game:hover {
  -webkit-filter: brightness(50%);
  -moz-filter: brightness(50%);
  -o-filter: brightness(50%);
  -ms-filter: brightness(50%);
  filter: brightness(50%);
}
```
# Hover Effect, Darken Background

```

.profilepic {
  position: relative;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #111;
}

.profilepic:hover .profilepic__content {
  opacity: 1;
}

.profilepic:hover .profilepic__image {
  opacity: .5;
}

.profilepic__image {
  object-fit: cover;
  opacity: 1;
  transition: opacity .2s ease-in-out;
}

.profilepic__content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  transition: opacity .2s ease-in-out;
}

.profilepic__icon {
  color: white;
  padding-bottom: 8px;
}

.fas {
  font-size: 20px;
}

.profilepic__text {
  text-transform: uppercase;
  font-size: 12px;
  width: 50%;
  text-align: center;
}
```

```


<div class="profilepic">
  <img class="profilepic__image" src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" width="150" height="150" alt="Profibild" />
  <div class="profilepic__content">
    <span class="profilepic__icon"><i class="fas fa-camera"></i></span>
    <span class="profilepic__text">Edit Profile</span>
  </div>
</div>
```

https://stackoverflow.com/questions/67104652/hover-effect-change-your-picture-with-icon-on-profile-picture#answer-67105931

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
	
```	
* { 
	transition: all 0.3s ease-in-out;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out; 
}
```
