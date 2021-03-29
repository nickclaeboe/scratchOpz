# JavaScript Main Scripts & Helpers

### Document Ready Starter Template
```
<script type="text/javascript">
  $(document).ready(function() {
    
  });
</script>
```
### Document Ready Shorthand Starter Template `FIRE FIRST/IMMEDIATELY`
```
<script type="text/javascript">
  $(document).ready(() => {
    
  });
</script>
```
 
### Check this checkbox, unCheck all other checkboxes
```
<script>
  $('input.example').on('change', function() {
    $('input.example').not(this).prop('checked', false);  
  });
</script>
```
 
