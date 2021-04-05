<?php
rol_player(array('type' => 'netease')); 
?>
<script>
    if(yes_thin == 1){
        $("body").css("background","none");
        $("#page").css("width","533px");
        $(".mask-main").css("width","533px");
        $(".mask-left").css("width","533px");
        $(".col1").css("width","533px");
        $("#logoright").css("margin-left","0");
        $("#logoleft").css("padding-left","0");
        $(".nav-menu").css("display","none");
        $(".sticky").css("display","none");
        $(".col2").css("display","none");
        $("#to_right_buttom").css("display","block");
        $("#page_to_right_buttom").css("display","block");
    }
    if(yes_middle == 1){
        $(".sticky").css("display","none");
        var cha = 1349 - page_width;
        var old_width = document.getElementById("col1").offsetWidth;
        var new_width = old_width - cha;
        $(".col1").css("width","784px");
        $(".nav-menu").css("display","none");
        $(".nav-menu_yes_middle").css("display","block");
    }

    $("#button-out").click(function () {
        var runout = new runEffectout();
    });

    $("#button-in").click(function () {
        var runin = new runEffectin();
    });

    title_hover();
    border_loop();
    setInterval(border_loop,3300);
</script>
<?php
if (is_singular()) {
	echo "<script src='" . esc_url(get_template_directory_uri()) . "/js/s_content_Function.js'></script>";
} else {
	echo "<script src='" . esc_url(get_template_directory_uri()) . "/js/m_content_Function.js'></script>";
}
?>