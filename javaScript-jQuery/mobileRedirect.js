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
