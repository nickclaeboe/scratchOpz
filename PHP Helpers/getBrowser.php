<?php
/// get user agent for custom browser styles
function get_browser_name($user_agent)
{
    if (strpos($user_agent, 'Opera') || strpos($user_agent, 'OPR/')) return 'Opera';
    elseif (strpos($user_agent, 'Edge')) return 'Edge';
    elseif (strpos($user_agent, 'Chrome')) return 'Chrome';
    elseif (strpos($user_agent, 'Safari')) return 'Safari';
    elseif (strpos($user_agent, 'Firefox')) return 'Firefox';
    elseif (strpos($user_agent, 'MSIE') || strpos($user_agent, 'Trident/7')) return 'IE';
    
    return 'Other';
}
$browserName =  get_browser_name($_SERVER['HTTP_USER_AGENT']);
?>	


<?php if(($browserName == 'Chrome')) {?>
		
		<link rel="stylesheet" href="assets/combine_css_iOS.css">
			
		<?php } else {?>
			
		<style>/* https://tryslimselect.com/m/v3/assets/combine_css.css */</style>
		<link rel='preload' href='assets/combine_css.css' as='style' onload="this.onload=null;this.rel='stylesheet'">
		<noscript><link rel="stylesheet" href="assets/combine_css.css"></noscript> 
		
		<?php } ?>
		
		
		
<style>
.IE #form form select {
	width: 185px;
	height: 26px;
	margin-right: 5px;
	margin-left: 9px;
	padding: 0 0 0 15px;
	font-size: 12px;
	color: #666;
}
.IE input[type="text"]{
	height:27px;
	width: 185px;
	margin-left: 8px;
	/* margin-right: 8px; */
	text-indent: 10px;
	border: 1px solid #ccc;
}
.Firefox #form form select {
	width: 159px !important;
	height: 30px;
	margin-right: 5px;
	margin-left: 9px;
	padding: 0 0 0 15px;
	font-size: 12px;
	color: #666;
}
.Chrome #form form select {
	width: 190px;
	height: 26px;
	margin-right: 5px;
	margin-left: 9px;
	padding: 0 0 0 15px;
	font-size: 12px;
	color: #666;
}
	.IE input::-ms-clear {
	display:none;
}
</style>

<body class="<?php echo get_browser_name($_SERVER['HTTP_USER_AGENT']); ?>">
	
	------------------------------------------------------------------------------------------------------------------
	------------------------------------------------------------------------------------------------------------------
	
	<?php
		//This code must be included at the top of your script before any output is sent to the browser
		//-even before <!DOCTYPE> declaration
		require_once realpath(dirname(__FILE__)."/resources/konnektiveSDK.php");
		$pageType = "leadPage"; //choose from: catalogPage, checkoutPage, upsellPage1, upsellPage2, upsellPage3, upsellPage4, thankyouPage
		$deviceType = "ALL"; //choose from: DESKTOP, MOBILE, ALL
		$ksdk = new KonnektiveSDK($pageType,$deviceType);
		include('echo.php');
		
		if(isset($_GET)){
			$path = http_build_query($_GET);
			$p = isset($_GET['p']) ? $_GET['p'] : 0;
		};
		
		$ext = 'png'; // set png as default in case script receives unrecognized browser type
		$style = 'default-png.css'; // not sure what your default css file is called
		
		function get_browser_name($user_agent)
		{
			if (strpos($user_agent, 'Opera') || strpos($user_agent, 'OPR/')) {
				return 'Opera';
			}
			elseif (strpos($user_agent, 'Edge')) {
				$ext = 'webp';
				$style = 'update-webp.css';
				return 'Edge';
			}
			elseif (strpos($user_agent, 'Chrome')) {
				$ext = 'webp';
				$style = 'update-webp.css';
				return 'Chrome';
			}
			elseif (strpos($user_agent, 'Safari')) {
				return 'Safari';
			}
			elseif (strpos($user_agent, 'Firefox')) {
				$ext = 'webp';
				$style = 'update-webp.css';
				return 'Firefox';
			}
			elseif (strpos($user_agent, 'MSIE') || strpos($user_agent, 'Trident/7')) {
				return 'IE';
			}
			
			return 'Other';
		}
		$browserName = get_browser_name($_SERVER['HTTP_USER_AGENT']);
		
	?>
	<!-- Stylesheet: -->
	<link rel="stylesheet" href="path/to/<?= $style ?>" />
	
	<!-- Images: -->
<img src="path/to/image.<?= $ext ?>?time()" />
