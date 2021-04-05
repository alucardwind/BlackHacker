<?php get_header(); ?>

<style>
    .postborder {
        display: block;
        width: auto;
    }

    .nav-menu li {
        display: block;
    }

    .col3 {
        float: right;
    }

</style>

<!-- page -->
<div id="border">
    <div class="mask-main">
        <div class="mask-left">
            <!-- first column -->
            <div class="col1">
                <div id="rizhi">
                    <div id="fitchrome">
                        <div id="button-border">
                            <canvas id="button_out_right" width="100" height="120" style="display: block"></canvas>
                            <canvas id="button_out_left" width="150" height="120" style="display: block"></canvas>
                            <?php wp_nav_menu(array('theme_location' => 'primary', 'menu_class' => 'nav-menu')); ?>
                            <canvas id="nav_menu_left" width="200" height="60" style="display: block"></canvas>
                        </div>
                    </div>

                    <?php while (have_posts()) : the_post(); ?>

                        <!-- post -->

                        <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                            <div id="pcf">
                                <div class="clearfix">
                                    <div id="title_single">
                                        <canvas id="title_right_single" height="94" width="1000"></canvas>
                                        <a id="title_a_single" href="<?php the_permalink() ?>" rel="bookmark"
                                           title="进入单页的 <?php the_title(); ?>"><?php the_title(); ?></a>
                                        <canvas id="title_left_single" height="94" width="100"></canvas>
                                        <canvas id="date1_right_single" height="64" width="260"></canvas>
                                        <div id="date1_single">
                                            <?php the_category(' ') ?><?php comments_popup_link(__('没有评论','blackhack'), __('包含1个评论','blackhack'), __('包含% 个评论','blackhack'), '', __('不允许评论','blackhack')); ?><?php edit_post_link(__('编辑','blackhack'), ''); ?>
                                        </div>
                                        <canvas id="date1_left_single" height="64" width="1163"></canvas>
                                    </div>

                                    <div class="postborder">
                                        <canvas id="postwords_left_single" width="57"></canvas>
                                        <div class="postwords single_postwords">
                                            <?php the_content('...点这里浏览全文 »'); ?>
                                            <!-- 为日志中图片撑出足够高度 -->
                                            <?php comments_template('', true); ?>
                                        </div>
                                        <canvas id="postwords_right_single" width="88"></canvas>
                                    </div>
                                    <script>
                                        var figure_array = document.getElementsByClassName('wp-block-image');
                                        var figure_width;
                                        var figure_height;
                                        var img;
                                        var img_width;
                                        var img_height;
                                        var bili;
                                        if (figure_array.length > 0) {
                                            for (var i = 0; i < figure_array.length; i++) {
                                                img = figure_array[i].querySelector('figure img');
                                                img_width = img.naturalWidth;
                                                if (img_width !== 0) {
                                                    img_height = img.naturalHeight;
                                                    bili = img_height / img_width;
                                                    figure_width = figure_array[i].offsetWidth;
                                                    if (img_width > figure_width) {
                                                        figure_height = figure_width * bili;
                                                        $(img).height(figure_height);
                                                        figure_width = figure_width - 20;
                                                        $(img).width(figure_width);
                                                    }
                                                }
                                            }
                                        }
                                        load_time();
                                    </script>
                                    <div id="date_single">
                                        <canvas id="datei_right_single"></canvas>
                                        <div id="datei_single">
                                            <strong><?php the_author(); ?></strong>发表于<?php the_time('Y.m.jS') ?>
                                        </div>
                                        <canvas id="datei_left_single" width="1202" height="82"></canvas>
                                        <canvas id="datei_bottom_single" width="2064" height="164"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /post -->
                    <?php endwhile; ?>
                    <!-- rizhi -->
                    <script>
                        var page_width = document.querySelector("body").offsetWidth;
                        gallery_fix();
                        find_point_img();
                    </script>
                </div>
            </div>
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