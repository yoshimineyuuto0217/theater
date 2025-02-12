<?php 
function contain_css_js() {
    // CSSの読み込み
    wp_enqueue_style('index-css', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('ress-css', get_template_directory_uri() . '/css/vendor/reset.css');
    wp_enqueue_style('slick-theme-css', get_template_directory_uri() . '/js/vendor/slick/slick-theme.css');
    wp_enqueue_style('slick-css', get_template_directory_uri() . '/js/vendor/slick/slick.css');
    wp_enqueue_style('karla-font', 'https://fonts.googleapis.com/css2?family=Karla&display=swap', array(), null);

    // jQueryの読み込み（WordPressにはjQueryが標準で含まれているのでCDNを使う場合は deregister も考慮）
    wp_enqueue_script('jquery-cdn', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), null, true);

    // JavaScriptの読み込み
    wp_enqueue_script('script-js', get_template_directory_uri() . '/js/script.js', array('jquery'), null, true);
    wp_enqueue_script('inview-js', get_template_directory_uri() . '/js/vendor/jquery.inview.min.js', array('jquery'), null, true);
    wp_enqueue_script('slick-js', get_template_directory_uri() . '/js/vendor/slick/slick.min.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'contain_css_js');
