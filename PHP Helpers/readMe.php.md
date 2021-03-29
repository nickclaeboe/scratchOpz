# `php` Helpers & Scripts

## ROTATE 2 urls 50% location: Header Exit php and preserve URL string/vars

```
<?php
  if (mt_rand(0,1) == 0) {
    header("Location:AFFILIATELINKHERE.com/checkout.php?". $_SERVER['QUERY_STRING']); 
    exit;
      } else {
    header("Location:AFFILIATELINKHERE.com/?". $_SERVER['QUERY_STRING']);
    exit;
  }
?>
```
## Pull multiple vars and string to link in same snippet/block
```
<?php
if(isset($_GET)){
  $path = http_build_query($_GET);
  $c1 = isset($_GET['c1']) ? $_GET['c1'] : 0;
  $c2 = isset($_GET['c2']) ? $_GET['c2'] : 0;
  $c3 = isset($_GET['c3']) ? $_GET['c3'] : 0;
  $p = isset($_GET['p']) ? $_GET['p'] : 0;
};																			
$offerLink = 'https://AFFILIATELINKHERE.com/index.php?affId=8B31D2AA&c1='.$c1.'&c2='.$c2.'&c3='.$c3.'&c4='.$c4.'&c5='.$c5; 
?>
```
## Split fullName into firstName / lastName
```
<?php
  session_start();
  if(isset($_GET)){
    $path = http_build_query($_GET);
    $p = isset($_GET['p']) ? $_GET['p'] : 0;
  };
  $_SESSION['shippingFullName'] = $_GET['shippingFullName'];
  //$_SESSION['shippingLastName'] = $_GET['shippingLastName'];
  $_SESSION['emailAddress'] = $_GET['emailAddress'];
  $_SESSION['phoneNumber'] = $_GET['phoneNumber'];

  //
  if (isset($_POST) && isset($_POST['shippingFullName'])){
    $name = explode(' ',$_POST['shippingFullName'],2);
    $_POST['firstName'] = $name[0];
    $_POST['lastName'] = (!empty($name[1]) ? $name[1] : 'Last Name');
  };
  // 
  include('echo.php');

?>
```
