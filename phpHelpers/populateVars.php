<?php 

$c1 = !empty($_GET['c1'])&&is_string($_GET['c1']) ? urlencode($_GET['c1']) : '';
$c2 = !empty($_GET['c2'])&&is_string($_GET['c2']) ? urlencode($_GET['c2']) : '';
$c3 = !empty($_GET['c3'])&&is_string($_GET['c3']) ? urlencode($_GET['c3']) : '';
$c4 = !empty($_GET['c4'])&&is_string($_GET['c4']) ? urlencode($_GET['c4']) : '';

$offer1 = " ?c1=$c1&c2=$c2&c3=$c3&c4=$c4";
$offer2 = " ?c1=$c1&c2=$c2&c3=$c3&c4=$c4";

$AFFID = !empty($_GET['AFFID'])&&is_string($_GET['AFFID']) ? urlencode($_GET['AFFID']) : 'newsmax';
$C1 = !empty($_GET['C1'])&&is_string($_GET['C1']) ? urlencode($_GET['C1']) : '';
$C2 = !empty($_GET['C2'])&&is_string($_GET['C2']) ? urlencode($_GET['C2']) : '';
$C3 = !empty($_GET['C3'])&&is_string($_GET['C3']) ? urlencode($_GET['C3']) : '';
$click_id = !empty($_GET['click_id'])&&is_string($_GET['click_id']) ? urlencode($_GET['click_id']) : '';

?>
