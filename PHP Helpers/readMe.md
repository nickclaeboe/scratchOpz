# `php` Helpers & Scripts

## ROTATE 2 urls 50% location: Header Exit php and preserve URL string/vars

```
<?php
  if (mt_rand(0,1) == 0) {
    header("Location:https://deals.shopfemthings.com/i-am-enough/v2/checkout.php?". $_SERVER['QUERY_STRING']); 
    exit;
      } else {
    header("Location:https://deals.shopfemthings.com/i-am-enough/?". $_SERVER['QUERY_STRING']);
    exit;
  }
?>
```

```
```

```
```
