// /*-------------------------------------------*/
// /* LOAD
// /*-------------------------------------------*/

$(window).on('load', function () {
    $('#load div.inner').delay(300).fadeOut(500);
    $('#load').delay(800).fadeOut(1000);
  });
  
  
  $(function () {

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
  
  
//     /*-------------------------------------------*/
//     /* MAINV SETHEIGHT
//     /*-------------------------------------------*/
  
    setHeight();
  
    function setHeight() {
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      $('.mainv-img, .mainv-img .item, .works-title-back .inner').css('height', windowHeight + 'px');
      // $('.main-contents').css('padding-top', windowHeight + 'px');
    };
  
  
//     /*-------------------------------------------*/
//     /* INVIEW
//     /*-------------------------------------------*/
  
    $('.come-to-view').on('inview', function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("inview");
      }
    });
  
  
//     // /*-------------------------------------------*/
//     // /* SMOOTHSCROll
//     // /*-------------------------------------------*/
//     //
  
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
  
  
  
//     /*-------------------------------------------*/
//     /* HEADER SCROLL STYLE SETUP
//     /*-------------------------------------------*/
  
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
  
  
  
//     // /*-------------------------------------------*/
//     // /* DRAWER MENU
//     // /*-------------------------------------------*/
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
  
  
  
//     /*-------------------------------------------*/
//     /* SPMENU REMOVE CLASS
//     /*-------------------------------------------*/
  
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
  });

//    /*-------------------------------------------*/
//     /* CURRENT SECTION MARKE
//     /*-------------------------------------------*/
    
  $(document).ready(function () {
    // ホーム以外のページから `#company` に移動したらスムーズスクロール
    if (location.hash) {
      let hash = location.hash;
      if ($(hash).length) {
        setTimeout(function () {
          smoothScroll(hash);
        }, 500); // ページ読み込み後に少し遅延させてスクロール
      }
    }
  
    // すべてのアンカーリンクにクリックイベントを適用
    $('a[href^="' + window.location.origin + '/#"]').click(function (e) {
      e.preventDefault();
      let hash = this.hash;
  
      // ページが `/contact` なら `home` へ遷移し、スムーズスクロールを実行
      if (window.location.pathname.includes('/contact')) {
        window.location.href = '/' + hash;
      } else {
        smoothScroll(hash);
      }
    });
  
    function smoothScroll(hash) {
      let target = $(hash);
      if (target.length) {
        let offset = $(window).width() >= 1000 ? 80 : 60; // スクロール時の調整
        let position = target.offset().top - offset;
  
        $("html, body").animate({
          scrollTop: position
        }, 700, "swing");
      }
    }
  });

  (function($) {
    $(document).ready(function () {
      // ハンバーガーメニューを閉じる関数
      function closeHamburgerMenu() {
        $('.header, #switch, #menu-back').removeClass('open');
        $('#menu-back').fadeOut(300);
        $('body').removeClass('fixed').css({ 'top': 0 });
      }
  
      // URL にハッシュ (`#about`, `#works`, `#company`) があればスムーズスクロール
      if (location.hash) {
        let hash = location.hash;
        if ($(hash).length) {
          setTimeout(function () {
            smoothScroll(hash);
          }, 500); // 遅延させてスクロール
        }
      }
  
      // すべてのアンカーリンクにクリックイベントを適用
      $('.sp-menu a[href^="' + window.location.origin + '/#"]').click(function (e) {
        e.preventDefault();
        let hash = this.hash;
  
        // 現在のページが `/` なら、ハンバーガーメニューを閉じてスムーズスクロール
        if (window.location.pathname === '/') {
          closeHamburgerMenu();
          smoothScroll(hash);
        } 
        // `/contact` なら `/` に遷移し、スクロール位置を記憶
        else if (window.location.pathname.includes('/contact')) {
          sessionStorage.setItem('scrollTo', hash);
          window.location.href = '/';
        }
      });
  
      // `/` に遷移後、記憶したスクロール位置へ移動
      if (sessionStorage.getItem('scrollTo')) {
        let targetHash = sessionStorage.getItem('scrollTo');
        sessionStorage.removeItem('scrollTo'); // 使い終わったら削除
  
        if ($(targetHash).length) {
          setTimeout(function () {
            smoothScroll(targetHash);
          }, 500);
        }
      }
  
      function smoothScroll(hash) {
        let target = $(hash);
        if (target.length) {
          let offset = $(window).width() >= 1000 ? 80 : 60; // スクロール位置調整
          let position = target.offset().top - offset;
  
          $("html, body").animate({
            scrollTop: position
          }, 700, "swing");
        }
      }
    });
  })(jQuery);


  