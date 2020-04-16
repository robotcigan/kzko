$(document).ready(function() {

  if ($('.hero__video').length) {
    document.querySelector('.hero__video').play();
  }

  // Шапка
  function HeaderScroll() {
    if( $(window).scrollTop() > 20 ) {
      $('.main-page-header').addClass('main-page-header--scroll');
    } else {
      $('.main-page-header').removeClass('main-page-header--scroll');
    }
  }

  $(window).scroll(function () {
    HeaderScroll();
  });
  HeaderScroll();

  $('.services').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $('.general-slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      }
    ]
  });

  $('.cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $('.faq').on('click', function() {
    $(this).find('.faq__content').slideToggle('faq__content_active');
    $(this).find('.faq__plus').toggleClass('faq__plus_active');
  });

  // selects
  $('.custom-select').niceSelect();

  // Телефон маска
  if ( $('.phone-mask').length ) {
    $('.phone-mask').inputmask({
      mask: "+7 (999) 999 99 99",
      showMask: true,
      showMaskOnHover: false
    });
  }


  // Filter
  $('.filter-mobile-button').on('click', function() {
    $('.page').toggleClass('page_shadow');
    $('.filter').toggleClass('filter_active');
    // $('body').addClass('mobile-menu-is-open');
  });
  // filter close on click on area
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.filter').length && !$(event.target).closest('.filter-mobile-button').length) {
      $('.filter').removeClass('filter_active');
      $('.page').removeClass('page_shadow');
      // $('body').removeClass('mobile-menu-is-open');
    }
  });


  // Mobile menu

  // burger
  $('.burger').on('click', function() {
    $(this).toggleClass('burger_active');
    // $('.mobile-menu').slideToggle();
    $('.mobile-menu').toggleClass('mobile-menu_active');
    $('.page').toggleClass('page_shadow');
  });

  $('.mobile-menu-accordion').on('click', function () {
    $(this).find('.mobile-menu__link-container').stop().slideToggle();
    $(this).find('.mobile-menu__link_big').toggleClass('mobile-menu__link_big_active');
  })

  // catalog filter slides или КОСТЫЛЬНЫЕ ВОЙНЫ!
  var catalogSliders= document.getElementsByClassName('catalog-slider');
  for (var i = 0; i < catalogSliders.length; i++) {

    var start = parseFloat($('.catalog-slider').eq(i).find('.catalog-slider__left').data("start"));
    var end = parseFloat($('.catalog-slider').eq(i).find('.catalog-slider__right').data("end"));
    noUiSlider.create(catalogSliders[i], {
      format: wNumb({
        decimals: 0
      }),
      start: [start, end],
      connect: true,
      range: {
        'min': $('.catalog-slider__left').data('min'),
        'max': $('.catalog-slider__right').data('max')
      }
    });
    catalogSliders[i].noUiSlider.on('slide', noUiSliderUpdate);
  }

  function noUiSliderUpdate() {
    for (var a = 0; a < catalogSliders.length; a++) {
      $('.catalog-slider').eq(a).find('.catalog-slider__left').val(catalogSliders[a].noUiSlider.get()[0])
      $('.catalog-slider').eq(a).find('.catalog-slider__right').val(catalogSliders[a].noUiSlider.get()[1])
    };
    $('.catalog-slider__left, .catalog-slider__right').on('keyup', function () {
      for (var b = 0; b < catalogSliders.length; b++) {
        catalogSliders[b].noUiSlider.set([$('.catalog-slider').eq(b).find('.catalog-slider__left').val(), $('.catalog-slider').eq(b).find('.catalog-slider__right').val()]);
      }
    })
  }

  noUiSliderUpdate()


  // SVG magic
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

})