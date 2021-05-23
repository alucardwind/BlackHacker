<?php
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
session_start();
require 'saetv2.ex.class.php'
?>

<html <?php language_attributes(); ?>>
<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    <!-- 加载js库 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
    <!-- require MetingJS -->
    <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
    <!-- require APlayer -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
    <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
    <!-- 加载主题使用js -->
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/blackHackFunction.js"></script>
    <!-- 加载css -->
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/style.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/mobile.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/ajax.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/weibo.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/LWA_plugin_style.css" type="text/css" media="screen"/>
    <!-- 更新APlayer CSS-->
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/aplayer.css" type="text/css" media="screen"/>
    <?php wp_head(); ?>
</head>

<!-- page wrap -->
