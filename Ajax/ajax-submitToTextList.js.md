<script>
$(document).ready(function() {
  $("#update-list-button").click(function() {
    // Replace these with your actual values
    var apiKey = "dKOlvYYkz5PjbwQpkuOF";
    var phone = "6784353845"; // Replace with your actual phone number (no special characters)
    var userId = "9CP2vl4rtpap0pSmocpz5S57LW53";

    // Data to send to the server
    var data = {
      key: apiKey,
      phone: phone,
      _id: userId
    };

    $.ajax({
      url: "https://us-central1-peer-pops-io.cloudfunctions.net/v1/update_text_list",
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
</script>
