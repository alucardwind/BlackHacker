<?php get_header(); ?>
<style>
    .postborder {
        display: block;
        width: auto;
    }

    #sidebar li ul {
        display: block;
    }

    #sidebar li select {
        display: block;
    }

    .avatar_container {
        display: block;
    }
</style>
<!-- main page block -->
<div id="border">
    <div class="mask-main">
        <div class="mask-left">
            <!-- first column -->
            <div class="col1">
                <div id="rizhi">
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
                                        <?php the_category(' ') ?><?php comments_popup_link(__('没有评论'), __('包含1个评论'), __('包含% 个评论'), '', __('不允许评论')); ?><?php edit_post_link(__('编辑'), ''); ?>
                                    </div>
                                    <canvas id="date1_left_single" height="64" width="1163"></canvas>
                                </div>

                                <div class="postborder">
                                    <canvas id="postwords_left_single" width="117"></canvas>
                                    <div class="postwords single_postwords">
                                        <?php the_content('...点这里浏览全文 »'); ?>
                                        <!-- 为日志中图片撑出足够高度 -->
                                        <?php comments_template('', true); ?>
                                    </div>
                                    <canvas id="postwords_right_single" width="176"></canvas>
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
                    <!-- rizhi -->
                </div>
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