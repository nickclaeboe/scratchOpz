https://ketofuelenhanced.com/v1/mobile/qualify.php?#
```
<?php
if(isset($_GET)){
	$path = http_build_query($_GET);
	$p = isset($_GET['p']) ? $_GET['p'] : 0;
};
include('echo.php');
?>
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Secure Order - <?php echo $productName; ?></title>
<meta name="description" content="Secure Order - <?php echo $productName; ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="content-language" content="en-us">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="HandheldFriendly" content="true">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
<meta name="robots" content="noindex,nofollow,noarchive,nosnippet,noydir,noodp">
<link rel="stylesheet" href="assets/index1/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/index1/css/all.min.css">
<link rel="stylesheet" href="assets/index1/css/v4-shims.css">
<link rel="stylesheet" href="assets/index1/css/custom.css">
<link rel="stylesheet" href="assets/index1/css/notify.css">
<link rel="stylesheet" href="assets/index1/css/keto.css">
<link rel="stylesheet" href="assets/index1/css/css.css" media="all">
<link rel="stylesheet" href="assets/index1/css/fLoader.css" media="all">
<!-- <link rel="stylesheet" href="assets/index1/css/icons.css" media="all"> -->
</head>
<body class="fi-2s quiz" style=""> 
  <!----- Quiz ----->
<!--   <div id="fakeLoader"></div> -->
  <div class="lander pb-3 quizBkgrd changBkgrd">
  <div class="container-fluid">

      <div class="row main-header">
        <div class="container" style="position: relative;">
          <div class="row">
            <img src="assets/index1/images/logo-white.svg" style="width:150px; max-width: 150px;height:75px;" class="header-logo my-2 mx-3">
            <div class="ml-2 pl-2 text-left" style="color:white;font-weight:bold;align-self:center;border-left:1px solid white;">ADVANCED<br>FORMULA</div>
          </div>
        </div>
      </div>

	<!---- Question 1 --->
      <div class="row mt-3 question1" style="padding:0px 3px;">
        <div class="container quiz-container">
          <div style="padding:0 30px;">
            <div class="text-center question-step-number" style="color:#666;font-weight:300;margin-bottom: 0;margin-top: 15px;">Question 1/5</div>
            <div class="progress" style="margin-bottom:20px;border:1px solid #999;">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="col-12">
            <h3 class="quiz-question text-center">Find out which KETO weight loss package you qualify for!</h3>
          </div>

          <div class="col-12">
            <h4 class="text-center quiz-action">Select your gender:</h4>
          </div>

          <a href="#" data-gender="male" class="click-gender btn btn-lg col-12 btn-male" id="manGender"><i class="fas fa-mars" aria-hidden="true"></i> Male</a>

          <a href="#" data-gender="female" class="click-gender btn btn-lg col-12 btn-female" id="womanGender"><i class="fas fa-venus" aria-hidden="true"></i> Female</a>

        </div>
      </div>
	  <!----/ Question 1 --->

      <!---- Question 2 --->
       <div class="row mt-3 question2" style="padding:0px 3px; display:none;">
        <div class="container quiz-container">

    					<div style="padding:0 30px;">
							<div class="text-center question-step-number" style="color:#666;font-weight:300;margin-bottom: 0;margin-top: 15px;">Question 2/5</div>
							<div class="progress" style="margin-bottom:20px;border:1px solid #999;">
								<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>

            <div class="col-12">
              <h3 class="quiz-question text-center">How physically active are you?</h3>
            </div>

            <a href="#" class="btn btn-lg col-12 btn-standard q2ans">Super Athletic (3-5 workouts / week)</a>
            <a href="#" class="btn btn-lg col-12 btn-standard q2ans">Light Exercise (1-2 workouts / week)</a>
            <a href="#" class="btn btn-lg col-12 btn-standard q2ans">A newbie (Just starting)</a>

          </div>
      </div>
	  <!----/ Question 2 --->

      <!---- Question 3 --->
       <div class="row mt-3 question3" style="padding:0px 3px; display:none;">
        <div class="container quiz-container">
    					<div style="padding:0 30px;">
							<div class="text-center question-step-number" style="color:#666;font-weight:300;margin-bottom: 0;margin-top: 15px;">Question 3/5</div>
							<div class="progress" style="margin-bottom:20px;border:1px solid #999;">
								<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>

              <div class="col-12">
                <h3 class="quiz-question text-center">How familiar are you with the Keto Diet?</h3>
              </div>

              <a href="#"><button type="button" class="btn btn-lg col-12 btn-standard q3ans">Expert</button></a>
              <a href="#"><button type="button" class="btn btn-lg col-12 btn-standard q3ans">I've heard a thing or two</button></a>
              <a href="#"><button type="button" class="btn btn-lg col-12 btn-standard q3ans">Beginner</button></a>
            </div>
      </div>
	  <!----/ Question 3 --->

      <!---- Question 4 --->
       <div class="row mt-3 question4" style="padding:0px 3px; display:none;">
        <div class="container quiz-container">
    					<div style="padding:0 30px;">
							<div class="text-center question-step-number" style="color:#666;font-weight:300;margin-bottom: 0;margin-top: 15px;">Question 4/5</div>
							<div class="progress" style="margin-bottom:20px;border:1px solid #999;">
								<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>

              <div class="col-12">
                <h3 class="quiz-question text-center">How willing are you to lose weight?</h3>
              </div>

              <a href="#" class="btn btn-lg col-12 btn-standard q4ans">I just want to try Keto diet</a>
              <a href="#" class="btn btn-lg col-12 btn-standard q4ans">I want to try it and lose some weight</a>
              <a href="#" class="btn btn-lg col-12 btn-standard q4ans">I want to lose maximum weight</a>

            </div>
      </div>
	  <!----/ Question 4 --->

      <!---- Question 5 --->
      <div class="row mt-3 question5" style="padding:0px 3px; display:none;">
        <div class="container quiz-container">

	<div style="padding:0 30px;">
		<div class="text-center question-step-number" style="color:#666;font-weight:300;margin-bottom: 0;margin-top: 15px;">Question 5/5</div>
		<div class="progress" style="margin-bottom:20px;border:1px solid #999;">
			<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
		</div>
            </div>

            <div class="col-12">
              <h3 class="quiz-question text-center">How much weight do you want to lose?</h3>
            </div>

            <a href="shipping.php?<?php echo $path; ?>" class="finalAns"><button type="button" class="btn btn-lg col-12 btn-standard q5ans">5-10 Lbs</button></a>
             <a href="shipping.php?<?php echo $path; ?>" class="finalAns"><button type="button" class="btn btn-lg col-12 btn-standard q5ans">10-15 Lbs</button></a>
             <a href="shipping.php?<?php echo $path; ?>" class="finalAns"><button type="button" class="btn btn-lg col-12 btn-standard q5ans">15-20 Lbs</button></a>
             <a href="shipping.php?<?php echo $path; ?>" class="finalAns"><button type="button" class="btn btn-lg col-12 btn-standard q5ans">25+ Lbs</button></a>
			<p id="loading-indicator" style="display:none;">Processing...</p>
          </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
	  <!----/ Question 5 --->

      <div class="clearfix"></div>
    </div>
  </div>
 <!----- Quiz ----->


<?php include('_footer.php'); ?>

  <style>
  p{
    overflow-wrap: break-word;
  }
</style>

<script src="assets/index1/js/jquery.min.js" type="text/javascript"></script>
<script src="assets/index1/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function(){
          $('.progress .progress-bar').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
          )
        });
    </script>

    <script>
       /*  $(document).ready(function(){ */
			$('#manGender').click(function(e){
				e.preventDefault();
				$('.quizBkgrd').addClass('genderMan');
				$('.quizBkgrd').removeClass('changBkgrd');
				$('.question1').slideUp('fast');
				$('.question2').slideToggle('fast')
			});
			$('#womanGender').click(function(e){
				e.preventDefault();
				$('.quizBkgrd').addClass('genderWoman');
				$('.quizBkgrd').removeClass('changBkgrd');
				$('.question1').slideUp('fast');
				$('.question2').slideToggle('fast')
			});
			$('.q2ans').click(function(){
				$('.question2').slideUp('fast');
				$('.question3').slideToggle('fast')
			});
			$('.q3ans').click(function(){
				$('.question3').slideUp('fast');
				$('.question4').slideToggle('fast')
			});
			$('.q4ans').click(function(){
				$('.question4').slideUp('fast');
				$('.question5').slideToggle('fast')
			});
			/* if(jQuery('#womanGender').data('clicked')) {
				$('.quizBkgrd').addClass('genderWoman');
			} else {
				$('.quizBkgrd').addClass('genderMan');
			}
			
		}); */
		/* $('.finalAns').click(function(e){
			e.preventDefault();                   																// prevent default anchor behavior
			var goTo = this.getAttribute('href'); 	// store anchor href
				$("#fakeLoader").show();																		// do something while timeOut ticks ... 
			setTimeout(function(){
				 window.location = goTo;
			}, 3000);                             																// time in ms
		});  */
    </script>
<script type="text/javascript" src="assets/index1/js/fLoader.min.js"></script>
<style>#loading-indicator { background-color: rgba(0, 0, 0, 0.5); bottom: 0;  box-sizing: border-box; height: 100%; left: 0;  margin: 0 auto; position: fixed;  right: 0; top: 0; width: 100%;  padding: 0px !important;  margin: 0px !important; font-size: 1px; z-index: 99990;}#loading-indicator:before { background: url("assets/img/loader.gif") no-repeat center center; box-sizing: border-box; content: "";  height: 70px; left: 50%;  margin-left: -35px; margin-top: -70px;  position: absolute; top: 50%; width: 70px;  z-index: 99996;}#loading-indicator:after {  background: #fff; border-radius: 5px; box-sizing: border-box; color: #000;  content: "Processing, one moment please... "; font-family: arial; font-size: 17px;  height: 110px;  left: 50%;  line-height: 98px;  margin-left: -150px;  margin-top: -75px;  padding-top: 35px;  position: absolute; text-align: center; top: 50%; width: 300px; z-index: 99995;}#crm-response-container { background: #ef4d1a;  border-radius: 4px; clear: both;  color: #fff;  font-family: arial; font-size: 12px;  line-height: 18px;  margin: 5px auto; padding: 5px 0 !important;  text-align: center; width: 92%;}</style>


<script>
$(document).ajaxStart(function(){
$("#loading-indicator").css("display", "block");
});

$(document).ajaxComplete(function(){
$("#loading-indicator").css("display", "none");
});
</script>


 <?php include('termsPopFooterscript.php'); ?>

<style type="text/css">
.changBkgrd  {
    background: url(assets/index1/images/bg-boygirl.jpg) top center no-repeat;
    background-size: cover;
}
.genderMan {
    background: url(assets/index1/images/bg-man.jpg) top center no-repeat;
    background-size: cover;
}
.genderWoman {
    background: url(assets/index1/images/bg-girl2.jpg) top center no-repeat;
    background-size: cover;
}
</style>
</body></html>
