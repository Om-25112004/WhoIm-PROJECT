    $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        items: 3.5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1700,
        autoplayHoverPause: true
      });
      $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
      })
      $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
      })
    })
