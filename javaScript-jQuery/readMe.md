# jQuery, Javascript 
##  Scripts & Helpers

### Document Ready Starter Template
```
<script type="text/javascript">
  $(document).ready(function() {
    
  });
</script>
```

## set product id:

```
$('#order_form').attr('data-gjs-sf-product', SFprodID);
```

## get product ID:

```
var SFprodID = $('#order_form').attr('data-gjs-sf-product');
```

### Document Ready Shorthand Starter Template `FIRE FIRST/IMMEDIATELY`
```
<script type="text/javascript">
  $(document).ready(() => {
    
  });
</script>
```
### Check this checkbox, unCheck all other checkboxes
```
<script>
  $('input.example').on('change', function() {
    $('input.example').not(this).prop('checked', false);  
  });
</script>
```
### Scroll to anchor on next page - put this code on the page you're landing on
```
<script>
  $('html,body').animate({
    scrollTop: $(window.location.hash).offset().top
  });
</script>
```
 ### Detect Mobile User Agent and Redired to Mobile Page
```
<script type="text/javascript">
    console.log(window.location.hash);
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent) ) {

      if(window.location.hash == "#desktop"){
        // Stay on desktop website
      } else {
        window.location = "https://<?php echo $site ;?>/m/<?php echo $version; ?>/index.php?<?php echo $path ?>";
      } 
    }
</script>
```
 
 ### Clear all cookies in all paths and all varieants of the domain
 
 ```
 <script>
   (function () {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
})();
</script>

 ```
 ### Correct way to add / remove class for .hover(); to execute properly 
 
 ``` 
  $('.prdWrap').mouseenter(function() {
    $(this).find('.addToCart').removeClass('d-none');
  });

  $('.prdWrap').mouseleave(function() {
    $(this).find('.addToCart').addClass('d-none');
  }).mouseleave(); 
```

http://jsfiddle.net/nuLubyut/ 
