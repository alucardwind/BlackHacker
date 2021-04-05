
<?php
$img_src = $_GET["img_src"];
$ajax_img_width = $_GET["imgwidth"];
$ajax_img_height = $_GET["imgheight"];
echo "<button id='ajax_img_close' onclick='close_ajax_img()'><i class='far fa-times-circle'></i></button>
<br>
<img id='ajax_img' src='".$img_src."' width='".$ajax_img_width."' height='".$ajax_img_height."'>";
?>
