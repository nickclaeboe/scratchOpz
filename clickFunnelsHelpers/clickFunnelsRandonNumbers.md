# Random Numbers Script for ClickFunnels Page Builder 
```
<h2 class="custHTML"><b><span id="plans"></span> plans</b> available in <span id="cityLocate"></span></h2>
<p>We've helped <span id="helpPPL"></span> people in your area!</p>

<script language="javascript">
$(document).ready(function()  {
  var x = Math.floor((Math.random() * 2500) + 1);
  document.getElementById("helpPPL").innerHTML = x;
});
$(document).ready(function()  {
  var y = Math.floor((Math.random() * 50) + 1);
  document.getElementById("plans").innerHTML = y;
});
</script>
```
 
```
<script language="javascript">
$(document).ready(function() {
  function generate() {
    $('#plans').text(Math.floor(Math.random() * 50) + 1);
    $('#helpPPL').text(Math.floor(Math.random() * 2500) + 1);
  };
});
</script>
```

```
<script>
  (function() {
    const el = document.getElementById('helpPPL');
    var min = document.getElementById('helpPPL').dataset.RandnumMin || 0;
    var max = document.getElementById('helpPPL').dataset.RandnumMax || 0;
    var rand;
    if (!isNaN(min) && !isNaN(max)) {
      min = Math.ceil(min);
      max = Math.floor(max)
      rand = Math.floor(Math.random() * (max - min)) + min;
      el.innerText = rand;
    }
  })();
</script>
```
