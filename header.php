<?php
session_start();
require 'vendor/autoload.php'
?>

<html <?php language_attributes(); ?>>
<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width,initial-scale=0.6">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.js"></script>
    <script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/blackHackFunction.js"></script>
    <link rel="icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo_120.png" sizes="32x32">
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/mobile.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/ajax.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/weibo.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/LWA_plugin_style.css" type="text/css" media="screen"/>
    <!-- require APlayer -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
    <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
    <!-- require MetingJS -->
    <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
    <!-- 更新APlayer CSS-->
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/aplayer.css" type="text/css" media="screen"/>
    <?php
    if (is_singular()) {
        echo "<script src='" . esc_url(get_template_directory_uri()) . "/js/s_content_Function.js'></script>";
    } else {
        echo "<script src='" . esc_url(get_template_directory_uri()) . "/js/m_content_Function.js'></script>";
    }
    ?>
    <!--<script src="https://kit.fontawesome.com/e9a2b0295c.js"></script>-->
    <script src="https://cdn.bootcss.com/font-awesome/5.10.0-12/js/all.min.js"></script>
    <script>
        $(document).ready(function () {

            $("#button-out").click(function () {
                var runout = new runEffectout();
            });

            $("#button-in").click(function () {
                var runin = new runEffectin();
            });

            title_hover();

        });
    </script>
    <?php wp_head(); ?>
</head>
<body>
<!-- page wrap -->
<div id="page" <?php if (!is_page_template('page-nosidebar.php')) { ?> class="with-sidebar"<?php } ?>>
    <div id="header">
        <div id="logoborder">
            <canvas id="left_top" width="120" height="120"></canvas>
            <div id="logoleft">
                <canvas class="logo_left titlel" width="280" height="200"></canvas>
                <div id="displayl">
                    <div class="name">
                        <a href="<?php echo esc_url(home_url('/')); ?>"
                           title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>"
                           rel="home"><?php bloginfo('name'); ?></a>
                    </div>
                    <div class="info">
                        <?php bloginfo('description'); ?>
                    </div>
                </div>
                <canvas class="logo_right titlel" width="80" height="168"></canvas>
            </div>
            <div id="logoright">
                <canvas class="logo_left titler" width="280" height="200"></canvas>
                <div id="displayr">
                    <div class="name">
                        <a href="<?php echo esc_url(home_url('/')); ?>"
                           title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>"
                           rel="home"><?php bloginfo('name'); ?></a>
                    </div>
                    <div class="info">
                        <?php bloginfo('description'); ?>
                    </div>
                </div>
                <canvas class="logo_right titler" width="80" height="168"></canvas>
            </div>
        </div>
    </div>
    <script>
        logo_right();
        logo_left();
        left_top();
    </script>