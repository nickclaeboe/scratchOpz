# ClickFunnels Helpers & Scripts
## how to set up nav bar click to scroll on clickfunnels 

### jQuery Code Snippet
```
<script>

$(".nav1").bind('click',function(e){
	e.preventDefault();
		jQuery('html, body').animate({scrollTop:$('#tmp_headline1-20734-175').offset().top},1000);
	});
$(".nav2").bind('click',function(e){
	e.preventDefault();
		jQuery('html, body').animate({scrollTop:$('#section--67893-185').offset().top},1000);
	});
$(".nav3").bind('click',function(e){
	e.preventDefault();
		jQuery('html, body').animate({scrollTop:$('#section--67893-176').offset().top},1000);
	});
	
</script>
```

### Font Awesome Include
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
```

### Helper links
1. [Link 1](https://haircult.net/sales-pageypn37swi)
2. [Link 2](http://www.clipular.com/posts/4793924682776576?k=kZJk1fXLODFkajzFaT0DqgVZP5k)

### tracking code in footer  
1. [Link 1](http://www.clipular.com/posts/6365662327603200?k=cr8iM0JSFNkBz23Kwtt97GoofIg)
1. [Link 2](http://www.clipular.com/posts/4676484187553792?k=6dG2B_V5tdqUUHE5Kf5gkOkTOXs)

## Random Numbers Script for ClickFunnels Page Builder 
```
<h2 class="custHTML"><b><span id="plans"></span> plans</b> available in <span id="cityLocate"></span></h2>
<p>We've helped <span id="helpPPL"></span> people in your area!</p>

<script language="javascript">
$(document).ready(function()  {
  var x = Math.floor((Math.random() * 2500) + 1);
  document.getElementById("helpPPL").innerHTML = x;
});
$(document).ready(function()  {
  var y = Math.floor((Math.random() * 50) + 1);
  document.getElementById("plans").innerHTML = y;
});
</script>
```
 
```
<script language="javascript">
$(document).ready(function() {
  function generate() {
    $('#plans').text(Math.floor(Math.random() * 50) + 1);
    $('#helpPPL').text(Math.floor(Math.random() * 2500) + 1);
  };
});
</script>
```

```
<script>
  (function() {
    const el = document.getElementById('helpPPL');
    var min = document.getElementById('helpPPL').dataset.RandnumMin || 0;
    var max = document.getElementById('helpPPL').dataset.RandnumMax || 0;
    var rand;
    if (!isNaN(min) && !isNaN(max)) {
      min = Math.ceil(min);
      max = Math.floor(max)
      rand = Math.floor(Math.random() * (max - min)) + min;
      el.innerText = rand;
    }
  })();
</script>
```
