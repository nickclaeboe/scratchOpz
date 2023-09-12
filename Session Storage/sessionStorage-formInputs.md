# Get/Set SessionStorage Form Inputs, Cookie, Set Cookies, Checkout Form

### Use the following script to save lead form / checkout form data on submitForm, submit button click 

```
$('.btn-submit').click(function() {
    storedata();
  });

  function storedata() {
    var storeDate = {};

    // get the id of the selected radio button
    storeDate['storedValue1'] = $('input[name=firstName]').val();
    storeDate['storedValue2'] = $('input[name=lastName]').val();
    storeDate['storedValue3'] = $('input[name=address1]').val();
    storeDate['storedValue4'] = $('input[name=address2]').val();
    storeDate['storedValue5'] = $('input[name=city]').val();
    storeDate['storedValue9'] = $('select[name=state]').val();
    storeDate['storedValue6'] = $('input[name=zip]').val();
    storeDate['storedValue7'] = $('input[name=phone]').val();
    storeDate['storedValue8'] = $('input[name=email]').val();

    // save the item
    sessionStorage.setItem('storeDate', JSON.stringify(storeDate));
    console.log(storeDate);
  }
  var formStorage = JSON.parse(sessionStorage.getItem('storeDate'));
  if (formStorage.storedValue1 && formStorage.storedValue2 && formStorage.storedValue3 && formStorage.storedValue4 && formStorage.storedValue5 && formStorage.storedValue6 && formStorage.storedValue7 && formStorage.storedValue8 && formStorage.storedValue9) {
    console.log(formStorage);
    $('input[name=firstName]').val(formStorage.storedValue1);
    $('input[name=lastName]').val(formStorage.storedValue2);
    $('input[name=address1]').val(formStorage.storedValue3);
    $('input[name=address2]').val(formStorage.storedValue4);
    $('input[name=city]').val(formStorage.storedValue5);
    $('select[name=state]').val(formStorage.storedValue9);
    $('input[name=zip]').val(formStorage.storedValue6);
    $('input[name=phone]').val(formStorage.storedValue7);
    $('input[name=email]').val(formStorage.storedValue8);
  }
```
