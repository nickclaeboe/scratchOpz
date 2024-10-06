  var ProductImg = '{{extractQueryParam 'product_image'}}';
  console.log(ProductImg);  
  var DecodedProductImg = decodeURIComponent((ProductImg + '').replace(/\+/g, '%20'));
  console.log(DecodedProductImg);  
  $('.prd-img').attr('src', decodeURIComponent(DecodedProductImg));

// https://stackoverflow.com/questions/4292914/javascript-url-decode-function/4458580#4458580
