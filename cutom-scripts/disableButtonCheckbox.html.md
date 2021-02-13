# Disable Button Input Until Conditional Checkbox is Checked
### e.g. 
```
<input type="checkbox" id="checkMe" class="disableMe" />
```

# jQuery Code Snippet
```
<script type="text/javascript">
	// function to toggle element
  function disableBtn() {
    if ($('.toggle-disable-btn').hasClass('disabled')) {
      $('.toggle-disable-btn').removeClass('disabled');
      $('.cart-btn').removeAttr('disabled');
    } else {
      $('.toggle-disable-btn').addClass('enabled');
    }
  }

  // Examples of how to call our function
  $('.enableMe').change(function() {
    disableBtn();
  });

</script>
```

# CSS Code Snippet
```
<style type="text/css">

.toggle-disable-btn {
  background: transparent;
  border: 2px solid transparent;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.toggle-disable-btn.disabled {
  background: #ccc;
  border: 2px solid #9E9E9E;
  font-style: italic;
  color: #606060;
  cursor: not-allowed !important;
}

</style>
```

# HTML Code Snippet
```
<div class="prodsld-btn">
	<button id="cartBtnTake" disabled="" data-gjs-type="Shopping Cart Add Item" data-gjs-sf-plugin-type="add" data-gjs-sf-product="{{prod1pid}}" data-gjs-sf-route="cart" class="cart-btn toggle-disable-btn disabled">Add to cart</button> </div>
<p class="prod-desc">

<input type="checkbox" id="insft" required="" class="checkbox enableMe toggle-disable-btn" /> I agree to the <a draggable="true" href="terms" id="ix2bp">Terms and Conditions</a> and <a draggable="true" href="privacy" id="iuc6i">Privacy Policy</a>. By placing your order of {{brandName}} {{product1Name}} you will be charged the total of {{product1Price}} today and your product will be shipped immediately. This purchase will appear on your credit card statement as &quot;{{billingDescriptor}}&quot;.</p>
```
