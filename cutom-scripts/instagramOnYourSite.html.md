# Integrate Instagram on your site, social feed import

### HTML 
```
<div id="insta-feed"> 
  <div style="clear:both;"></div>
</div>
```

# jQuery 
```
<script>
var request = new XMLHttpRequest();
			request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=2979835415.a17b856.d0fcc4b02ba74dfbaf9899559987b1d7&count=8', true);
			request.onload = function(container) {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!
			    var data = JSON.parse(request.responseText);
			    for (var i=0;i < data.data.length;i++) {
			    	var container = document.getElementById('insta-feed');
			    	var imgURL = data.data[i].images.standard_resolution.url;
			    	console.log(imgURL);
					var div = document.createElement('div');
			        div.setAttribute('class','instapic');
			        container.appendChild(div);
			        var img = document.createElement('img');
			        img.setAttribute('src',imgURL)
			        div.appendChild(img);
			    }
			    console.log(data);
			  } else {
			  }
			};
			request.onerror = function() {
			  // There was a connection error of some sort
			};
			request.send();  
</script>
```

# CSS
```
<style>
div#insta-feed {
    width: 100%;
    margin: 0 auto 50px auto;
}

.instapic {
    max-width: 24%;
    float: left;
    margin: 0 5px 6px;
    overflow: hidden;
    max-height: 243px;
    background: #ffe5e9;
    min-height: 243px;
}

.instapic img {
    width: 100%;
    border: 1px solid;
}
div#img-14833-155-156 {
    margin-top: 118% !important;
}

}

div#insta-feed2 {
    width: 100%;
    margin: 0 auto;
}

.instapic2 {
    max-width: 24%;
    float: left;
    margin: 0 5px 6px;
    overflow: hidden;
    max-height: 243px;
    background: #ffe5e9;
    min-height: 243px;
}

.instapic2 img {
    width: 100%;
    border: 1px solid;
}

@media screen and (max-width:420px){
	.instapic2 {
    max-width: 98% !important;
    max-height: 50%;
}
}</style>
``` 
