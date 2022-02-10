
<script>
$(window).load(function(){ 
	$(function() {
		var navbarOffset = $(".navbar").height() + 10;
		var shiftWindow = function() { scrollBy(0, -navbarOffset); };
		window.addEventListener("hashchange", shiftWindow);
		if (window.location.hash) shiftWindow();
	});
  
	$("a[href^='#']").on('click', function(e) {
	   e.preventDefault();
	   var hash = this.hash;
	   $('html, body').animate({
		   scrollTop: $(this.hash).offset().top - 60
		 }, 300, function(){
			 window.location.hash = hash;
		 });
	});
});  
</script>
