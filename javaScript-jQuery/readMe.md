# jQuery, Javascript 
##  Scripts & Helpers

### Document Ready Starter Template
```
<script type="text/javascript">
  $(document).ready(function() {
    
  });
</script>
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
 
