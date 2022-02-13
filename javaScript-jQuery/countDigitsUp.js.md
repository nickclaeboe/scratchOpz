https://stackoverflow.com/questions/23006516/jquery-animated-number-counter-from-zero-to-value#answer-23006629

## keep a reference to it at the beginning of your function (wrapped in $thisin my example):


```
$('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 1000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});

```

###  Update: If you want to display decimal numbers, then instead of rounding the value with Math.ceil you can round up to 2 decimals for instance with value.toFixed(2):

```
step: function () {
  $this.text(this.Counter.toFixed(2));
}
```
