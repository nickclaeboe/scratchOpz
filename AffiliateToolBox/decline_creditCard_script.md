## Decline link is used when a customer enters credit card information and their card is declined. Then they are redirected.

```
{{#if sf-error-message}}
  <script>
    if (document.querySelector('.gjs-frame') == null) {
      console.log('{{sf-error-message}}');
      window.location = '#_place___AFFILIATE__LINK__HERE/?sub1=source&sub2={{clickid}}&firstName={{firstName}}&lastName={{lastName}}&address1={{address1}}&city={{city}}&state={{state}}&zipcode={{zip}}&phoneNumber={{phone}}&email={{email}}';
      //console.log('hello');
    }
  </script>
{{/if}}
```
