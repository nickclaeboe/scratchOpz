[Sauce](https://code.tutsplus.com/tutorials/example-of-how-to-add-google-recaptcha-v3-to-a-php-form--cms-33752) 

```
<?php
//session_start() 
//if(isset($_POST['submit'])){
	define("RECAPTCHA_V3_SECRET_KEY", 'KEYYYYHERE put the key here please');
if(!empty($_POST['website'])) die();
if(isset($_POST['email']) && $_POST['email']) {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);

$name = $_POST['name']; 
$email = $_POST['email']; 
$email_to = "email@website.com"; 
$phoneNumber = $_POST['phoneNumber'];
$dateOfEvent = $_POST['dateOfEvent'];
$noOfGuest = $_POST['noOfGuest'];
$comments = $_POST['comments'];
$email_subject = " Website Form Submission ";
$headers = "From: Website <email@website.com>";
$headers = "Reply-To: email@website.com" . "\n";
$message = "Name: ". $name . "\r\nEmail: " . $email . "\r\nPhone: " . $phoneNumber . "\r\nDate: " . $dateOfEvent . "\r\nGuests: " . $noOfGuest . "\r\nComments: " . $comments . "\n" . "\n";
ini_set("SMTP", "mail.website.com:2080");
ini_set("sendmail_from", "email@website.com");
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $message, $headers," -femail@website.com");
$fp = fopen('emaillist.csv', 'a');
fwrite($fp, $message);
fclose($fp);
header( 'Location: thankyou.php' );
} else {
    // set error message and redirect back to form...
    header('location: index_dev.php');
    exit;
}
$token = $_POST['token'];
$action = $_POST['action'];
  
// call curl to POST request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => RECAPTCHA_V3_SECRET_KEY, 'response' => $token)));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
$arrResponse = json_decode($response, true);
  
// verify the response
if($arrResponse["success"] == '1' && $arrResponse["action"] == $action && $arrResponse["score"] >= 0.5) {
    // valid submission
    // go ahead and do necessary stuff
} else {
    // spam submission
    // show error message
}
```


```
 <script src="https://www.google.com/recaptcha/api.js?render=PUTAPIKEYHERE_PUTITHERE_HERE_&trustedtypes=true"></script>
  <script>
   function onSubmit(token) {
     document.getElementById("contactForm").submit();
   }
 </script>
```

```
  <script type="text/javascript">
$('#name, #phoneNumber, #email, #dateOfEvent, #noOfGuest, #comments').bind('keyup', function() {
    if (allFilled()) $('.continue').removeAttr('disabled').removeClass('disabled');
  });

  function allFilled() {
    var filled = true;
    $('#contactForm input').not('#website').each(function(){
      if ($(this).val() == '' ) filled = false;
    });
    return filled;
  }
</script>

    <script>
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        var email = $('#email').val();
  
        grecaptcha.ready(function() {
            grecaptcha.execute('PUTAPIKEYHERE_PUTITHERE_HERE', {action: 'process.php'}).then(function(token) {
                $('#contactForm').prepend('<input type="hidden" name="token" value="' + token + '">');
                $('#contactForm').prepend('<input type="hidden" name="action" value="process.php">');
                $('#contactForm').unbind('submit').submit();
            });;
        });
  });
  </script>
```
