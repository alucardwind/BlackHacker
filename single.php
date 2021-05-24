<?php get_header(); ?>
<body>
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
    <!-- single -->
    <div id="border">
        <div class="mask-main">
            <div class="mask-left">
                <div id="show_large_image"></div>
                <!-- first column -->
                <div class="col1">
                        <?php while (have_posts()) : the_post(); ?>
                            <!-- post -->
                            <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
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
                                            <?php comments_template('/comments.php', true); ?>
                                        </div>
                                        <canvas id="postwords_right_single" width="88"></canvas>
                                    </div>
                                    <script>

                                    </script>
                                    <div id="date_single">
                                        <canvas id="datei_right_single"></canvas>
                                        <div id="datei_single">
                                            <strong><?php the_author(); ?></strong>发表于<?php the_time('Y.m.jS') ?>
                                        </div>
                                        <canvas id="datei_left_single" width="1202" height="82"></canvas>
                                        <canvas id="datei_bottom_single" width="2064" height="164"></canvas>
                                    </div>
                                    <!-- clearfix -->
                                </div>
                                <!-- /post -->
                            </div>
                        <?php endwhile; // end of the loop. ?>
                    <script>
                        var page_width = document.querySelector("body").offsetWidth;
                        gallery_fix();
                        find_point_img();
                    </script>
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