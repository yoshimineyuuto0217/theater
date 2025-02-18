
<?php get_header();?>

<?php $home_id = get_option('page_on_front');?>

<div id="load">
    <div class="inner"></div>
  </div>
  <section class="movie">
    <video autoplay muted poster="<?php echo get_template_directory_uri(); ?>/assets/video/thumbnail.jpg">
        <source src="<?php echo get_template_directory_uri(); ?>/assets/video/video_541018042629357812-5l8bD9fy.mp4" type="video/mp4">
    </video>
  </section>
  </div>
  <section class="main-contents">
    <div class="main-contents-inner" id="contentsTop">
      <section class="section about text-en" id="about">
        <a class="scroll-bar" href="#contentsTop"><span class="scroll-bar-line"></span></a>
        <div class="about-inner">
          <h2 class="font-en set-width come-to-view"><?php the_field('about_main_title'); ?></h2>
          <div class="block top come-to-view">
            <div class="inner-block left ja">
              <h3 class="ja-title"><?php the_field('about_title'); ?></h3>
              <p class="text"><?php the_field('about_text'); ?></p>
            </div>
          </div>
          <div class="block about-img come-to-view">
            <ul class="about-slider1 pc sp">
              <li class="item img1"><img src="<?php the_field('works_1');?>" alt=""   class="pc"></li>
              <li class="item img2"><img src="<?php the_field('works_2');?>" alt=""   class="pc"></li>
              <li class="item img3"><img src="<?php the_field('works_3');?>" alt=""   class="pc"></li>
              <li class="item img4"><img src="<?php the_field('works_4');?>"alt=""   class="pc"></li>
            </ul>
          </div>
          <div class="block bottom">
            <div class="inner-block ja come-to-view">
              <h3 class=""><?php the_field('slider_main_title'); ?></h3>
              <p class="text"><?php the_field('slider_text'); ?></p></div>
        </div>
      </section>
      <section class="section works-title-back come-to-view">
        <div class="inner">
        </div>
      </section>
      <section class="section works1" id="works">
        <div class="works-inner">      
<div class="section-title-block">
    <div class="section-title come-to-view" style="background-image: url('<?php the_field('back_1') ?>');">
        <h2 class="font-en"><?php the_field('back_title'); ?></h2>
    </div>
</div>
          <div class="block lead">
            <div class="wrapper">
              <div class="inner-block left ja come-to-view">
                <h3 class="ja"><?php the_field('back_title_1'); ?></h3>
                <p class="text"><?php the_field('back_title_2'); ?></p>
              </div>
            </div>
          </div>
          <div class="block material common-block">
            <div class="title-wrapper come-to-view">
              <h3 class="ja"><span class="column"><?php the_field('column'); ?><br><?php the_field('column_1'); ?></span>
              <span class="column parentheses top white"></span></h3>
            </div>
            <div class="inner-wrapper">
              <div class="inner-block left img-block come-to-view">
                <img src="<?php the_field('big_1'); ?>" alt="">
              </div>
              <div class="inner-block right text-block come-to-view">
                <p class="ja"><?php the_field('column_3'); ?></p>
                <p class="en"><?php the_field('column_4'); ?></p>
              </div>
            </div>
          </div>
          <div class="block technique common-block">
            <div class="title-wrapper come-to-view">
              <h3 class="ja"><span class="column"><?php the_field('column_5'); ?><br><?php the_field('column_6'); ?></span></h3>
            </div>
            <div class="inner-wrapper">
              <div class="inner-block right img-block come-to-view">
                <img src="<?php the_field('big_2'); ?>" alt="">
              </div>
              <div class="inner-block left text-block come-to-view">
                <p class="ja"><?php the_field('column_8'); ?></p>
                <p class="en"><?php the_field('column_9'); ?></p>
              </div>
            </div>
          </div>
          <div class="block material common-block">
            <div class="title-wrapper come-to-view">
              <h3 class="ja"><span class="column"><?php the_field('column_10'); ?></span>
              <span class="column parentheses top white"></span></h3>
            </div>
            <div class="inner-wrapper">
              <div class="inner-block left img-block come-to-view">
                <img src="<?php the_field('big_3'); ?>" alt="">
              </div>
              <div class="inner-block right text-block come-to-view">
                <p class="ja"><?php the_field('column_3'); ?></p>
                <p class="en"><?php the_field('column_4'); ?></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="section works2">
        <div class="works-inner">
          <div class="block original-brand come-to-view">
            <div class="wrapper">
              <div class="inner">
                <p class="en left writing-vertical font-en"><?php the_field('grid_text'); ?><span class="blank"><?php the_field('grid_text_1'); ?></span></p>
                <div class="right" >
                  <div class="img-wrapper">
                    <img src="/assets/images/hover_bland.png" alt="" class="hover-layer">
                    <img src="<?php the_field('grid_4'); ?>" alt="ORIGINAL BRAND - nobegane">
                  </div>
                  <p class="ja"><?php the_field('grid_text_2'); ?></p>
                  <div class="en font-en link link-common large original"><?php the_field('grid_text_3'); ?></div>
                </div>
              </div>
            </div>
          </div>
          <div class="block online">
            <div class="wrapper">
              <div class="inner">
                <div  class="img-block" id="onlineShopLink1">
                  <img src="/assets/images/hover_online.png" alt="" class="hover-layer come-to-view">
                  <img src="<?php the_field('grid_6'); ?>" alt="ONLINE SHOP" class="img1 come-to-view">
                  <img src="<?php the_field('grid_3'); ?>" alt="" class="img2 come-to-view">
                  <p class="en online-title font-en come-to-view"><?php the_field('grid_text_4'); ?></p>
                </div>
                <div class="cart-block" id="onlineShopLink2"><span class="img-wrapper"></span></div>
              </div>
            </div>
          </div>
          <div class="img-block1 come-to-view">
            <div class="wrapper">
              <img src="<?php the_field('grid_4'); ?>" alt="">
            </div>
          </div>
          <div class="img-block2 come-to-view">
            <div class="wrapper">
              <img src="<?php the_field('grid_3'); ?>"  alt="" class="img">
            </div>
          </div>
          <div class="img-block3">
            <div class="wrapper">
              <img src="<?php the_field('grid_2'); ?>" alt="" class="img-small come-to-view">
              <img src="<?php the_field('grid_1'); ?>"  alt="" class="img-large come-to-view">
            </div>
          </div>
        </div>
      </section> -->
      <section class="section company" id="company">
        <div class="company-inner">
          <div class="block img-block come-to-view">
            <img src="/assets/images/company_dummy.png" alt="" class="pc dummy">
            <div class="profile">
              <div class="left">
              <img src="<?php the_field('company_1'); ?>" alt="">
                <div class="name">
                  <p class="en font-en"><?php the_field('name'); ?></p>
                  <p class="ja"><?php the_field('name_1'); ?></p>
                </div>
              </div>
            </div>
          </div>
          <div class="blcok text-block come-to-view">
            <div class="section-title">
              <h2 class="font-en"><?php the_field('company'); ?></h2>
              <dl class="ja outline">
                <dt>会社名</dt>
                <dd><?php the_field('company_12'); ?></dd>
                <dt>代表取締役</dt>
                <dd><?php the_field('company_4'); ?></dd>
                <dt>電話番号</dt>
                <dd><?php the_field('company_5'); ?></dd>
                <dt>資本金</dt>
                <dd><?php the_field('company_13'); ?></dd>
                <dt>事業内容</dt>
                <dd><?php the_field('company_6'); ?><br><?php the_field('company_7'); ?><br><?php the_field('company_8'); ?></dd>
                <dt>所在地</dt>
                <dd><?php the_field('company_9'); ?><br><?php the_field('company_10'); ?><br><?php the_field('company_11'); ?></dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
  </section>
  <?php get_footer();?>