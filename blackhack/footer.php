<?php
rol_player(array('type' => 'netease')); 
?>
<script>
    if(yes_thin == 1){
        var body = document.querySelector("body");
        $(body).css("background","none");
        var page = document.querySelector("#page");
        $(page).css("width","533px");
        var mask_main = document.querySelector(".mask-main");
        $(mask_main).css("width","533px");
        var mask_left = document.querySelector(".mask-left");
        $(mask_left).css("width","533px");
        var col1 = document.querySelector(".col1");
        $(col1).css("width","533px");
        var logoright = document.querySelector("#logoright");
        $(logoright).css("margin-left","0");
        var logoleft = document.querySelector("#logoleft");
        $(logoleft).css("padding-left","0");
        var nav_menu = document.querySelector(".nav-menu");
        $(nav_menu).css("display","none");
        var sticky = document.querySelector(".sticky");
        $(sticky).css("display","none");
        var col2 = document.querySelector(".col2");
        $(col2).css("display","none");
        var to_right_buttom = document.querySelector("#to_right_buttom");
        $(to_right_buttom).css("display","block");
    }
</script>
