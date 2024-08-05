### keyUp #phn (888) 888-8888 input masking

Phone Input

```
<input data-placement="auto left" data-toggle="tooltip" data-validation="required" name="phone" placeholder="Phone Number*" required="" title="Phone Number" type="tel" value="" maxlength="16" id="phn" onkeyup="this.value=this.value.replace(/[^\d]/,'')" class="form-control" />
```

Submit Button

```
  <button type="button" class="button-submit">RUSH MY ORDER</button>
              <div id="i3u9vn">
                <button type="submit" class="button-take">RUSH MY ORDER</button>
              </div>
```

Submit Script

```
<script>
  $('.button-submit').click(function() {
    $('#phn').val($('#phn').val().replace(/[^\d]/g, ""));
    $('.popup-loading-wrapper').show();
    setTimeout(function() {
      $('.button-take').click();
    }, 1000);
  });
</script>
```

KeyUp Script

```
<script>
  $('#phn').keyup(function(e) {
    var ph = this.value.replace(/\D/g, '').substring(0, 10);
    // Backspace and Delete keys
    var deleteKey = (e.keyCode == 8 || e.keyCode == 46);
    var len = ph.length;
    if (len == 0) {
      ph = ph;
    } else if (len < 3) {
      ph = '(' + ph;
    } else if (len == 3) {
      ph = '(' + ph + (deleteKey ? '' : ') ');
    } else if (len < 6) {
      ph = '(' + ph.substring(0, 3) + ') ' + ph.substring(3, 6);
    } else if (len == 6) {
      ph = '(' + ph.substring(0, 3) + ') ' + ph.substring(3, 6) + (deleteKey ? '' : '-');
    } else {
      ph = '(' + ph.substring(0, 3) + ') ' + ph.substring(3, 6) + '-' + ph.substring(6, 10);
    }
    this.value = ph;
  });
</script>
```

### keyUp #cc-card ####-####-####-#### input masking

StackOverflow Reference

[Creating a credit card input. Why does the form not add dashes to 4 digit credit card?](https://stackoverflow.com/questions/41770553/creating-a-credit-card-input-why-does-the-form-not-add-dashes-to-4-digit-credit)

CC input

```
  <input id="cc-card" maxlength="19" value="{{#if sf-error-message}}{{cardNumber}}{{/if}}" name="cardNumber" placeholder="•••• •••• •••• ••••" type="tel" required="" onkeyup="" class="form-control" />
```

Submit button

```jsx
  <div class="d-none">
            <button id="btnTake" type="submit" class="pulse">
              Rush My Order Now »
            </button>
          </div>
          <button id="partialsubmitbutton" name="partialsubmitbutton" type="button" class="pulse send-btn">
            Rush My Order Now »
          </button>
```

CC script

```
  
<script type="text/javascript">
 
  $('.send-btn').click(function() {
    $('#cc-card').val($('#cc-card').val().replace(/[^\d]/g, "")); 
    $('#btnTake').click(); 
  });

  const cc = $('#cc-card');

  function chunksOf(string, size) {
    var i, j, arr = [];
    for (i = 0, j = string.length; i < j; i += size) {
      arr.push(string.substring(i, i + size));
    }
    return arr;
  }

  cc.on('input', function() {
    const elem = cc.get(0); // store DOM element ref
    const cursorPosition = elem.selectionEnd; // remember cursor position

    const value = cc.val().replace(/\D/g, ''); // strip non-numeric chars
    const numberChunks = chunksOf(value, 4); // split into 4-digit chunks
    const newValue = numberChunks.join('-'); // combine 4-digit chunks into a single string
    cc.val(newValue); // update new value

    elem.selectionStart = elem.selectionEnd = cursorPosition + 1; // reset cursor position since the value changed
  });
</script>
```
