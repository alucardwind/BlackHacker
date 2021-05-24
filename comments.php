<?php 
if ( post_password_required() ) {
	return;
}
?>
<div class="comments">
<?php if (comments_open()) : ?>

    <?php comment_form(); ?>

    <?php if ($comments) : ?>
        <h3 id="comments">关于&nbsp;&nbsp;"<?php the_title(); ?>"&nbsp;&nbsp;有如下篇评论</h3>
        <ol class="commentlist" style="list-style-type: none;">
            <?php wp_list_comments();?>
        </ol>
    <?php else :
        /* No comments at all means a simple message instead */
        ?>

    <?php endif; ?>

<?php else : ?>
	<p id="comments-closed">别找了，这篇文章不允许评论</p>
<?php endif; ?>
</div>