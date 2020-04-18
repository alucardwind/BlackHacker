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
?>