<?php

$count = 1;
if (function_exists('register_sidebar'))
    register_sidebar(array(
        'id' => 'sidebar-1'
    ));

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
?>