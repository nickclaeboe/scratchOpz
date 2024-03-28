
# HTML5 video tag mute / autoplay  

```
 <video allowfullscreen="allowfullscreen" id="video1" muted="" playsinline="" hidefocus="hidefocus" preload="metadata" src="#" type="video/mp4" poster="#.jpg" controls="controls" class="position-relative"></video>
 
  <div class="playBtn position-absolute top-50 start-50 translate-middle bg-danger p-5 rounded-circle bg-opacity-50 cursor d-none">
                <i data-gjs-type="icon" class="bi bi-mic-mute-fill fs-1 text-white"></i>
              </div>
              <div class="pauseBtn position-absolute top-50 start-50 translate-middle bg-danger p-5 rounded-circle bg-opacity-50 cursor d-none">
                <i data-gjs-type="icon" class="bi bi-mic-mute-fill fs-1 text-white"></i>
              </div>
              <div class="MuteBtn position-absolute top-50 start-50 translate-middle bg-danger p-5 rounded-circle bg-opacity-50 cursor d-none">
                <i data-gjs-type="icon" class="bi bi-mic-fill fs-1 text-white"></i>
              </div>
              <div class="unMuteBtn position-absolute top-50 start-50 translate-middle bg-danger p-5 rounded-circle bg-opacity-50 cursor">
                <i data-gjs-type="icon" class="bi bi-mic-mute-fill fs-1 text-white"></i>
              </div>
```

```
<script>
  $('.unMuteBtn').click(function() {
    var video = document.getElementById("video1");
    video.muted = !video.muted;
    $(this).removeClass('bg-danger');
    $(this).addClass('bg-success');
    $(this).hide('fast');
    $('.bi-mic-mute-fill').removeClass('text-white');
    $('.bi-mic-mute-fill').addClass('text-success');
    $('.bi-mic-mute-fill').hide('fast');
  });
</script>
```

```
<script>
  var myVideo = document.getElementById("video1");

  function playPause() {
    if (myVideo.paused)
      myVideo.play();
    else
      myVideo.pause();
  }

  function makeBig() {
    myVideo.width = 560;
  }

  function makeSmall() {
    myVideo.width = 320;
  }

  function makeNormal() {
    myVideo.width = 420;
  }

  myVideo.play();
</script>
```
