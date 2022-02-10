<!----------------FLOATING SUBMIT BUTTON FOR MOBILE -------------------------------------------------	--------->
<style>
   .back-to-top {position: fixed;bottom: 1%;right: 0px;text-decoration: none;color: #000000;background-color: rgba(235, 235, 235, 0.80);display: none;width: 100%;text-align: center;}.back-to-top:hover {background-color: rgba(135, 135, 135, 0.50);}a.back-to-top.c2abtn.pulse {color: #fff;background: #f24d11;}@media screen and (min-width:480px) {.back-to-top {display:none !important;}}
</style>
<!---floatingSubmitMobile--->
<a href="#" class="back-to-top c2abtn pulse">Rush My Order</a>
<link rel="stylesheet" type="text/css" href="css/floatingSubmit.css" />
<!--- <<<< include for css above -->
<script>            
   jQuery(document).ready(function() {
   	var offset = 1000;
   	var duration = 500;
   	jQuery(window).scroll(function() {
   		if (jQuery(this).scrollTop() > offset) {
   			jQuery('.back-to-top').fadeIn(duration);
   		} else {
   			jQuery('.back-to-top').fadeOut(duration);
   		}
   	});
   	
   	jQuery('.back-to-top').click(function(event) {
   		event.preventDefault();
   		jQuery('html, body').animate({scrollTop: 730}, duration);
   		return false;
   	})
   });
</script>
<!---/floatingSubmitMobile--->
