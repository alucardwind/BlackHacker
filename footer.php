<?php
rol_player(array('type' => 'netease'));
if(is_page()){
    echo "<style>
        .nav-menu li {
            display: block;
        }
    </style>";
}
if (is_singular()) {
    echo "<link rel='stylesheet' href='" . esc_url( get_template_directory_uri() ) . "/css/singular_style.css' type='text/css' media='screen'/>";
    echo "<script src='" . esc_url(get_template_directory_uri()) . "/js/s_content_Function.js'></script>";
} else {
    echo "<script src='" . esc_url(get_template_directory_uri()) . "/js/m_content_Function.js'></script>";
}
wp_footer();
?>
<script>
    if(yes_thin == 1){
        //此处修复需要在宽屏模式CSS加载后进行替代，需要在上方JS后面
        $("body").css("background","none");
        $("#page").css("width","533px");
        $(".mask-main").css("width","533px");
        $(".mask-left").css("width","533px");
        $(".col1").css("width","533px");
        //$("#logoright").css("margin-left","0");
        $('#logoborder').css("height",'auto');
        $(".nav-menu").css('display','none');
        $(".sticky").remove();
        $(".col2").css('display','none');
        $("#to_right_buttom").css("display","block");
        $("#page_to_right_buttom").css("display","block");
    }
    if(yes_middle == 1){
        $(".sticky").css("display","none");
        $(".nav-menu").css("display","none");
        $(".nav-menu_yes_middle").css("display","block");
        $(".col1").css("width","533px");
        let page_width = $('#page').width();
        let mask_main_width = $('.mask-main').width();
        let mask_main_left = (page_width - mask_main_width) / 2;
        if (mask_main_left < 0){
            mask_main_left = 0;
        }
        $('.mask-main').css('margin-left',mask_main_left+'px');
    }
    if(yes == 0 && yes_thin == 0 && yes_middle == 0){
        let page_width = $('#page').width();
        let mask_main_width = $('.mask-main').width();
        let mask_main_left = (page_width - mask_main_width) / 2;
        if (mask_main_left < 0){
            mask_main_left = 0;
        }
        $('.mask-main').css('margin-left',mask_main_left+'px');
    }
    $("#button-out").click(function () {
        let runout = runEffectout();
    });

    $("#button-in").click(function () {
        let runin = runEffectin();
    });

    title_hover();

    //展开网页按钮的特效，以及循环特效。还加入了在网页切换时的动画处理，以保证动画在网页切换时不会出错
    border_loop();
    let border_loop_start = setInterval(border_loop,3300);
    document.addEventListener("visibilitychange",function () {
        if (document.visibilityState == 'hidden'){
            clearInterval(border_loop_start);
            let border_top = $('.border_top');
            let border_right = $('.border_right');
            let border_bottom = $('.border_bottom');
            let border_left = $('.border_left');
            border_top.stop(true,true);
            border_right.stop(true,true);
            border_bottom.stop(true,true);
            border_left.stop(true,true);
            border_top.css({
                right: '100%',
                left: '-100px'
            });
            border_left.css({
                top: '100%',
                bottom: '-40px'
            });
            border_right.css({
                top: '-40px',
                bottom: '100%'
            });
            border_bottom.css({
                right: '-100px',
                left: '100%'
            });
        }
        else {
            border_loop();
            border_loop_start = setInterval(border_loop,3300);
        }
    });

    //为元素挂上阴影并开启特效
    different_start();
    // fix_page_nav_href();
    //网页加载完毕后载入
    $(function () {

    });
</script>