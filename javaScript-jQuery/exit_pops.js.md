## HTML
```
<div id="exitOverlay" class="hidden exitpop"></div>
<div id="exitPopup" class="hiddenn exitpop" style="display:none;">
    <a href="checkout.php?<?php echo $path; ?>" id="exitLink" title="Discount Shipping"><img src="assets/img/exitpop.png" alt="Discount Shipping" class="popupimg" height="424" width="852">
        <div class="exit-bottle"> <img class="exitbottle adjuster" src="assets/img/product1.png" alt=""> </div>
    </a>
</div>
<div class="clickMe"></div>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
```
## Javascript
```
<script type="text/javascript">
	window.formSubmitted = false;
	window.internalLink = false;
	$(document).ready(function(e) {
		$('a').click(function() {
			window.internalLink = true;
		});
		var exitMessage = '\n*****************************************\nWAIT!!\n\nSpecial Discount Activated!\n\nVALID TODAY ONLY!\n*****************************************\n\nClick STAY ON PAGE below to receive your instant discount.\n';
		if (exitMessage) {
			function pageUnload() {
				if (!window.internalLink) {
					window.internalLink = false;
					$("#exitOverlay").css('height', $(document).height());
					$(".exitpop").show();
					return exitMessage;
					return false;
				}
			}
			window.onbeforeunload = pageUnload;
		}
		//modalOnClick();
		$('#order_form').submit(function() {
			window.internalLink = true;
			$(".exitpop").hide();
		});
		$('#exitPopup').click(function() {
			exitAction();
			return false;
		});
		
		function exitAction() {
			$("#exitOverlay").hide();
			$(".exitpop").hide();
			$(".redbar").slideDown('fast');
			$("#discount_price").html('-$7.00');
			$("#total_price").html('$2.95');
			$("#shipping_price").val('2.95');
			window.location.href = "discount.php?<?php echo $path; ?>";
		}
	});
</script>
<script>
  $(document).ready(() => {
    $('.clickMe').click();
  });
</script>
```
## CSS
```
<style>
  .redbar {
    background-color: #d22;
    min-height: 40px;
    float: left;
    display: none;
    width: 100%;
    position: relative;
    z-index: 9;
    border-bottom: 3px dashed white;
}
.exitbottle {
    position: relative !important;
    top: -301px !important;
    left: 300px !important;
    height: 225px !important;
}

.redbar-text {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    width: 100%;
    text-align: center;
}

#exitOverlay {
    background-color: #000;
    left: 0;
    opacity: 0.7;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 900;
}

#exitPopup {
       height: 608px;
    left: 50%;
    position: fixed;
    top: 10%;
    margin-left: -444px;
    width: 888px;
    z-index: 9999999;
}

.pop-up-background {
    background: #000;
    cursor: pointer;
    display: none;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    opacity: 0.6;
}

.pop-up-background-modal {
    cursor: default;
}

.pop-up {
    visibility: hidden;
    left: 50%;
    margin-left: 0;
    max-width: 800px;
    position: absolute;
    top: 10px!important;
    width: 90%;
    z-index: 100;
}

.pop-up.small {
    margin-left: -200px;
    max-width: 400px;
}

.pop-up.medium {
    margin-left: -300px;
    max-width: 600px;
}

.pop-up.large {
    margin-left: -400px;
    max-width: 800px;
}

.pop-up-content {
    background: #fff;
    box-shadow: 0px 1px 1px 2px #ccc;
    min-height: 30px;
    padding: 24px;
    font-family: tahoma;
}

.pop-up-content h1 {
    font-size: 15px;
    font-weight: bold;
}

.pop-up-content p {
    font-size: 15px;
    line-height: 20px;
}

.pop-up-content p strong {
    font-weight: bold;
}

.pop-up-content .close,
.pop-up-footer {
    text-align: right;
}

.pop-up-footer {
    padding-top: 24px;
}

.pop-up-body {
    font-size: 16px;
    color: #666;
    font-family: Arial, Helvetica, sans-serif;
}

.pop-up-display-content {
    display: none;
}

.pop-up .close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;
}

.pop-up .close a {
    font-size: 18px;
    color: #d22;
    width: 24px;
    height: 24px;
    background: url(../images/icon-cross.png) no-repeat 0 0;
    display: inline-block;
}

.pop-up .close a:hover {
    opacity: 0.6;
}

.pop-up-btn {
    padding: 8px 15px;
    display: inline-block;
    background: #3B4658;
    border-radius: 3px;
    margin-left: 10px;
    color: #fff;
    font-size: 15px;
    text-decoration: none;
}

.pop-up-btn:hover,
.pop-up-btn:focus {
    background: #6A798E;
}

.pop-up .screen-reader-text {
    position: absolute;
    top: -9999px;
    left: -9999px;
}

.ie6 .pop-up {
    border: 10px solid #CED4E2;
    width: 600px;
}

@media only screen and (max-width:760px) {
    .pop-up.large {
        left: 5%;
        margin: 0;
    }
}

@media only screen and (max-width:480px) {
    .pop-up.small,
    .pop-up.medium {
        left: 5%;
        margin: 0;
    }
    .pop-up-content {
        padding: 12px;
    }
    .pop-up-footer {
        padding-top: 12px;
    }
}

</style>
```
