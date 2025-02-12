/*-------------------------------------------*/
/* LOAD
/*-------------------------------------------*/

$(window).on('load', function () {
    $('#load div.inner').delay(300).fadeOut(500);
    $('#load').delay(800).fadeOut(1000);
  });
  
  
  $(function () {
  
    /*-------------------------------------------*/
    /* SLIDER
    /*-------------------------------------------*/
  
    setTimeout(function () {
  
      $('.mainv-img').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
        arrows: false,
        fade: true,
      });
    }, 1800);
  
    /*-------------------*/
    /* SLIDE NUMBERING
    /*------------------*/
  
    let currentPageNumSetUp = function () {
      let className = $('.mainv-img .slick-current').attr("class");
      let class_Array = className.split(" ");
      let str = class_Array[0]
      let number = str.substring(4, 5);
      let numberSet = "0" + number;
      $('.slick-num .nowcnt').text(numberSet);
    }
  
    setInterval(currentPageNumSetUp, 3100);
  
  
    $('.about-slider1').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      pauseOnHover: false,
      pauseOnFocus: false,
      dots: false,
      fade: true,
      arrows: true,
      // prevArrow: '<img src="/assets/images/left.png" class="slide-arrow prev-arrow" width="60" height="60">',
      // nextArrow: '<img src="/assets/images/right.png" class="slide-arrow next-arrow" width="60" height="60">',
    });
  
  
    $('.works-slider1').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 3000,
      pauseOnHover: false,
      pauseOnFocus: false,
      dots: true,
      fade: true,
      asNavFor: '.works-slider2',
      arrows: true,
      // prevArrow: '<img src="/assets/images/left.png" class="slide-arrow prev-arrow" width="60" height="60">',
      // nextArrow: '<img src="/assets/images/right.png" class="slide-arrow next-arrow" width="60" height="60">',
    });
  
  
    $('.works-slider2').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 3000,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: false,
      fade: true,
      asNavFor: '.works-slider1',
      centerMode: true,
      centerPadding: '0',
    });
  
  
  
    /*-------------------------------------------*/
    /* HOVER ADDCLASS
    /*-------------------------------------------*/
  
    $('#onlineShopLink1').hover(
      function () {
        $('#onlineShopLink2').addClass('on');
      },
      function () {
        $('#onlineShopLink2').removeClass('on');
      }
    );
  
    $('#onlineShopLink2').hover(
      function () {
        $('#onlineShopLink1').addClass('on');
      },
      function () {
        $('#onlineShopLink1').removeClass('on');
      }
    );
  
  
    /*-------------------------------------------*/
    /* MAINV SETHEIGHT
    /*-------------------------------------------*/
  
    setHeight();
  
    function setHeight() {
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      $('.mainv-img, .mainv-img .item, .works-title-back .inner').css('height', windowHeight + 'px');
      $('.main-contents').css('padding-top', windowHeight + 'px');
    };
  
  
    /*-------------------------------------------*/
    /* INVIEW
    /*-------------------------------------------*/
  
    $('.come-to-view').on('inview', function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("inview");
      }
    });
  
  
    // /*-------------------------------------------*/
    // /* SMOOTHSCROll
    // /*-------------------------------------------*/
    //
  
    //on click
    var anchorClassInMobileMenu = '.sp-menu a.link[href^="#"]'
    $('a[href^="#"]').click(function (ev) {
      if ($(this).parents(".sp-menu").length > 0) {
        ev.preventDefault()
        location.hash = this.hash
        var that = this
        setTimeout(function () {
          smoothScroll(that.hash);
        }, 50)
      } else {
        smoothScroll(this.hash);
      }
    });
  
    //on load
    if (location.hash !== "") {
      smoothScroll(location.hash);
    }
  
    //@param {string} hash
    function smoothScroll(hash) {
      var $toItem = $(hash);
      var hashOffset = $toItem.offset().top;
      var windowWidth = $(window).width();
  
      if (windowWidth >= 1000) {
        var nAdjuster = 80;
      }
      else {
        var nAdjuster = 60;
      }
  
      var scrollTop = hashOffset - nAdjuster
  
      $("html,body").animate({
        scrollTop: scrollTop
      }, 700, "swing");
      return false;
    }
  
  
  
    /*-------------------------------------------*/
    /* HEADER SCROLL STYLE SETUP
    /*-------------------------------------------*/
  
    $(window).scroll(function () {
      let windowOffset = window.pageYOffset;
      let $spButton = $('.sp-menu-button');
      let windowSizeSp = $spButton.css('display');
      let pcValue = 70;
      let spValue = 60;
      let windowHeight = $(window).height();
      let $windowWidth = $(window).width();
      let posWorks = Math.round($("#works").offset().top);
      let adjust = $windowWidth * 0.56;
  
      //parallax mainv
      if (windowOffset > windowHeight) {
        $('.mainv').css('position', 'absolute');
      }
      if (windowOffset > posWorks - adjust) {
        $('.works-title-back').fadeIn(0);
      }
      else {
        $('.mainv').css('position', 'fixed');
        $('.works-title-back').fadeOut(0);
        $('.header-firstview').fadeIn(300);
      }
  
      if (windowOffset > windowHeight / 2) {
        $('.header').addClass('scroll');
        $('.header-firstview').removeClass('scroll-initial');
        $('.header').fadeIn('300');
        $('.firstview').fadeOut('300');
      }
      else if ($('.header').hasClass('open')) {
        $('.header').css('display', 'block');
      }
      else {
        $('.header').removeClass('scroll');
        $('.header-firstview').addClass('scroll-initial');
        $('.header').fadeOut('300');
        $('.firstview').fadeIn('300');
      }
      if (windowOffset === 0) {
        $('.header-navi-wrapper.pc a.link.current').removeClass('current')
      }
    });
  
  
  
    // /*-------------------------------------------*/
    // /* DRAWER MENU
    // /*-------------------------------------------*/
    // on click
    $('#switch, #firstviewSwitch, ' + anchorClassInMobileMenu).click(function () {
      $('header').removeClass('click');
      $(this).parents('header').addClass('click');
      bodyFix();
      drawerMenu();
    });
  
  
    let scrollpos = 0
    function bodyFix() {
      if ($('body').hasClass('fixed')) {
        $('body').removeClass('fixed').css({
          'top': 0
        });
        window.scrollTo(0, scrollpos);
      } else {
        scrollpos = $(window).scrollTop();
        $('body').addClass('fixed').css({
          'top': -scrollpos
        });
      }
    }
  
    function drawerMenu() {
  
      $('.header, #switch, #menu-back').toggleClass('open');
      $('#menu-back').fadeToggle(300);
  
      if ($('.header-firstview').hasClass('click')) {
        $('.header').fadeIn(300);
        $('.header-firstview').fadeOut(300);
      }
      else if ($('.header').hasClass('open')) {
        $('.header-firstview').fadeOut(300);
      }
      else if ($('.header').hasClass('scroll')) {
        $('.header').css('display', 'block');
      }
      else {
        $('.header').fadeOut(300);
        $('.header-firstview').fadeIn(300);
      }
    };
  
  
  
    /*-------------------------------------------*/
    /* SPMENU REMOVE CLASS
    /*-------------------------------------------*/
  
    spStyleSetUp();
  
    function spStyleSetUp() {
      var $windowHeight = $(window).height();
      var $windowWidth = $(window).width();
      let pcHeaderHeight = 80;
      let spHeaderHeight = 60;
      if ($windowWidth >= 1000) {
        $('.sp-menu').css('display', 'none');
  
      } else if ($('.sp-menu').hasClass('open')) {
        $('.sp-menu').css('display', 'block');
        $('.sp-menu-wrapper').css({ 'height': $windowHeight - spHeaderHeight });
      }
      else {
        $('.sp-menu-wrapper').css({ 'height': $windowHeight });
        $('.sp-menu-wrapper').css({ 'height': $windowHeight - spHeaderHeight });
      }
    };
  
  
  
  
    var timer = 0;
    $(window).resize(function () {
      if (timer > 0) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        spStyleSetUp();
        setHeight();
      }, 200);
    });
  
  
  
    /*-------------------------------------------*/
    /* CURRENT SECTION MARKE
    /*-------------------------------------------*/
  
    $(window).on('resize scroll', function () {
      let posTop = 0;
      let posAbout = Math.round($("#about").offset().top);
      let posWorks = Math.round($("#works").offset().top);
      let posCompany = Math.round($("#company").offset().top);
      let posContact = Math.round($("#contact").offset().top);
      let $windowWidth = $(window).width();
      let adjust = 0;
      let $currentItem = $(".header-navi .item .link");
  
      if ($windowWidth > 999) {
        adjust = 100;
      }
      else {
        adjust = 70;
      }
      if (!($('body').hasClass('fixed'))) {
  
        let posScroll = $(window).scrollTop();
        if (posTop <= posScroll && posScroll < posAbout - adjust) {
          $currentItem.removeClass('current');
          //TOP
          $(".navi0").addClass('current');
        } else if (posAbout - adjust <= posScroll && posScroll < posWorks - adjust) {
          $currentItem.removeClass('current');
          //ABOUT
          $(".navi1").addClass('current');
        } else if (posWorks - adjust <= posScroll && posScroll < posCompany - adjust) {
          $currentItem.removeClass('current');
          //WORKS
          $(".navi2").addClass('current');
        }
        else if (posCompany - adjust <= posScroll && posScroll < posContact - adjust) {
          $currentItem.removeClass('current');
          //COMPANY
          $(".navi3").addClass('current');
        }
        else if (posContact - adjust <= posScroll) {
          $currentItem.removeClass('current');
          //CONATCT
          $(".navi4").addClass('current');
        }
      }
    });
  });