<?php
if ( post_password_required() ) {
	return;
}
//这是用于多日志页显示评论的独立配置
?>
<div id="comments_inline" class="comments">
    <?php comment_form(); ?>
</div>