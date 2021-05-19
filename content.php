<div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >
    <div class="border_shadow_down"></div>
    <div class="border_shadow_content">
        <div class="title">
            <canvas class="title_right" height="88" width="218"></canvas>
            <div class="title_content">
                    <a href="<?php the_permalink() ?>" rel="bookmark"
                       title="进入单页的 <?php the_title(); ?>">
                        <?php the_title(); ?>
                    </a>
                <div class="title_background"></div>
            </div>
            <canvas class="title_left" height="88" width="98"></canvas>
            <canvas class="date1_right" height="46" width="200"></canvas>
            <div class="date1">
                <?php the_category(' '); ?><?php edit_post_link(__('编辑', 'blackhack'), ''); ?>
                <div id="zhiding"><b>置顶</b></div>
            </div>
            <canvas class="date1_left" height="46" width="124"></canvas>
        </div>

        <div class="postborder ptbder">
            <?php
            if (is_sticky()) {
                echo "<canvas id='comment_right' width='40' height='168'></canvas>";
            } else {
                echo "<canvas class='postwords_top' width='990' height='80'></canvas>";
            }
            ?>
            <div class="postwords">
                <?php the_content('...点这里浏览全文 »'); ?>
                <div class="titlep"></div>
                <div class="fitimg"></div> <!-- 为日志中图片撑出足够高度 -->
            </div>
            <?php
            if (is_sticky()) {
                echo "<canvas id='comment_left' width='60' height='360'></canvas>";
                global $withcomments;
                $withcomments = true;
                comments_template('/comments_inline.php', true);
                echo "<canvas id='postwords_left' width='166' height='170'></canvas>";
                echo "<canvas id='postwords_bottom' width='1158' height='164'></canvas>";
                echo "<canvas id='comment_bottom' width='1962' height='80'></canvas>";
            }
            ?>
        </div>

        <div class="date">
            <canvas class="date_right" width="60" height="60"></canvas>
            <div class="datei">
                <strong><?php the_author(); ?></strong>发表于<?php the_time('Y.m.jS') ?>
            </div>
            <canvas class="date_left" width="100" height="60"></canvas>
        </div>
    </div>
</div>