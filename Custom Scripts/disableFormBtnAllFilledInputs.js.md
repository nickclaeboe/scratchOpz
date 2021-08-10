# Disable Form Submit Button until ALL Inputs are Filled 
### SAUCE: [http://jsfiddle.net/tKQFN/](http://jsfiddle.net/tKQFN/)
- https://stackoverflow.com/questions/5614399/disabling-submit-button-until-all-fields-have-values#answer-5614487

## HTML

```
<html>
    <head>
        <title></title>
        <style type="text/css">
        </style>
        
    </head>
    <body>
        <form>
        Username<br />
        <input type="text" id="user_input" name="username" /><br />
        Password<br />
        <input type="text" id="pass_input" name="password" /><br />
        Confirm Password<br />
        <input type="text" id="v_pass_input" name="v_password" /><br />
        Email<br />
        <input type="text" id="email" name="email" /><br />     
        <input type="submit" id="register" disabled value="Register" />
        </form>
        <div id="test">
        </div>
    </body>
</html>
```

## jQuery 

```
<script>
$('#user_input, #pass_input, #v_pass_input, #email').bind('keyup', function() {
    if(allFilled()) $('#register').removeAttr('disabled');
});

function allFilled() {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}
</script>
```
