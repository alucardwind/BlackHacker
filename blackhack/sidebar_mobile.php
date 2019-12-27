<div id="col3" class="move_left">
    <div id="col3_con1">
        <canvas id="mobile_sidebar_up"width="460" height="40"></canvas>
        <ul id="sidebar_moble">
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
        <canvas id="mobile_sidebar_down"width="460" height="40"></canvas>
    </div>
    <div id="to_right_buttom">
        <canvas id="mobile_button_up" width="86" height="86"></canvas>
        <div id="mobile_buttom_content">侧<br>边<br>栏</div>
        <canvas id="mobile_button_down" width="86" height="86"></canvas>
    </div>
</div>

