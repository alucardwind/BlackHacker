<?php get_header(); ?>
<!-- index -->
<body>
<?php
if($_GET['from_site'] !=1 ){
	require_once 'cover.php';
}
?>
<div id="page" <?php if (!is_page_template('page-nosidebar.php')) { ?> class="with-sidebar"<?php } ?>>
    <div id="header">
        <div id="logoborder">
            <canvas id="left_top" width="120" height="120"></canvas>
            <div id="logoright">
                <canvas class="logo_left titler" width="280" height="200"></canvas>
                <div id="displayr">
                    <div class="name">
                        <a href="<?php echo esc_url(home_url('/')); ?>?from_site=1"
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
<div id="border">
    <div class="mask-main">
        <div class="mask-left">
            <div id="show_large_image"></div>
            <!-- first column -->
            <?php
            $col3_yes = $_COOKIE["width_thin_bool"];
            if($col3_yes == 1){
                include 'sidebar_mobile.php';
            }
            ?>
            <div id="col1" class="col1">
                <script type='text/javascript'>
                    var page_width = document.querySelector("body").offsetWidth;
                    fit_screen(page_width);
                    if (yes == 1) {
                        var page = document.querySelector("#page");
                        $(page).css("width", "1871px");
                        var mask_main = document.querySelector(".mask-main");
                        $(mask_main).css("width", "1871px");
                        var mask_left = document.querySelector(".mask-left");
                        $(mask_left).css("width", "1871px");
                        var col1 = document.querySelector(".col1");
                        $(col1).css("width", "1574px");
                    }
                    need_cookie(page_width);
                </script>
                <div id="fitchrome">
                    <div id="button-border">
                        <div id="button-out" class="0 button_border_out">
                            <span class="ui-border-element"></span>
                            <span class="border_top"></span>
                            <span class="border_right"></span>
                            <span class="">
                                <a>展开网页</a>
                            </span>
                            <span class="border_left"></span>
                            <span class="border_bottom"></span>
                        </div>
                        <canvas id="button_out_right" width="100" height="120"></canvas>
                        <div id="button-in" class="0"><a>闭合网页</a></div>
                        <canvas id="button_out_left" width="150" height="120"></canvas>
                        <?php wp_nav_menu(array('theme_location' => 'primary', 'menu_class' => 'nav-menu')); ?>
                        <canvas id="nav_menu_left" width="200" height="60"></canvas>
                    </div>
                </div> <!-- 防止chrome浏览器错位 -->
                <script>
                    nav_menu_left();
                    button_out_left();
                    button_out_right();
                </script>
                <?php
                wp_nav_menu(array('theme_location' => 'primary', 'menu_class' => 'nav-menu_yes_middle'));
                $num = 0;
                $con3_yes = 0;
                ?>
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <!-- post -->
                        <?php

                        if ($_GET['bili_av']) {
                            $bili_av = $_GET['bili_av'];
                        } else {
                            $bili_av = get_option('bilibili_num');
                        }
                        $change_av = "<form action='index.php' method='get'>
							<input type='text' name='bili_av' value='" . $bili_av . "' />
							<input type='submit' value='提交BV号' /><br />
							这里所展示的是我近期很喜欢的B站视频，可以通过提交BV号变更视频
							</form></div>";
                        $num++;
                        if (is_sticky()) {
                            $num--;
                        }
                        $con3_yes = $_COOKIE["width_bool"];
                        if ($con3_yes == 0) {
                            if ($num == 1) {
                                echo "<div id='con1'><div id='bili_player'>";
                                rol_player(array('type' => 'bilibili'));
                                echo $change_av;
                            } elseif ($num == 4) {
                                echo "<div id='con2'> ";
                            }
                        } else {
                            if ($num == 1) {
                                echo "<div id='con1'><div id='bili_player'>";
                                rol_player(array('type' => 'bilibili'));
                                echo $change_av;
                            } elseif ($num == 3) {
                                echo "<div id='con2'> ";
                            } elseif ($num == 5) {
                                echo "<div id='con3'> ";
                            }
                        }
                        get_content();
                        if ($con3_yes == 0) {
                            if ($num == 3 || $num == 6 || $num == count($posts)) {
                                echo " </div> ";
                            }
                        } else {
                            if ($num == 2 || $num == 4 || $num == 6 || $num == count($posts)) {
                                echo " </div> ";
                            }
                        }
                        ?>
                        <!-- /post -->
                    <?php endwhile; ?>
                <?php endif; ?>
                <script>
                    comment_left();
                    comment_right();
                    comment_bottom();
                    postwords_left();
                    postwords_bottom();
                    title_right();
                    title_left();
                    date1_right();
                    date1_left();
                    postwords_top();
                    date_right();
                    date_left();
                    gallery_fix();
                    find_point_img();
                </script>
                <div id="last"></div>
            </div>
            <!-- col1 -->
            <?php get_sidebar(); ?>
            <script>
                submit();
                if (sidebar_fix_bool) {
                    sidebar_fix();
                }
                sidebar_fix_h2();
            </script>
        </div>
        <!-- mask-left -->
    </div>
    <!-- mask-main -->
    <div class="clear-content"></div>
</div>
<!-- border -->

<?php get_footer(); ?>
</div>
<!-- page -->
</body>
</html>