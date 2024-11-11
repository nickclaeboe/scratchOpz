``` 
    $(document).ready(function() {
        $("#sendButton").click(function() {
            // Replace these with your actual values
            var apiKey = "YOURapiKEYhere";
            var phone = $('input[name=phone]').val().replace(/[^\d]/g, ""); // Replace with your actual phone number (no special characters)
            var userId = "YOURuserIdhere";

            // Data to send to the server
            var data = {
                key: apiKey,
                phone: phone,
                _id: userId
            };

            $.ajax({
                url: "yourURLtoPOSTtoHERE,
                method: "POST",
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function(response) {
                    console.log("Success! Response:", response);
                    // You can optionally display a success message here
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error("Error updating text list:", textStatus, errorThrown);
                    // You can display an error message here
                }
            });
        });
    });
 ```
### Explanation:

This script uses jQuery's 
```
$(document).ready(function() { ... });
```
function to ensure the code runs after the DOM is loaded.
It defines a click event handler for a button with the ID "update-list-button".

Inside the click handler, it defines your API key, phone number (without special characters), and user ID.
It then creates a JavaScript object (data) containing the key-value pairs to be sent to the server (API key, phone number, and user ID).
It uses jQuery's $.ajax function to perform a POST request to the specified URL with the following parameters:

```
url: The URL of the cloud function endpoint.
method: Set to "POST" as it's a POST request.
data: The JSON string representation of the data object.
contentType: Set to "application/json" to indicate the content type of the data being sent.
success: A callback function executed if the request is successful. It logs the response to the console and you can optionally display a success message here.
error: A callback function executed if an error occurs during the request. It logs the error details to the console and you can optionally display an error message here.
```

### Usage:

Include the jQuery library in your HTML file.
Add a button with the ID "update-list-button" to your HTML.
Replace the placeholder values for apiKey, phone, and userId with your actual values.
Testing:

You can test the script by adding your phone number (without special characters) to the phone variable and clicking the button. If successful, the script will log the response from the server to the console. Make sure your server responds with a success message or code.
