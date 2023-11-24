
### JQuery

```
  $(function() {
    var mouseY = 0;
    var topValue = 0;
    window.addEventListener("mouseout", function(e) {
        mouseY = e.clientY;
        if (mouseY < topValue) {
          $('.leavepop_all').addClass('showCoupon').show();
          e.stopPropagation();
        }
      },
      false);
  });
```

### HTML

```
<div id="leavePop1" class="leavepop_all">
  <div id="leaveX1" class="leaveX_all">
    <img src="https://s3.amazonaws.com/subscribe-funnels-production/assets/42484f1e-a087-42bf-90c4-086e8517fca2/images/xclose.png" width="35" height="35" alt="close x" class="lazy" />
  </div>
  <div id="innerB1" class="innerStyling innerB_all">
    <p>Save an EXTRA 15% OFF with this FREE COUPON!</p>
  </div>
  <div id="innerD1" class="innerStyling"> This is a special promotion that only 5 lucky visitors get per week. You must use this coupon or it will be given away to another customer. </div>
  <div id="couponAdded" class="innerButton_all">Activate My Coupon!
  </div>
</div>
```

https://stackoverflow.com/questions/10357744/how-can-i-detect-a-mouse-leaving-a-page-by-moving-up-to-the-address-bar

https://yeqhkh.subscribefunnels.com/ 
