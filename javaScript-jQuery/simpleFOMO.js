// Footer  / Tracking Scripts

<script>
$(document).ready(function() { 
   	$('.notifyWrap').hide();
    $('.notifyWrap').delay(5000).slideToggle('fast');
	$('.notifyWrap').click(function(){
		$(this).slideToggle('fast');
	$('div#modalPopup').fadeIn('fast');
		$('.modalBackdropWrapper').show().css('opacity','1');
	}); 
}); 
</script>

// HTML at bottom of page

<div class="notifyWrap">
	<div class="notify">
      <img src="https://images.clickfunnels.com/26/2263b0b7bb42b8aa214eee6ca15771/notifyImg.png" class="img-fluid notifyImg" />
      <div class="signUp"><span class="freeGood">FREE GOODIES!</span></div>
      <div class="signUpSmTxt">Sign Up Now!</div>
	</div>
</div>

// CSS 

.notifyWrap {
width: 100%;
    max-width: 250px;
    min-height: 2rem;
    background: #f9fdff;
    padding: 1rem 1rem 0 1rem;
    text-align: center;
    display: flex;
    justify-content: space-around;
    border-radius: .5rem;
    opacity: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    border: 1px solid #0099d8;
    box-shadow: 0px 0px 3px #0000007d;
    margin-bottom: 2rem;
    margin-left: 2rem;
    cursor: pointer;
    align-content: space-between;
    align-items: center;
}
.notify {
    width: 175px;
    margin-bottom: 1rem;
}
.notifyImg {
    float: left; 
	margin-right:1rem;
}
.notify p {
	font-size:2rem
}
.freeGood {
    font-weight: 700;
    color: #00afef;
}
 
