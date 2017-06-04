$(document).ready(function() {
  bike.init()
});

var bike = (function() {
  var owlInit = $('.owl-carousel.index-carousel'),
      owlThumbs = $('.owl-carousel.with-thumbs')
      windowWidth = document.body.clientWidth;

  return {
    init: function() {
      this.owl();
      this.zoomImage();
      this.parralax();
      this.input();

      windowWidth > 1024 ? this.tabs() : $('.parralax').css({
        'background-attachment': 'inherit',
        'background-size': '200%'
      });

      $('#map') ? this.googleMaps() : null;
    },

    owl: function() {
      owlInit.owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        autoplay: !0,
        autoplayTimeout: 5000,
        autoplayHoverPause: !0,
        loop: !0,
        nav: !0,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
      });
    },

    zoomImage: function() {
      $('.xzoom, .xzoom-gallery').xzoom({position: 'lens', lensShape: 'circle', bg:true, sourceClass: 'xzoom-hidden'});
    },

    parralax: function() {
      $(window).on('scroll', function() {
        var st = $(this).scrollTop();

        $('.parralax').css({
          'background-position': '50% ' + -st / 50 + 'px'
        });
      });
    },

    input: function() {
      $('#search').on('focus', function() {
        $(this).parent().addClass('active');
      });

      $('#search').on('blur', function() {
        if($('#search').val() !== '') $(this).parent().addClass('active');
        else $(this).parent().removeClass('active');
      });

      $('.contacts-inputs').on('focus', function() {
        $(this).parent().find('label').addClass('hide');
      });

      $('.contacts-inputs').on('blur', function() {
        if($(this).val() !== '') $(this).parent().find('label').addClass('hide');
        else $(this).parent().find('label').removeClass('hide');
      });

      $('#clear').on('click', function(e) {
        e.preventDefault();

        $('input, textarea').val('');
        $('.contacts-inputs').parent().find('label').removeClass('hide');
      });

      $('.send').on('click', function(e) {
        e.preventDefault();
      });
    },

    googleMaps: function() {
      var coordinations = {lat: -34.397, lng: 150.644}

      var map = new google.maps.Map(document.getElementById('map'), {
        center: coordinations,
        scrollwheel: false,
        zoom: 8
      });

      var marker = new google.maps.Marker({
        position: coordinations,
        map: map
      });
    },

    tabs: function() {
      $('#tabs a').click(function (e) {
        e.preventDefault();

        $(this).tab('show');
      });
    }
  }
})();