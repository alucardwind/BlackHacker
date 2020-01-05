<?php get_header(); ?>
<!-- main page block -->
<div id="border">
    <div class="mask-main">
        <div class="mask-left">
            <!-- first column -->
            <?php include 'sidebar_mobile.php'; ?>
            <div id="col1" class="col1">
                <script type='text/javascript'>
                    var page_width = document.querySelector("body").offsetWidth;
                    var yes;
                    var yes_thin;
                    if (page_width >= 1871) {
                        yes = 1;
                    } else {
                        yes = 0;
                    }
                    if (page_width < 1000) {
                        yes_thin = 1;
                    } else {
                        yes_thin = 0;
                    }
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

                    var check_name = "page_width=";
                    var co_array = document.cookie.split(';');
                    var check_same = false;
                    for (var i = 0; i < co_array.length; i++) {
                        var co = co_array[i].trim();
                        if (co.indexOf(check_name) == 0) {
                            var check_width = co.substring(check_name.length, co.length);
                            if (check_width != page_width) {
                                document.cookie = "width_bool=" + yes;
                                document.cookie = "page_width=" + page_width;
                                console.log(co_array);
                                location.reload(true);
                            } else {
                                check_same = true;
                                break;
                            }
                        }
                    }
                    if (!check_same) {
                        document.cookie = "width_bool=" + yes;
                        document.cookie = "page_width=" + page_width;
                        location.reload(true);
                    }
                </script>
                <div id="fitchrome">
                    <div id="button-border">
                        <div id="button-out" class="0"><a>Open Page</a></div>
                        <canvas id="button_out_right" width="100" height="120"></canvas>
                        <div id="button-in" class="0"><a>Close Page</a></div>
                        <canvas id="button_out_left" width="150" height="120"></canvas>
                        <?php wp_nav_menu(array('theme_location' => 'primary', 'menu_class' => 'nav-menu')); ?>
                        <canvas id="nav_menu_left" width="200" height="60"></canvas>
                    </div>
                </div> <!-- 防止chrome浏览器错位 -->
                <?php $num = 0;
                $con3_yes = 0; ?>
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
							<input type='number' name='bili_av' value='" . $bili_av . "' />
							<input type='submit' value='提交AV号' /><br />
							这里所展示的是我近期很喜欢的B站视频，可以通过提交AV号变更视频
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
                        //include 'content.php';
                        get_content();
                        if ($con3_yes == 0) {
                            if ($num == 3 or $num == 6) {
                                echo " </div> ";
                            }
                        } else {
                            if ($num == 2 or $num == 4 or $num == 6) {
                                echo " </div> ";
                            }
                        }
                        ?>
                        <!-- /post -->
                    <?php endwhile; ?>
                <?php endif; ?>
                <!-- rizhi -->
                <div id="last"></div>
            </div>
            <!-- col1 -->
            <?php get_sidebar(); ?>
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