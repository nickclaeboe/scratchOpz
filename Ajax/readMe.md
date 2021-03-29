# Ajax Modal Submit

## on submit, submit modal form and hide without refreshing page

### PHP
```
<?php
  //if(isset($_POST['submit'])){
  if($_POST)
  {  
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    //$phone = $_POST['phone'];
    //$bday = $_POST['bday'];
    $fp = fopen('emaillist.csv', 'a');
    $message = "$firstName" . " $lastName" . " $email" . "\n" . "\n";
    fwrite($fp, $message);
    fclose($fp);
    //header( 'Location: thankyou.php' );
  } 
  else {}
  ;
?>
```
### jQuery
```
<script type="text/javascript">
  $(document).ready(function() {
    $( "#myform" ).on('submit',function (e) {
      e.preventDefault();
      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
      var email = $("#email").val();
      var dataString = 'firstName='+ firstName + '&lastName=' + lastName + '&email=' + email;
      if(firstName=='' || lastName=='' || email=='')
      {
        $('.success').fadeOut(200).hide();
        $('.error').fadeOut(200).show();
      }
      else
      {
        $.ajax({
          type: "POST",
          url: "index.php",
          data: dataString,
          success: function(){
            $('.success').fadeIn(200).show();
            $('.error').fadeOut(200).hide();
          }
        });
        $('#ouibounce-modal').hide('slow');
      }
      return false;
    });
  });
</script>
```
