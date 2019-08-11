$(document).ready(function()
{

  if ($("#map").length>0 && $(".main").length==0){
    var script = document.createElement('script');
    script.onload = function() {
      ymaps.ready(init);
    };
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=8b288076-3d1b-4744-9854-1ed802a7f226";
    document.getElementsByTagName('head')[0].appendChild(script);

  }

  // if ($(".main").length>0){

  //   $(".main").onepage_scroll({
  //    sectionContainer: ".section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  //     easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
  //                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  //      animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
  //      pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  //      updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  //      beforeMove: function(index) {
  //       if ((index==6) && $('.main').attr('data-map')!="complete"){
  //         $('.main').attr('data-map','complete')
  //         var script = document.createElement('script');
  //         script.onload = function() {
  //           ymaps.ready(init);
  //         };
  //         script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=8b288076-3d1b-4744-9854-1ed802a7f226";
  //         document.getElementsByTagName('head')[0].appendChild(script);
  //       }
  //      },  // This option accepts a callback function. The function will be called before the page moves.
  //      afterMove: function(index) {
  //       if ((index==5 || index==4) && $('.main').attr('data-map')!="complete"){
  //         $('.main').attr('data-map','complete')
  //         var script = document.createElement('script');
  //         script.onload = function() {
  //           ymaps.ready(init);
  //         };
  //         script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=8b288076-3d1b-4744-9854-1ed802a7f226";
  //         document.getElementsByTagName('head')[0].appendChild(script);
  //       }
  //      },   // This option accepts a callback function. The function will be called after the page moves.
  //      loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  //      keyboard: true,                  // You can activate the keyboard controls
  //      responsiveFallback: 750,         // You can fallback to normal page scroll by defining the width of the browser in which
  //                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
  //                     // the browser's width is less than 600, the fallback will kick in.
  //      direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
  //   });
  // }

  $(".ajax-form input[name='sogl']").click(function()
  {
    var check = $(this).attr("checked");
    if(check == "checked")
      $(this).removeAttr("checked").closest("form").find("input[type='submit']").addClass("disabled").attr("disabled" , "disabled");
    else
      $(this).attr("checked" , "checked").closest("form").find("input[type='submit']").removeClass("disabled").removeAttr("disabled");
  });

  //GALLERY
  var gal = $(".portfolio-gallery");
  if(gal.length)
  {
  gal.justifiedGallery({rowHeight : 180 , margins : 5});
  }

  // setInterval(function()
  // {
  //   var id = $(".section.active").attr("data-index") * 1;
  //   var curr = $(".slide-number").text();
  //   curr = curr.replace("0" , "") * 1;
  //   if(curr != id)
  //   $(".slide-number").text("0"+id);

  // },1000);

  var obj = $(".fancy");
  if(obj.length)
    $(".fancy").fancybox();
  $("input.phone").mask("+7(999)-999-99-99");



  //Popup forms
  $(".back-call-btn").click(function(e)
  {
    e.preventDefault();
    $(".popup-block .back-call").removeClass("active").removeClass("hide");
    $(".popup-block " + $(this).attr("href")).addClass("active");
    $(".popup-block").toggleClass("active");
  });
  $(".popup-block-cross").click(function(e)
  {
    e.preventDefault();
    $(".popup-block").toggleClass("active");
    setTimeout(function()
    {
      $(".popup-block .back-call").removeClass("active").removeClass("hide");
    },500);
  });

  $(".ajax-form").submit(function(e)
  {
    let form = $(this);
    e.preventDefault();

    $.ajax
    ({
      type : "POST",
      url : "/system/message.php",
      data : form.serialize()
    });

    $(".popup-block").addClass("active");
    $(".popup-block #success").addClass("active");
    $(this).closest(".back-call").addClass("hide");
    $(this).find("input[type='text'] , input[type='email'] , input[type='phone']").each(function()
    {
      if($(this).attr("name") != "item")
      {
        $(this).val('').removeClass("has-content");
      }
    });
  });




  //Compare
  $(".add-to-compare").click(function()
  {
    var id = $(this).attr("data-id");
    $(this).toggleClass("active");
    if($(this).hasClass("active") == true)
    {
      $(this).find("span.text").text($(this).attr("data-end"));
      $.ajax
      ({
        type    : "POST",
        url     : "/system/compare.php",
        data  : "type=add&id="+id,
        success   : function(result)
        {
          if(result > 0)
          {
            $(".cart-wrap").attr("href" , "/compare/");
            $(".cart-quantity").removeClass("compare-hide").text(result);
          }
          else
          {
            $(".cart-quantity").addClass("compare-hide").text(result);
            $(".cart-wrap").removeAttr("href");
          }
        }
      });
    }
    else
    {
      $.ajax
      ({
        type  : "POST",
        url     : "/system/compare.php",
        data  : "type=del&id="+id,
        success : function(result)
        {
          if(result > 0)
            $(".cart-quantity").removeClass("compare-hide").text(result);
          else
            $(".cart-quantity").addClass("compare-hide").text(result);
        }
      });
      $(this).find("span.text").text($(this).attr("data-start"));
    }

  });



  $(".language-link").click(function(e)
  {
    e.preventDefault();
    $(".language-wrap").addClass("show");
    var lang = $(this).attr("data-lan");
    $.post("/system/language.php" , {lang : lang}, function()
    {
      var page_title = $("input[name='title-"+lang+"']").val();
      if(page_title)
      {
        $("title").text(page_title);
        $("h1").text(page_title);
      }
      else
      {
        page_title = $("input[name='h1_"+lang+"']").val();
        if(page_title)
        {
          $("title").text(page_title);
          $("h1").text(page_title);
        }
      }

      setTimeout(function()
      {
        $("[data-ajax-language]").each(function()
        {
          var obj = $(this);
          var load_id = obj.attr("data-ajax-language");
          $.post("/system/reload/block"+load_id+".php" , {action : 'loading'} , function(data){obj.html(data)});
        });
        if(lang == "ru")
        {
          $("[data-reload-content='en'").addClass("lang-hide");
          $("[data-reload-content='cn'").addClass("lang-hide");
          $("[data-reload-content='ru'").removeClass("lang-hide");
        }
        else if(lang == "en")
        {
          $("[data-reload-content='ru'").addClass("lang-hide");
          $("[data-reload-content='cn'").addClass("lang-hide");
          $("[data-reload-content='en'").removeClass("lang-hide");
        }
        else if(lang == "cn")
        {
          $("[data-reload-content='ru'").addClass("lang-hide");
          $("[data-reload-content='en'").addClass("lang-hide");
          $("[data-reload-content='cn'").removeClass("lang-hide");
        }

        $.post("/system/scripts.php" , {action : 'loading'} , function(data)
        {
          $(".site-scripts").html(data);
        });
      },1500);
      setTimeout(function()
      {
        $(".language-wrap svg").addClass("animate");
        setTimeout(function()
        {
          var home = $("input[name='home-page']").val();
            var curr_page = $("input[name='curr-page']").val();
            var site_url = $("input[name='site-url']").val();
            curr_page = curr_page.split("/");

            var temp_url = '';
            if(curr_page[1] == "en" || curr_page[1] == "cn")
            {
              if(lang == "ru")
                temp_url = "/";
              else
                temp_url = "/"+lang+"/";
              for(i=2;i<=curr_page.length-1;i++)
              {
                if(curr_page[i].length)
                  temp_url += curr_page[i] + "/";
              }
            }
            else
            {
              temp_url = "/"+lang+"/";
              for(i=1;i<=curr_page.length-1;i++)
              {
                if(curr_page[i].length)
                  temp_url += curr_page[i] + "/";
              }
            }
            window.location.href="http://"+site_url + temp_url;
        },3500);
      },500);
    });
  });

  $(".input-effect input").focusout(function()
  {
    if($(this).val() != "")
      $(this).addClass("has-content");
    else
      $(this).removeClass("has-content");
    });

  $("form.ajax-form input.effect-16").each(function()
  {
    if($(this).val() != "")
      $(this).addClass("has-content");
    else
      $(this).removeClass("has-content");
  });


  var controller = new ScrollMagic.Controller();
  var tl_rep = new TimelineMax({ repeat: -1, yoyo: true });
  tl_rep.to(".scroll-btn-in", 1, { top: 12 }, 0);

  if($(window).width() > 750)
  {
    let tl2 = new TimelineMax();
    tl2
      .fromTo('.main-page-header .top-navigation-link',0.1,{color: '#fff'},{color: '#000'},'-=0.1')
      .fromTo('.main-page-header .header-wrap .header-phone',0.1,{color: '#fff'},{color: '#000'},'-=0.1')
      .fromTo('.main-page-header .right-header .cart-icon',0.1,{'background-color': '#fff'},{'background-color': '#000'},'-=0.1')
      .fromTo('.main-page-header .search-icon',0.1,{fill: '#fff'},{fill: '#000'},'-=0.1')
      .fromTo('.main-page-header .l1, .main-page-header .l2, .main-page-header .l3',0.1,{'background-color': '#fff'},{'background-color': '#000'},'-=0.1')
      // .fromTo('.slide-number',0.1,{color: '#fff'},{color: '#000'},'-=0.1')
      .fromTo('.main-page-header .logo-color',0.1,{opacity: '0'},{opacity: '1'},'-=0.1')
      .fromTo('.main-page-header .logo-white',0.1,{opacity: '1'},{opacity: '0'},'-=0.1')
      .fromTo('.total-slides',0.1,{color: 'rgba(255,255,255,.5)'},{color: 'rgba(0,0,0,.5)'},'-=0.1')
      .fromTo('.main-page-language .change-language-title',0.1,{color: 'rgba(255,255,255,1)'},{color: 'rgba(0,0,0,1)'},'-=0.1')
      .fromTo('.main-page-language .language-link',0.1,{color: 'rgba(255,255,255,1)'},{color: 'rgba(0,0,0,1)'},'-=0.1')
      .fromTo('.scroll-btn',0.1,{'border-color': '#fff'},{'border-color': '#000'},'-=0.1')
      .fromTo('.scroll-btn-in',0.1,{'background-color': '#fff'},{'background-color': '#000'},'-=0.1')

      var scene = new ScrollMagic.Scene({ duration: '0%', offset: 50, triggerElement: '.color-trigger', triggerHook: .8,});

      /*scene.addIndicators({name:'screen1'});*/
      scene.setTween(tl2);
      scene.addTo(controller);

      $('.search-wrap').on('click', function()
      {
        let search_block = $('.search-block-wrap');
        let tl = new TimelineMax();
        tl.to(search_block, 0.3,{top: '0%'})
      });

      $('.main').on('click', function()
      {
        let search_block = $('.search-block-wrap');
        let tl = new TimelineMax();
        tl.to(search_block, 0.3,{top: '-100%'})
      });

      new TimelineMax()
      let tl_slide1 = new TimelineMax();
      tl_slide1.staggerFromTo('.sectieon-sldier1 [data-stagger]',0.3,{y:20,opacity:0},{y:0,opacity:1},0.1,'-=0.4')

      var scene = new ScrollMagic.Scene({ duration: '0%', offset: 0, triggerElement: '.sectieon-sldier1', triggerHook: .8,});
      scene.setTween(tl_slide1);
      scene.addTo(controller);

      new TimelineMax()
      let tl_slide2 = new TimelineMax();
      tl_slide2.staggerFromTo('.sectieon-sldier2 [data-stagger]',0.3,{y:20,opacity:0},{y:0,opacity:1},0.1,'-=0.4')
      var scene = new ScrollMagic.Scene({ duration: '0%', offset: -10, triggerElement: '.sectieon-sldier2', triggerHook: .8,});
      scene.setTween(tl_slide2);
      scene.addTo(controller);

      new TimelineMax()
      let tl_slide3 = new TimelineMax();
      tl_slide3.staggerFromTo('.sectieon-sldier3 [data-stagger]',0.3,{y:20,opacity:0},{y:0,opacity:1},0.1,'-=0.4')

      var scene = new ScrollMagic.Scene({ duration: '0%', offset: -10, triggerElement: '.sectieon-sldier3', triggerHook: .8,});
      scene.setTween(tl_slide3);
      scene.addTo(controller);

      new TimelineMax()
      let tl_slide4 = new TimelineMax();
      tl_slide4.staggerFromTo('.sectieon-sldier4 [data-stagger]',0.3,{y:20,opacity:0},{y:0,opacity:1},0.1,'-=0.4')

      var scene = new ScrollMagic.Scene({ duration: '0%', offset: -10, triggerElement: '.sectieon-sldier4', triggerHook: .8,});
      scene.setTween(tl_slide4);
      scene.addTo(controller);

      new TimelineMax()
      let tl_slide5 = new TimelineMax();
      tl_slide5.staggerFromTo('.sectieon-sldier5 [data-stagger]',0.3,{y:20,opacity:0},{y:0,opacity:1},0.1,'-=0.4')

      var scene = new ScrollMagic.Scene({ duration: '0%', offset: 0, triggerElement: '.sectieon-sldier5', triggerHook: .8,});
      scene.setTween(tl_slide5);
      scene.addTo(controller);
  }

  else if($(window).width() < 750)
  {
    var obj = $(".category-list");
    if(obj.length && obj.hasClass("slick-slider") == false)
    {
      var count = obj.find(".category-item").length;
      if(count > 1)
      {
        $('.category-list').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1
        });
        $('.second-slider-elements .slick-button-prev').on('click', function() {
          $('.category-list').slick('slickPrev');
        });
        $('.second-slider-elements .slick-button-next').on('click', function() {
          $('.category-list').slick('slickNext');
        });
      }
      else
      {
        $('.second-slider-elements .slick-button-prev').detach();
        $('.second-slider-elements .slick-button-next').detach();
      }
    }

    let tl2_mobile = new TimelineMax();
    tl2_mobile
      .fromTo('.main-page-header .header-wrap .header-phone',0.1,{color: '#fff'},{color: '#000'},'-=0.1')
      .fromTo('.main-page-header .l1, .main-page-header .l2, .main-page-header .l3',0.1,{'background-color': '#fff'},{'background-color': '#000'},'-=0.1')
      .fromTo('.main-page-header .logo-color',0.1,{opacity: '0'},{opacity: '1'},'-=0.1')
      .fromTo('.main-page-header .logo-white',0.1,{opacity: '1'},{opacity: '0'},'-=0.1')
      .fromTo('.header',0.1,{'background-color': 'rgba(255,255,255,0',},{'background-color': 'rgba(255,255,255,1', 'padding-bottom': '15px', 'padding-top': '15px'},'-=0.1')

    var scene = new ScrollMagic.Scene({ duration: '0%', offset: 50, triggerElement: '.color-trigger', triggerHook: .8,});
    scene.setTween(tl2_mobile);
    scene.addTo(controller);
  }

  //INNER PAGES HEADER
  let tl2_mobile = new TimelineMax();
    tl2_mobile.fromTo('.header-inner-pages',0.1,{'background-color': 'rgba(255,255,255,0',},{'background-color': 'rgba(255,255,255,1', 'padding-bottom': '15px', 'padding-top': '15px'},'-=0.1')
  var scene = new ScrollMagic.Scene({ duration: '0%', offset: 50, triggerElement: '.color-trigger', triggerHook: .8,});
  scene.setTween(tl2_mobile);
  scene.addTo(controller);

  $('.hamburger-wrap').on('click', function(){
    $('.humburger').toggleClass("active");
    $('.mobile-menu').toggleClass('active');

    });
  $('.mobile-menu-cross').on('click', function(){
    $('.mobile-menu').removeClass('active');
    $('.humburger').removeClass("active");
  });

  //SUB MENU TRIGGER


  $('.sub-menu-btn').on('click', function()
  {
    var obj = $(this);
    obj.next('.mobile-sub-menu').slideToggle(300);
  });

  $(document).on('click', function(event)
  {
    var div = $(".mobile-menu");
    if (!$(event.target).closest(div).length && !$(event.target).closest('.hamburger-wrap').length)
    {
      $(div).removeClass('active');
      $('.humburger').removeClass('active');
    }

    div = $(".popup-block");
    if($(event.target).closest(".popup-block").length == 0 && $(event.target).hasClass("back-call-btn") == false)
    {
      $(div).removeClass('active');
      $('.humburger').removeClass('active');
    }
   });

//SCROLL TO TOP

$('.footer-back-btn').click(function()
{
  $("html,body").animate({scrollTop : "0"},1000);
});

// CARD GALLERY

/*$('.card-little-img').on('click', function(){
var obj = $(this);
  $('.card-little-img').removeClass('card-little-img-active');
  obj.addClass('card-little-img-active');
  var sourse = obj.attr('data-sourse');
  $('.card-big-link').attr('href', sourse);
  $('.card-big-img').attr('src', sourse);
});
*/



//TABS GSAP

var tl = new TimelineMax();
$('.tabs-block li').on('click', function(){
  var $label = $('.label');
  var $this = $(this);
  var el_width = $this.width();
  var offset_left = $this.offset();
  var initTabNum = $this.data('menu');
  var $article= $('.article');
  var $show = $('.show');
  function step_1() {
    $article.removeClass('show')
  }
  function step_2() {
    $('.num_' + initTabNum).addClass('show')
  }

  if(!tl.isActive()){
    tl.to($article, 0.5, {y: 0, onComplete: step_1})
    .fromTo($('.num_' + initTabNum), 0.75, { onStart: step_2, y: 0}, {y: 0, immediateRender:false})
    //.to($article, 0, {y: 0, ease: Sine.easeOut})
    $label.offset({
      left : offset_left.left
    }).css('width', el_width)
    $('.tabs-block li').removeClass('active');
  $this.addClass('active');
  }
})

var initSize = function() {
  var start_element = $('.tabs-block li:first-of-type');
  var $label = $('.label');
  var initWidth = start_element.css('width')
  $label.css('width', initWidth)
}
initSize()



let card_slider = $(".card-big-list");
if(card_slider.children(".card-big-slide").length > 1)
{
  card_slider.slick({
    dots: false,
    infinite: false
  });

  $('.third-slider-elements .slick-button-prev').on('click', function() {
    card_slider.slick('slickPrev');
    let curr = Number(card_slider.find(".slick-current").attr("data-slick-index"));

    $(".card-little-img").removeClass("card-little-img-active");
    $(".card-little-img[data-id='"+curr+"']").addClass("card-little-img-active");
  });
  $('.third-slider-elements .slick-button-next').on('click', function() {
    card_slider.slick('slickNext');
    let curr = Number(card_slider.find(".slick-current").attr("data-slick-index"));

    $(".card-little-img").removeClass("card-little-img-active");
    $(".card-little-img[data-id='"+curr+"']").addClass("card-little-img-active");
  });

  var curr_slide = 0;
  $(".card-little-img").click(function()
  {
    let obj = $(this);
    let id = Number(obj.attr("data-id"));
    let curr = Number(card_slider.find(".slick-current").attr("data-slick-index"));

    $(".card-little-img").removeClass("card-little-img-active");
    obj.addClass("card-little-img-active");
    card_slider.slick('slickGoTo', id, false);

  });
}


//PORFTOLIO SLIDER

var obj = $(".portfolio-slider-list");
if(obj.length && obj.hasClass("slick-initialized") == false)
{
  $('.portfolio-slider-list').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.portfolio-elements .slick-button-prev').on('click', function() {
    $('.portfolio-slider-list').slick('slickPrev');
  });
  $('.portfolio-elements .slick-button-next').on('click', function() {
    $('.portfolio-slider-list').slick('slickNext');
  });
}

//FLITER
/*
$('.filter-title').on('click', function(){
  var obj = $(this);
  obj.next('.sub-filter-1st').slideToggle(300);
});
$('.sub-filter-1st-title').on('click', function(){
  var obj = $(this);
  obj.toggleClass('active');
  obj.next('.sub-filter-2nd').slideToggle(300);
}); */

//FILTER BTN
$('.filter-btn').on('click', function(){
  $('.filter-left').toggleClass('active');
});
$('.close-filter').on('click', function(){
  $('.filter-left').removeClass('active');
});

$(document).on('click', function(event) {
var div = $(".filter-left");
if (!$(event.target).closest(div).length && !$(event.target).closest('.filter-btn').length) {
$(div).removeClass('active');
}
});


$('.open-video').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});


  //TOP SUB MENU
  $('.top-navigation-item-catlog').mouseenter(function(){
    var top_menu = $('html').scrollTop();
    if (top_menu <= 50) {
      let obj = $(this);
     let tl = new TimelineMax();
      tl
      .to('.top-sub-menu', 0.3,{autoAlpha: 1,'z-index': '9999',top: '135px'})
      .to('.header-inner-pages', 0.3,{backgroundColor: 'rgba(255,255,255,1)'},'-=1')

  } else {
        let obj = $(this);
     let tl = new TimelineMax();
      tl
      .to('.top-sub-menu', 0.3,{autoAlpha: 1,'z-index': '9999',top: '63px'})
  }
});

$('.top-navigation-item-catlog').mouseleave(function(){
  var top_menu = $('html').scrollTop();
  if (top_menu <= 50) {
      let obj = $(this);
     let tl = new TimelineMax();
      tl
      .to('.top-sub-menu', 0.1,{autoAlpha: 0,'z-index': '-9999',top: '115px'})
      .to('.header-inner-pages', 0.3,{backgroundColor: 'rgba(255,255,255,0)'},'-=1')
}else {
       let obj = $(this);
     let tl = new TimelineMax();
      tl
      .to('.top-sub-menu', 0.1,{autoAlpha: 0,'z-index': '-9999',top: '45px'})
}

});


$("body").bind("mousewheel" , function()
{
if (screen.width > 1100) {
   let tl = new TimelineMax();
      tl
      .to('.top-sub-menu', 0.1,{autoAlpha: 0,'z-index': '-9999',top: '45px'})
}
});




  var obj = $(".popular-list");
  if(obj.length && obj.hasClass("slick-initialized") == false)
  {
    $('.popular-list').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
       responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      ]
    });

    $('.third-slider-elements .slick-button-prev').on('click', function() {
      $('.popular-list').slick('slickPrev');
    });
    $('.third-slider-elements .slick-button-next').on('click', function() {
      $('.popular-list').slick('slickNext');
    });
  }

  //COMPARISON SLDIER

  var obj = $(".comparison-main-list");
  if(obj.length && obj.hasClass("slick-initialized") == false)
  {
    $('.comparison-main-list').slick({
 centerMode: false,
 centerPadding: '75px',
 infinite: true,
 slidesToShow: 3,
 slidesToScroll: 1,
  responsive: [
    {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 800,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});

    $('.comparison-elements .slick-button-prev').on('click', function() {
      $('.comparison-main-list').slick('slickPrev');
    });
    $('.comparison-elements .slick-button-next').on('click', function() {
      $('.comparison-main-list').slick('slickNext');
    });
  }

  $('.read-more').on('click', function(){
    $('.left-text-wrap').toggleClass("active");
    });
});
