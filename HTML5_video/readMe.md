
<!------------------- HTML5 video tag mute / autoplay ---------------->

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
