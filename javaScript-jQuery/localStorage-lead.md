Helpers: 

- https://stackoverflow.com/questions/50523268/how-to-use-localstorage-in-jquery#answer-50523373
- https://stackoverflow.com/questions/23911288/cant-get-the-current-id-of-a-data-from-local-storage-using-jquery#answer-23911501

Set localStorage on Lead form

```html
<script type="text/javascript">
  $('#fname').on('blur keyup', function(e) {
    var FirstName = $(this).val();
    localStorage.setItem('firstName', JSON.stringify(FirstName));
  });
  $('#lname').on('blur keyup', function(e) {
    var LastName = $(this).val();
    localStorage.setItem('lastName', JSON.stringify(LastName));
  });
  $('#eml').on('blur keyup', function(e) {
    var Email = $(this).val();
    localStorage.setItem('email', JSON.stringify(Email));
  });
  $('#phn').on('blur keyup', function(e) {
    var Phone = $(this).val();
    localStorage.setItem('phone', JSON.stringify(Phone));
  });
  $('#addy').on('blur keyup', function(e) {
    var Address1 = $(this).val();
    localStorage.setItem('address1', JSON.stringify(Address1));
  });
  $('#fields_city').on('blur keyup', function(e) {
    var City = $(this).val();
    localStorage.setItem('city', JSON.stringify(City));
  });
  $('#fields_state').on('blur keyup', function(e) {
    var State = $(this).val();
    localStorage.setItem('state', JSON.stringify(State));
  });
  $('#fields_zip').on('blur keyup', function(e) {
    var ZipCode = $(this).val();
    localStorage.setItem('zip', JSON.stringify(ZipCode));
  });
</script>
```

HTML

```html
	<input type="hidden" name="firstName" value="" id="fname" />
	<input type="hidden" name="lastName" value="" id="lname" />
	<input type="hidden" name="email" value="" id="eml" />
	<input type="hidden" name="phone" value="" id="phn" />
	<input type="hidden" name="address1" value="" id="addy" />
	<input type="hidden" name="city" value="" id="field_city" />
	<input type="hidden" name="state" value="" id="field_state" />
	<input type="hidden" name="zip" value="" id="field_zip" />
```

<aside>
💡 hidden inputs must be place inside the form tags on the checkout / payment page(s)

</aside>

```html
<script>
  $(document).ready(function() {
    window.onload = getInfo();
  });

  function getInfo() {
    $('#fname').val(JSON.parse(localStorage.getItem('firstName')));
    $('#lname').val(JSON.parse(localStorage.getItem('lastName')));
    $('#eml').val(JSON.parse(localStorage.getItem('email')));
    $('#phn').val(JSON.parse(localStorage.getItem('phone')));
    $('#addy').val(JSON.parse(localStorage.getItem('address1')));
    $('#field_city').val(JSON.parse(localStorage.getItem('city')));
    $('#field_state').val(JSON.parse(localStorage.getItem('state')));
    $('#field_zip').val(JSON.parse(localStorage.getItem('zip')));
  }
</script>
```
