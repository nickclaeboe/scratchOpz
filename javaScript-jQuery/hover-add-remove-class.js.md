<script>
  $('.prdWrap').mouseenter(function() {
    $(this).find('.addToCart').removeClass('d-none');
  });

  $('.prdWrap').mouseleave(function() {
    $(this).find('.addToCart').addClass('d-none');
  }).mouseleave();
</script>
