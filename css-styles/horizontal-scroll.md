# Horizontal Scroll, CSS, infinite scroll

https://stackoverflow.com/questions/65908655/how-do-i-create-an-infinite-scrolling-image-gallery#answer-65923403

## CSS

```
html, body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  overflow: scroll;
}
*, *::before, *::after {
  box-sizing: border-box;
}
body {
background-color: black;
}
#permas {
  height: 150px;
  bottom: 0;
  background: blue;
  position: absolute;
  overflow:hidden;
  overflow-y: hidden;
  white-space:nowrap;
  
  /* added */
  left: 0;
  animation-name: scroll;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#permas img {
  height: 100%;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
<div id="permas">
```

## HTML

```
<div id="permas">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">

  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
  <img class="scroller" src="https://i.imgur.com/wURYltS.jpg">
</div>
```

