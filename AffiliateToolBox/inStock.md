## In-Stock Script Snippet

### Utilizes FontAwesome and Bootstrap

```
 <h3 class="greenText">
  <span class="amountInStock">
    <i class="fa fa-exclamation-circle"></i>
  </span> in stock
</h3>
```


```
<script>
     $('.amountInStock').append(' 5');
  setTimeout(function() {
    $('.amountInStock').empty();
    $('.amountInStock').append('<i class="fa fa-exclamation-circle"></i> 4');
    $('.stock h3').removeClass('greenText').addClass("orangeText");
    $('.stock h3').addClass('bounce-top');
  }, 7500);
  var animatePulsetwo = setInterval(removeBounce, 9000);

  function removeBounce() {
    $('.stock h3').removeClass('bounce-top');
  }

  setTimeout(function() {
    $('.amountInStock').empty();
    $('.amountInStock').append('<i class="fa fa-exclamation-circle"></i> 3');
    $('.stock h3').removeClass('orangeText').addClass("redText");
    $('.stock h3').addClass('bounce-top');
  }, 17000);

    </script>
```


              
