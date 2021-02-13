# Attention jQuery script at the top of the page 

### Stylesheet 
```
<style> .attention {margin: 14px 0 0;font-family: 'Open Sans';font-weight: 300;font-size: 14px;color: #666666;padding-top: 8px;padding-left: 20px;padding-bottom: 8px;padding-right: 30px;background: #F8F8F8;border: 1px solid #CCCCCC;box-sizing: border-box;border-radius: 3px;box-shadow: none;-webkit-box-shadow: none;position: relative;}.attention span{color: #DB3D24;font-weight: 700;}.icon-exclamation{width: 34px;height: 32px;float: left;margin: 3px 14px 0 -5px;background: url("images/icon-exclamation.svg") no-repeat center;}.icon-close{width: 18px;height: 18px;float: right;position: absolute;top: 7px;right: 7px;background: url("images/icon-close.svg") no-repeat center;cursor: pointer;}img.img-responsive.logoImg {margin: 11px 0 0px -4px;}.kform_productBox {cursor: pointer;}@media screen and (max-width:480px){.fbPost{width:100%;}}</style>
```

### HTML Code Snippet
```
<div class="row" style="display:none;">
	<div class="container">
		<div class="col-sm-12 attention" style="display:block;">
			<div class="icon-exclamation"></div>
			Due to increased demand for our offers with free bottles we have a limited supply. As of <span style="color: #DB3D24;"><script type="text/javascript">getDate(0)</script></span> we currently have the product <span style="color: #DB3D24;">IN STOCK</span> and are ready to ship within 24 hours of purchase.
			<div class="icon-close"></div>
		</div>
	</div>
</div>
```

### jQuery Code Snippet
```
<script defer>
setTimeout(function(){$(".attention").stop().slideToggle('slow');},1200);$(".attention .icon-close").click(function(){$(".attention").stop().slideToggle('slow');});
</script> 
```

## NOTE
- Confirm jQuery Library is being imported before the above script is executed
- [jQuery Libraries](https://developers.google.com/speed/libraries/devguide#jquery)

Recent Release
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
```
