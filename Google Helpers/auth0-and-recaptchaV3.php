<?php

/**
 * This example shows how to send via Google's Gmail servers using XOAUTH2 authentication
 * using the league/oauth2-client to provide the OAuth2 token.
 * To use a different OAuth2 library create a wrapper class that implements OAuthTokenProvider and
 * pass that wrapper class to PHPMailer::setOAuth().
 */

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\OAuth;
//Alias the League Google OAuth2 provider class
use League\OAuth2\Client\Provider\Google;

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

//Load dependencies from composer
//If this causes an error, run 'composer install'
require 'vendor/autoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();
if (isset($_POST['g-recaptcha-response'])) {
    $captcha = $_POST['g-recaptcha-response'];
} else {
    $captcha = false;
}

if (!$captcha) {
    //Do something with error
} else {
    $secret   = 'YOUR-SECRET-KEY';
    $response = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret=" . $secret . "&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR']
    );
    // use json_decode to extract json response
    $response = json_decode($response);

    if ($response->success === false) {
        //Do something with error
    }
}
if ($response->success==true && $response->score <= 0.5) {
   die();
}
//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
//SMTP::DEBUG_OFF = off (for production use)
//SMTP::DEBUG_CLIENT = client messages
//SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_SERVER;

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

//Set the SMTP port number:
// - 465 for SMTP with implicit TLS, a.k.a. RFC8314 SMTPS or
// - 587 for SMTP+STARTTLS
$mail->Port = 465;

//Set the encryption mechanism to use:
// - SMTPS (implicit TLS on port 465) or
// - STARTTLS (explicit TLS on port 587)
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Set AuthType to use XOAUTH2
$mail->AuthType = 'XOAUTH2';

//Start Option 1: Use league/oauth2-client as OAuth2 token provider
//Fill in authentication details here
//Either the gmail account owner, or the user that gave consent
$email = 'EMAIL-ADDRESS-HERE';
$clientId = 'YOUR-CLIENT-ID';
$clientSecret = 'YOUR-CLIENT-SECRET';

//Obtained by configuring and running get_oauth_token.php
//after setting up an app in Google Developer Console.
$refreshToken = 'YOUR-REFRESH-TOKEN';

//Create a new OAuth2 provider instance
$provider = new Google(
    [
        'clientId' => $clientId,
        'clientSecret' => $clientSecret,
    ]
);

//Pass the OAuth provider instance to PHPMailer
$mail->setOAuth(
    new OAuth(
        [
            'provider' => $provider,
            'clientId' => $clientId,
            'clientSecret' => $clientSecret,
            'refreshToken' => $refreshToken,
            'userName' => $email,
        ]
    )
);
//End Option 1

//Option 2: Another OAuth library as OAuth2 token provider
//Set up the other oauth library as per its documentation
//Then create the wrapper class that implements OAuthTokenProvider
// $oauthTokenProvider = new MyOAuthTokenProvider(/* Email, ClientId, ClientSecret, etc. */);

//Pass the implementation of OAuthTokenProvider to PHPMailer
// $mail->setOAuth($oauthTokenProvider);
//End Option 2

//Set who the message is to be sent from
//For gmail, this generally needs to be the same as the user you logged in as
$mail->setFrom($email, 'SET EAMIL FROM');

//Set who the message is to be sent to
$mail->addAddress('SEND EMAIL TO ', 'NAME OF SEND EMAIL TO ');

//Set the subject line
$mail->Subject = 'FORM SUBJECT';
$email_body = '<h2>Form Submission Details</h2><table style="border: 1px solid #b5b5b5; padding: 5px;">
			<tr>
				<td style="border: 1px solid #b5b5b5; padding: 5px;"><strong>Subject:</strong> </td>
				<td style="border: 1px solid #b5b5b5; padding: 5px;">'.$_POST['subject'].'</td>
			</tr>
			<tr>
				<td style="border: 1px solid #b5b5b5; padding: 5px;"><strong>Name:</strong> </td>
				<td style="border: 1px solid #b5b5b5; padding: 5px;">'.$_POST['name'].'</td>
			</tr>

			<tr>
				<td style="border: 1px solid #b5b5b5; padding: 5px;"><strong>Email Address:</strong> </td>
				<td style="border: 1px solid #b5b5b5; padding: 5px;">'.$_POST['email'].'</td>
			</tr>

			<tr>
				<td style="border: 1px solid #b5b5b5; padding: 5px;"><strong>Phone Number:</strong> </td>
				<td style="border: 1px solid #b5b5b5; padding: 5px;">'.$_POST['number'].'</td>
			</tr> 
			<tr>
				<td style="border: 1px solid #b5b5b5; padding: 5px;"><strong>Message:</strong> </td>
				<td style="border: 1px solid #b5b5b5; padding: 5px;">'.nl2br($_POST['message']).'</td>
			</tr>
		</table>';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->CharSet = PHPMailer::CHARSET_UTF8;
// $mail->msgHTML(file_get_contents('contentsutf8.html'), __DIR__);
$mail->msgHTML( $email_body );
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';

//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}

?>

[sauce](https://stackoverflow.com/questions/51507695/google-recaptcha-v3-example-demo/54118106#54118106)
