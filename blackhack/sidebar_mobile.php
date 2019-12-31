<div id="col3" class="move_left">
    <div id="col3_block">
        <div id="col3_con1" class="col3_con1_display_block">
            <canvas class="mobile_sidebar_up" width="460" height="40"></canvas>
            <ul id="sidebar_mobile">
                <?php if ( !function_exists('dynamic_sidebar')
                    || !dynamic_sidebar() ) : ?>
                <?php endif; ?>
                <br clear="all"/>
                <?php page_navi(array(
                    'items' => 7,
                    'prev_label' => '上一页',
                    'next_label' => '下一页',
                    'first_label' => '首页',
                    'last_label' => '末页',
                    'show_num' => true,
                    'num_position' => 'after'
                ));
                ?>
            </ul>
            <canvas class="mobile_sidebar_down" width="460" height="40"></canvas>
        </div>
        <div id="col3_con2" class="col3_con2_display_none">
            <canvas class="mobile_sidebar_up" width="460" height="40"></canvas>
            <div id="pagebar_mobile"><?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu_col3' ) ); ?></div>
            <canvas class="mobile_sidebar_down" width="460" height="40"></canvas>
        </div>
    </div>
    <div id="to_right_buttom">
        <canvas class="mobile_button_up" width="86" height="86"></canvas>
        <div class="mobile_buttom_content">侧<br>边<br>栏</div>
        <canvas class="mobile_button_down" width="86" height="86"></canvas>
    </div>
    <div id="page_to_right_buttom">
        <canvas class="mobile_button_up" width="86" height="86"></canvas>
        <div class="mobile_buttom_content">页<br>面<br>栏</div>
        <canvas class="mobile_button_down" width="86" height="86"></canvas>
    </div>
</div>

