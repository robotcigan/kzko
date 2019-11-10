'use strict';

$(document).ready(function () {

  if ($('.hero__video').length) {
    document.querySelector('.hero__video').play();
  }

  // Шапка
  function HeaderScroll() {
    if ($(window).scrollTop() > 20) {
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
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });

  $('.cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.faq').on('click', function () {
    $(this).find('.faq__content').slideToggle('faq__content_active');
    $(this).find('.faq__plus').toggleClass('faq__plus_active');
  });

  // SVG magic
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
});