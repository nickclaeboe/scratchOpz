# OuiBounce Snippets & Helpers

### Fire OuiBou8nce onPageLoad

```
<script>
  $(document).ready(() => {
    $('#ouibounce-modal').show();
  });
</script>
``` 
<!---------------- modal exit pop ouibounce ------------>
<!-- Add the OuiBounce CSS & Font -->

```
<link rel="stylesheet" href="css/ouibounce.css">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" rel="stylesheet" type="text/css">
```

<!-- Load jQuery -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script> -->

```
<script src="js/ouibounce.js"></script>
```

															
<!-- OuiBounce Modal -->
```
<div id="ouibounce-modal">
<div class="underlay"></div>
<div class="modal">
<div class="modal-body">

<a href="discount.php?<?php echo $path; ?>"><img src="images/downsell.jpg" /></a>
<div id="popClose"><a href="#" class="pop-close">No, Thanks.</a> </div>
</div>
</div>
</div>
```
<!-- Example page JS        -->
<!-- Used to fire the modal -->

```
<script>

var _ouibounce=ouibounce(document.getElementById('ouibounce-modal'),{aggressive:true,timer:0,callback:function(){console.log('ouibounce fired!');}});$('body').on('click',function(){$('#ouibounce-modal').hide();});$('#ouibounce-modal .modal-footer').on('click',function(){$('#ouibounce-modal').hide();});$('#ouibounce-modal .pop-close').on('click',function(){$('#ouibounce-modal').hide();});$('#ouibounce-modal .modal').on('click',function(e){e.stopPropagation();});
</script>
```


<!--------- hardcode pixels examples ----------->
