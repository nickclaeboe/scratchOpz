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

## Added CSS 

```

/******inStock******/
.yellowText {
  color: #ffb467;
  font-weight: 300
}

.discount {
  background-color: #c10700;
  color: #fff;
  position: absolute;
  padding: 5px 15px;
  z-index: 2;
  letter-spacing: .75px;
  border-radius: 20px;
  top: 30px;
  left: 5%;
  font-size: .8125rem
}

.redText {
  color: #b12704;
  font-size: 1.875rem
}

@media (max-width:1200px) {
  .redText {
    font-size: -webkit-calc(1.3125rem + .75vw);
    font-size: calc(1.3125rem + .75vw)
  }
}



.greenText {
  color: #00d981;
  font-size: 1.875rem
}

@media (max-width:1200px) {
  .greenText {
    font-size: -webkit-calc(1.3125rem + .75vw);
    font-size: calc(1.3125rem + .75vw)
  }
}

.orangeText {
  color: #fbd539;
  font-size: 1.875rem
}

@media (max-width:1200px) {
  .orangeText {
    font-size: -webkit-calc(1.3125rem + .75vw);
    font-size: calc(1.3125rem + .75vw)
  }
}

@media (max-width:768px) {


  .stock h3 {
    margin-top: 0
  }
}
```

              
