# Scroll To Top of Page and Hide Button

### CSS
```
<style> 
.goToTop {
    display: none;
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 99;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: #00abf2;
    color: white;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 25px;
    border: 2px solid #0099d8;
}
.goToTop:hover {
    background-color: #555;
    box-shadow: 0px 0px 2px 1px #00000075;
}
</style> 
```

# HTML Snippet uses fontawesome.com icon
```
<a href="#" class="goToTop"><i class="fas fa-arrow-up"></i></a>
<!----- don't forget to include font awesome library somehow: https://fontawesome.com -->
<script type="text/javascript"> 
	$(".goToTop").bind('click', function(e) {
      e.preventDefault();
		var target = $('#formTop');
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 60
		}, 500, function() {});
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 800) {
			$('.goToTop').fadeIn();
		} else {
			$('.goToTop').fadeOut();
		}
	});
</script> 

```

## MINIFIDED VERSION 
```
<a href="#" class="goToTop"><i class="fas fa-arrow-up"></i></a>
```

```
<style>.goToTop {display: none;position: fixed;bottom: 15px;right: 15px;z-index: 99;font-size: 16px;border: none;outline: none;background-color: #00abf2;color: white;cursor: pointer;padding: 6px 10px;border-radius: 25px;border: 2px solid #0099d8;}.goToTop:hover {background-color: #555;box-shadow: 0px 0px 2px 1px #00000075;}</style>
```

```
<script type="text/javascript">$(".goToTop").bind('click',function(e){e.preventDefault();var target=$('#formTop');$('html, body').stop().animate({scrollTop:$(target).offset().top-60},500,function(){});});$(document).scroll(function(){var y=$(this).scrollTop();if(y>800){$('.goToTop').fadeIn();}else{$('.goToTop').fadeOut();}});</script>
```

