# Add Additional vars to query params after checking for vars

```
<script>
  $(document).ready(function() {
    $('#takeBark').click(function() {
      var urlParams = '{{queryParams}}';
      console.log(urlParams);
      if (urlParams == '') {
        $(this).attr('href', function() {
          return this.href + '?bark=y';
        })
      } else {
        $(this).attr('href', function() {
          return this.href + '&bark=y';
        })
      }
    });
  });
</script>
```

https://stackoverflow.com/questions/5999118/how-can-i-add-or-update-a-query-string-parameter#answer-41542008 
