'use strict';

$(document).ready(function () {

  var controller = new ScrollMagic.Controller();

  $('.hero .hero__title').blast({
    delimiter: 'word',
    tag: 'span'
  });

  var counter = 0;
  $('.hero__title').find('.blast').each(function () {
    $(this).css('transition-delay', (counter = counter + .03) + 's');
  });
  function some() {
    $('.hero__title').addClass('hero__title--visible');
  }
  setTimeout(some, 1000);

  var heroTween = new TimelineMax().add([TweenMax.to('.hero__box', .8, {
    x: '100%'
  }), TweenMax.to('.hero', 1, {
    opacity: 1
  }), TweenMax.fromTo('.hero__video', 1, {
    scale: 1.2
  }, {
    delay: .2,
    scale: 1
  }), TweenMax.fromTo('.header', 1, {
    y: -100,
    opacity: 0
  }, {
    delay: .5,
    y: 0,
    opacity: 1
  }), TweenMax.fromTo('.hero__subtitle', .5, {
    y: 40,
    opacity: 0
  }, {
    delay: 1.4,
    y: 0,
    opacity: .5
  }), TweenMax.fromTo('.hero__container .btn', .5, {
    y: 30,
    opacity: 0
  }, {
    delay: 1.6,
    y: 0,
    opacity: 1
  })]);

  // Базовая анимация появления c контейнером
  $('.fade-container').each(function () {
    var basicAnimation = new TimelineMax().staggerFromTo($(this).find('.fade-item'), 1, {
      opacity: 0,
      y: '20'
    }, {
      ease: Power4.easeOut,
      opacity: 1,
      y: 0
    }, .1, "+=.1");
    new ScrollMagic.Scene({
      triggerHook: 1,
      triggerElement: this
    }).setTween(basicAnimation)
    // .addIndicators()
    .addTo(controller);
  });

  // Базовая анимация появления
  $('.fade-up').each(function () {
    var basicAnimation = new TimelineMax().staggerFromTo($(this), 2, {
      opacity: 0,
      y: '50'
    }, {
      ease: Power4.easeOut,
      opacity: 1,
      y: 0
    }, .2, "+=.2");
    new ScrollMagic.Scene({
      triggerHook: 1,
      triggerElement: this
    }).setTween(basicAnimation)
    // .addIndicators()
    .addTo(controller);
  });
});