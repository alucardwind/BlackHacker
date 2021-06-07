<?php

$count = 1;
if (function_exists('register_sidebar'))
    register_sidebar(array(
        'id' => 'sidebar-1'
    ));

/**
 * Add a sidebar.
 */
function blackhack_theme_slug_widgets_init() {
    register_sidebar( array(
        'id'            => 'sidebar-1'
    ) );
}
add_action( 'widgets_init', 'blackhack_theme_slug_widgets_init' );

function get_content( $name = null ) {
    $templates = array();
    $name      = (string) $name;
    if ( '' !== $name ) {
        $templates[] = "content_{$name}.php";
    }
    $templates[] = 'content.php';
    locate_template( $templates, true, false);
}

function get_weibo( $name = null ) {
    $templates = array();
    $name      = (string) $name;
    if ( '' !== $name ) {
        $templates[] = "weibo_{$name}.php";
    }
    $templates[] = 'weibo.php';
    locate_template( $templates, true, false);
}

add_action( 'after_setup_theme', 'theme_slug_setup' );

function theme_slug_setup() {
    add_theme_support( 'title-tag' );
}

function change_admin_style() {
    wp_enqueue_script( 'change_admin', get_template_directory_uri() . '/js/wp_admin_function.js', array('jquery') );
}
add_action( 'admin_enqueue_scripts', 'change_admin_style' );

//更改comment的input顺序
function change_fields_order( $fields ) {
    $comment_field = $fields['comment'];
    $author_field = $fields['author'];
    $email_field = $fields['email'];
    $url_field = $fields['url'];
    $cookies_field = $fields['cookies'];
    unset( $fields['comment'] );
    unset( $fields['author'] );
    unset( $fields['email'] );
    unset( $fields['url'] );
    unset( $fields['cookies'] );
    // the order of fields is the order below, change it as needed:
    $fields['author'] = $author_field;
    $fields['email'] = $email_field;
    $fields['url'] = $url_field;
    $fields['comment'] = $comment_field;
    $fields['cookies'] = $cookies_field;
    // done ordering, now return the fields:
    return $fields;
}
add_filter( 'comment_form_fields', 'change_fields_order' );
