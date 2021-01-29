function setCampInfo(el) {
  
  if (el.value == 'FR' || el.value == 'CH' || el.value == 'DE' || el.value == 'IT' || el.value == 'FI' || el.value == 'NL' || el.value == 'ES' || el.value == 'SE' || el.value == 'BE' || el.value == 'SW' || el.value == 'NO' || el.value == 'DK') {
   document.getElementById('fullpartialform').action = 'checkout?c=EUR';
   document.getElementById('fullpartialform').setAttribute('data-gjs-sf-campaign-id', 7);
} else if (el.value == 'GB' || el.value == 'IE') {
   document.getElementById('fullpartialform').action = 'checkout?c=GBP';
   document.getElementById('fullpartialform').setAttribute('data-gjs-sf-campaign-id', 8);
} else if (el.value == 'NZ') {
   document.getElementById('fullpartialform').action = 'checkout?c=NZD';
   document.getElementById('fullpartialform').setAttribute('data-gjs-sf-campaign-id', 9);
} else if (el.value == 'AU') {
   document.getElementById('fullpartialform').action = 'checkout?c=AUD';
   document.getElementById('fullpartialform').setAttribute('data-gjs-sf-campaign-id', 6);
}
};

function setCampMobileInfo(el) {
  
  if (el.value == 'FR' || el.value == 'CH' || el.value == 'DE' || el.value == 'IT' || el.value == 'FI' || el.value == 'NL' || el.value == 'ES' || el.value == 'SE' || el.value == 'BE' || el.value == 'SW' || el.value == 'NO' || el.value == 'DK') {
   document.getElementById('order-form').action = 'checkout?c=EUR';
   document.getElementById('order-form').setAttribute('data-gjs-sf-campaign-id', 7);
} else if (el.value == 'GB' || el.value == 'IE') {
   document.getElementById('order-form').action = 'checkout?c=GBP';
   document.getElementById('order-form').setAttribute('data-gjs-sf-campaign-id', 8);
} else if (el.value == 'NZ') {
   document.getElementById('order-form').action = 'checkout?c=NZD';
   document.getElementById('order-form').setAttribute('data-gjs-sf-campaign-id', 9);
} else if (el.value == 'AU') {
   document.getElementById('order-form').action = 'checkout?c=AUD';
   document.getElementById('order-form').setAttribute('data-gjs-sf-campaign-id', 6);
}
};
