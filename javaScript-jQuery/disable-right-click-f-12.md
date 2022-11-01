<!--------- disable right click, f12, ctrl U, view source etc.   --------------->

   <script>
      $(document).ready(function() {
        $('body').attr("oncontextmenu", "return false");
      });
    </script>
    <script type="text/javascript">
      document.onkeydown = function(e) {
        if (e.keyCode == 123) {
          return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
          return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
          return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
          return false;
        }

        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
          return false;
        }
      }
    </script>


<!--------- /disable right click, f12, ctrl U, view source etc.   --------------->
