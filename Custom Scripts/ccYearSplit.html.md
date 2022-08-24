# Format MM/YY (split) cardMonth cardYear

Splitting 01/23 into `hidden` cardMonth / cardYear inputs`the split`

```
<script>
  $(function() {
    $('#cardExpire').blur(function(e) {
      var val = e.target.value;
      var parts = val.split('/');

      $('[name=cardMonth]').val(parts[0] || '');
      $('[name=cardYear]').val(parts[1] || '');
    });
  });
</script>
```

`the inputs`

```
<input type="text" placeholder="Exp MM/YY" id="cardExpire" name="cardExpire" required="" onkeyup="formatString(event);" class="field-all cvv-fld" />
<input type="hidden" id="card_month" name="cardMonth" value="" required="" />
<input type="hidden" id="card_year" name="cardYear" value="" required="" />
```

`format string`

<script>
function formatString(e) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
  }
</script>
