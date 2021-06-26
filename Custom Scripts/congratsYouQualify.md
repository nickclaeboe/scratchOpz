
```
<link href="https://cdn.subscribefunnels.com/8faa036f-913f-4dc4-a1f5-7c63a529071a/loader.css" rel="stylesheet" type="text/css" /> 
```

```
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.subscribefunnels.com/8faa036f-913f-4dc4-a1f5-7c63a529071a/jquery.progressBarTimer.min.js"></script>
```

```
<!----->
<section id="preloader" class="popup-pre-loading-wrapper hidden">
  <div class="bootstrapiso">
    <div class="popup">
      <p class="checkText">Checking to see if you qualify...</p>
      <h3 class="checkCongrat hidden">Congratulations!!!</h3>
      <div id="progressWrap">
        <div id="i7904e" class="progressWrap progress active progress-striped">
          <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="60" id="iqgd9d" class="progress-bar progress-bar-striped"></div>
        </div>
      </div>
      <p class="checkQual hidden">You qualify!</p>
    </div>
  </div>
</section>
```

```
<script>
  $(document).ready(function() {
    $('.getNow').click(function() {
      event.preventDefault();
      $('.popup-pre-loading-wrapper').fadeIn();
      setTimeout(function() {
        $('.checkText').hide();
      }, 4000);
      setTimeout(function() {
        $('.checkCongrat, .checkQual').show();
      }, 4000);
      setTimeout(function() {
        window.location.href = "checkout{{queryParams}}";
      }, 4500);
      return false;
    });
  });
</script>
<script>
  $('.progressWrap').progressBarTimer({
    autoStart: true,
    smooth: true,
    timeLimit: 4,
  });
</script>
```
