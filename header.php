<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <title>theater</title>
</head>
<body class="index" id="pageTop">
  <header class="header-firstview scroll-initial">
    <div class="header-wrapper">
      <div class="header-fixed">
        <div class="header-fixed-inner">
          <div class="header-row left">
            <h1 class="header-logo"><a href="#pageTop"><img src="<?php the_field('logo_pc'); ?>"></a></h1>
          </div>
          <div class="right">
            <nav class="header-navi-wrapper pc">
              <ul class="header-navi bottom not-common">
                <li class="item"><a class="link font-en navi1" href="<?php echo esc_url(home_url( '/#about')); ?>">ABOUT</a></li>
                <li class="item"><a class="link font-en navi2" href="<?php echo esc_url(home_url( '/#works')); ?>">WORKS</a></li>
                <li class="item"><a class="link font-en navi3" href="<?php echo esc_url(home_url( '/#company')); ?>">COMPANY</a></li>
                <li class="item"><a class="link font-en navi4" href="<?php echo esc_url(home_url( '/contact')); ?>">CONTACT</a></li>
                <li class="item fa"><a class="link" target="_blank" rel="noopener"
                    href=""></a></li>
                <li class="item in"><a class="link" target="_blank" rel="noopener"
                    href=""></a></li>
              </ul>
            </nav>
            <button class="sp-menu-button sp" id="firstviewSwitch">
              <div class="inner">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </header>
  <header class="header" id="header">
    <div class="header-wrapper">
      <div class="header-fixed">
        <div class="header-fixed-inner">
          <div class="header-row left">
            <h1 class="header-logo black"><a href="#pageTop"><img src="<?php the_field('scroll_logo'); ?>"
                   ></a></h1>
            <h1 class="header-logo white"><a href="#pageTop"><img src="<?php the_field('scroll_logo'); ?>"
                  alt="theater" ></a></h1>
          </div>
          <div class="right">
            <nav id="" class="header-navi-wrapper pc">
              <ul class="header-navi bottom not-common">
                <li class="item"><a class="link font-en navi1" href="<?php echo esc_url(home_url( '/#about')); ?>">ABOUT</a></li>
                <li class="item"><a class="link font-en navi2" href="<?php echo esc_url(home_url( '/#works')); ?>">WORKS</a></li>
                <li class="item"><a class="link font-en navi3" href="<?php echo esc_url(home_url( '/#company')); ?>">COMPANY</a></li>
                <li class="item"><a class="link font-en navi4" href="<?php echo esc_url(home_url( '/contact')); ?>">CONTACT</a></li>
              </ul>
            </nav>
            <button class="sp-menu-button sp" id="switch">
              <div class="inner">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <nav id="menu-back" class="sp-menu">
        <div class="sp-menu-wrapper layer">
          <div class="sp-menu-inner">
            <div class="block-wrapper">
              <div class="navi-top">
                <ul class="header-navi not-common">
                  <li class="item"><a class="link font-en navi0" href="<?php echo esc_url(home_url( '/')); ?>">TOP</a></li>
                  <li class="item"><a class="link font-en navi1" href="<?php echo esc_url(home_url( '/#about')); ?>">ABOUT</a></li>
                  <li class="item"><a class="link font-en navi2" href="<?php echo esc_url(home_url( '/#works')); ?>">WORKS</a></li>
                  <li class="item"><a class="link font-en navi3" href="<?php echo esc_url(home_url('/#company')); ?>">COMPANY</a></li>
                  <li class="item"><a class="link font-en navi4" href="<?php echo esc_url(home_url( '/contact')); ?>">CONTACT</a></li>
                </ul>
              </div>
              <div class="footer-block">
                <div class="nobegane-block"><a class="link nobegane-link font-en" target="_blank" rel="noopener"
                    href=""></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <?php wp_head(); ?>
  </header>