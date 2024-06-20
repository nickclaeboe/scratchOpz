Best Practices for MailChimp Signup Form via API using PHP and AJAX
Nathan Wells
Nathan Wells

·
Follow

9 min read
·
Apr 12, 2019
98


4




I had trouble finding working examples of a robust signup form for MailChimp using the MailChimp API with PHP. First, it wasn’t clear how to tag your users with any useful information when they sign up. Second, it wasn’t clear how to update a user’s information if they’ve already signed up in the past (not including all the examples out there that just plain didn’t work). So since I had to go through so much trouble to find answers on how to do this, I thought I would post instructions to make it easier for you! So, today I’m going to show you how to create a robust MailChimp signup form on your website using PHP and AJAX that allows you to tag users with useful information as well as update user’s information if they have already signed up in the past. The reason for using the MailChimp API rather than their own generated forms is that it makes it easier to add users to your MailChimp audience in existing custom forms on your website (that perhaps even double as contact forms — killing two birds with one stone!).

First we’ll start by getting everything ready on the MailChimp end.

First, we’re going to create a custom MERGE tag so you can store some extra data about your subscriber (in this example, we’re asking the user to tell us a little about them and then store that information in a merge tag named “BIO”).

So login to your MailChimp account and view your audience and then click on “Settings” and “Audience fields and *|MERGE|* tags”


Then scroll down and click “Add A Field”


Choose the field type you want to add (in our example, we are choosing “Text”).


Then enter in “Bio” for the text and “BIO” for the MERGE field and then click “Save Changes”.


Next, we’re going to create some interest groups so we can ask our user what they are specifically interested in so we can better target them in our email campaigns. Click on “Manage contacts” and then click “Groups”.


Then click “Create Groups”.


Leave the option “As checkboxes” and then fill out the group information as follows (or customize it — but remember you’ll need to change the example code to match these options). Then click “Save”.


Then we’ll need to collect some additional information from MailChimp. First, your MailChimp API Key. Click on your user account menu and select “Account” from the drop-down list.


Then click on the “Extras” menu and choose “API keys” and if you don’t have an API key, create one and copy the number somewhere so you can use it later in this tutorial.


Next, we need to get the id’s of the interest groups you created. How? By clicking here and going to the MailChimp API Playground and entering in your API key (you saved your API key somewhere you can get it right?).


Then click on “Lists” and click on the audience you want to use for this specific signup form. Then click on the “Subresources” drop-down and choose “interest-categories”.


Then click on the “Subresources” drop-down and choose “interests”.


Here you’ll see a list of those interest groups we created earlier. Click on each group interest and copy the ID of the group interest (not the category or list ID). Save these for later when we place them into our php script.

Now we’re ready to modify a simple Bootstrap contact form from Bootstrapious and customize it for our own uses (I’ve removed the mail function — but you could include that if you wanted to send an email message as well as add the contact to a MailChimp audience).

Create a new HTML file and call it signup.html and paste in this code:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>A Better MailChimp Signup Form</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
    <link href='custom.css' rel='stylesheet' type='text/css'>
</head>
<body>
<div class="container">
<div class="row">
<div class="col-xl-8 offset-xl-2 py-5">
<h1>Sign up to receive updates!
                </h1>
<p class="lead">You know you want it! Sign up now!</p>
<form id="signup-form" method="post" action="signup.php" role="form">
<div class="messages"></div>
<div class="controls">
<div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_name">First name *</label>
                                    <input id="form_name" type="text" name="firstname" class="form-control" placeholder="Please enter your first name *" required="required" data-error="First name is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_lastname">Last name *</label>
                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your last name *" required="required" data-error="Last name is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_email">Email *</label>
                                    <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_interest">Please select your interest *</label>
                                    <select id="form_interest" name="interest" class="form-control" required="required" data-error="Please complete this section of the form.">
                                        <option value=""></option>
                                        <option value="Tech">Tech</option>
                                        <option value="Puppies">Puppies</option>
                                        <option value="Stocks">Stocks</option>
                                        <option value="DIY">DIY</option>
                                    </select>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="form_message">Please tell us a little about yourself *</label>
                                    <textarea id="form_message" name="bio" class="form-control" placeholder="What's your favorite color? *" rows="4" required="required" data-error="Please tell us a little about yourself."></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn btn-success btn-send" value="Sign Up!">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-muted">
                                    <strong>*</strong> These fields are required. Contact form template by
                                    <a href="https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form" target="_blank">Bootstrapious</a>.</p>
                            </div>
                        </div>
                    </div>
</form>
</div>
            <!-- /.8 -->
</div>
        <!-- /.row-->
</div>
    <!-- /.container-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.9/validator.min.js" integrity="sha256-dHf/YjH1A4tewEsKUSmNnV05DDbfGN3g7NMq86xgGh8=" crossorigin="anonymous"></script>
    <script src="signup.js"></script>
</body>
</html>
Then create a CSS file called custom.css and paste in this code:

body {
    font-family: 'Lato', sans-serif;
}
h1 {
    margin-bottom: 40px;
}
label {
    color: #333;
}
.btn-send {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 20px;
}
.help-block.with-errors {
    color: #ff5050;
    margin-top: 5px;
}
Then create a javascript file called signup.js and paste in this code — this code will validate the information the user inputs into the form as well as deal with any error messages:

$(function () {
// Init the validator
    // Validator files are included in the download package
    // Otherwise download from http://1000hz.github.io/bootstrap-validator
$('#signup-form').validator();
// When the form is submitted
    $('#signup-form').on('submit', function (e) {
// If the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "signup.php"; //If you change the name of the PHP file, make sure and change it here too!
// POST values in the background
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns
// We recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
// Let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        //then inject the alert to .messages div in our form
                        $('#signup-form').find('.messages').html(alertBox);
                        // Empty the form
                        $('#signup-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
Then we’ll create a PHP file called signup.php where all the magic happens. Paste in this code and customize the API key, the audience ID, custom error messages (and any changes to the group interest names and ID’s).

<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */
// MailChimp API credentials and Audience ID
$apiKey = 'YOURAPIKEY';
$audienceID = 'YOURAUDIENCEID';
// Message that will be displayed when everything is OK :)
$okMessage = 'You\'ve successfully signed up. Thank you!';
// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';
/*
 *  LET'S SUBMIT EVERYTHING TO MAILCHIMP
 */
// If you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);
try {
    if (!empty($_POST)) {
        //Grab post data from form
        $postEmail = $_POST['email'];
        $postFirstName = $_POST['firstname'];
        $postLastName = $_POST['surname'];
        $postBio = $_POST['bio']; //Change this to match your signup form html
        $postInterest = $_POST['interest']; //Change this to match your signup form html
//Check what the user selected as their interest and match the interest with the Group ID you configured in MailChimp - You must change these to match your MailChimp and form configuration!
        if ( $postInterest=="Tech" ) {
            $interestID = "INTERESTID";
        } elseif ( $postInterest=="Puppies" ) {
            $interestID = "INTERESTID";
        } elseif ( $postInterest=="Stocks" ) {
            $interestID = "INTERESTID";
        } elseif ( $postInterest=="DIY" ) {
            $interestID = "INTERESTID";
            }
// Build the MailChimp API URL
        $memberID = md5(strtolower($postEmail));
        $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
        $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $audienceID . '/members/' . $memberID;
        
        // User Information to sent to MailChimp
        $json = json_encode([
            'email_address' => $postEmail,
            'status'        => 'subscribed',
            'merge_fields'  => [
                'FNAME'     => $postFirstName,
                'LNAME'     => $postLastName,
                'BIO'        => $postBio //This is a CUSTOM MERGE field that you must configure in MailChimp in order for it to work - Make sure you change the name to match your configured MERGE field name in MailChimp
            ],
            'interests' => array(
   $interestID => true // Add user to a specific interest group - these also have to be configured in MailChimp in order to work!
      ),
            'update_existing'   => true // YES, update existing subscribers!
        ]);
        
        // send a HTTP POST request with curl to MailChimp
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        
       $responseArray = array('type' => 'success', 'message' => $okMessage);
    }
} catch (\Exception $e) {
    $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
}
// If requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
header('Content-Type: application/json');
echo $encoded;
}
// Else just display the message
else {
    echo $responseArray['message'];
}
And there you have it! I hope this proves as useful to you as it did for me! Leave any questions/comments you have below!
