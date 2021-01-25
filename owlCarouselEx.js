  $(document).ready(function() {

    jQuery("#carousel").owlCarousel({
      autoplay: false,
      lazyLoad: true,
      loop: true,
      margin: 20,
      dots: true,
      /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,

      responsive: {
        0: {
          items: 1,
          dots: true,

        },

        600: {
          items: 1
        },

        1024: {
          items: 1
        },

        1366: {
          items: 1
        }
      }
    });
