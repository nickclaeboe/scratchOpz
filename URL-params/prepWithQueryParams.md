# Autofill (prepopulate) Form from URL Variables

This explains how to populate form fields from URL variables.

For example, a client may have an email marketing campaign, and can blast subscribers with a link to their latest lander page. Depending on the data available to the email campaign, the link to those email can caintain information about the user. Here is an example of what a link may look like:

`https://www.mylander.com/discount?fname=mike&lname=smith&address=500+Happy+Rd&city=cape+may&state=nj&postalcode=08067&email=msmith@example.com&phone=2135559999`

The original URL is https://www.mylander.com/discount. Everything after that is the data specific to the subscriber.
 

Example:

`<input type="text" id="fname" placeholder="First Name" name="firstName" required="" class="form-control" value="{{extractQueryParam 'fname'}}" />`

SubscribeFunnels will populate this form field with the URL variable (aka a Query Parameter) named “fname”, or an empty string if not found.

![prepopulate.png](prepopulate.png)

## Auto-selecting Option on Dropdown

Javascript is required to prepopulate a select/dropdown field. 

### Using jQuery

Here is sample jQuery that will auto-select a value in a dropdown.

```jsx

// matching requires case sensitivity
var stateAbv = '{{extractQueryParam "state"}}'.toUpperCase();
$(function() {
    $('[name=state]').val(stateAbv);
});

```

### Using Plain Javascript

```jsx

var stateAbv = '{{extractQueryParam "state"}}'.toUpperCase();
document.querySelector('[name=state]').value = stateAbv;

```

### Cleaning Values of Special Characters

When data is sent in an URL, the browser will “encode” special characters like spaces and periods. In fact, a space may be encoded by the string “%20” or a “+” sign. Using `extractQueryParam` will not decode these special characters. We must use javascript to do this. Here is a sample script that will decode values from URL variables after they’ve been populated into a form field.

```jsx
var parseFieldValue = function(field) {

    try {
      if (field) {
        field.value = field.value.replace(/\\+/g, ' ');
        field.value = decodeURIComponent(field.value);
        return field.value;
      }

    } catch (exc) {
      console.warn('Error parsing values', item, exc);
      return undefined;
    }
  };
var formfields = ['firstName', 'lastName', 'email', 'phoneNumber', 'address1', 'city', 'zip'];

formfields.forEach(function(item) {
    var field = document.querySelector('[name=' + item + ']');
    parseFieldValue(field);
});

```

Quick and dirty way using

```jsx
<script>
  $(function() {
       $('[name=email]').val(decodeURIComponent($('[name=email]').val()));
  });
</script>
```
