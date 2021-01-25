<script>
  $("#ibxa9v").each(function() {
    $(this).on("change keyup paste", function(e) {
      var output, $this = $(this),
        input = $this.val();
      if (e.keyCode != 8) {
        input = input.replace(/[^0-9]/g, '');
        var area = input.substr(0, 3);
        var pre = input.substr(3, 3);
        var tel = input.substr(6, 4);
        if (area.length < 3) {
          output = "(" + area;
        } else if (area.length == 3 && pre.length < 3) {
          output = "(" + area + ")" + " " + pre;
        } else if (area.length == 3 && pre.length == 3) {
          output = "(" + area + ")" + " " + pre + "-" + tel;
        }
        $this.val(output);
      }
    });
  });
  $('#indexForm').click(function() {
    var userInput = document.getElementById('ibxa9v').value;
    var changeOne = userInput.replace('(', '');
    var changeTwo = changeOne.replace(')', '');
    var changeThree = changeTwo.replace('-', '');
    var changeFour = changeThree.replace(' ', '');
    document.getElementById('ibxa9v').value = parseInt(changeFour);
    console.log(userInput);
  });
</script>
