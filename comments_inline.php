<?php 
if ( post_password_required() ) {
	return;
}
?>

<!-- You can start editing here. -->

<div id="comments_inline" class="comments">

<?php if (comments_open()) : ?>

	<div class="comments-title"><h3 id="respond">&nbsp;想说点什么吗？</h3>
        <br>
&nbsp;(若评论发表后未显示请耐心等待审核)</div>
 
	
	<?php if (get_option('comment_registration') && !$user_ID ) : ?>
		<p id="comments-blocked">您必须 <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=
		<?php the_permalink(); ?>">登陆</a> 发表评论.</p>
	<?php else : ?>

	<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">

	<?php if ($user_ID) : ?>
	
	<p>&nbsp;您的ID是 <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php">
		<?php echo $user_identity; ?></a>.&nbsp; <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?action=logout" title="Log out of this account">登出</a>.
	</p>
	<p><br \><br \><br \>&nbsp;</p>	
<?php else : ?>	
	
		<p><input type="text" name="author" id="author" value="<?php echo $comment_author; ?>" size="15" tabindex="1" />
		<label for="author">&nbsp;*ID<?php if ($req) _e('','blackhack'); ?>
		</label></p>
				
		<p>
		<input type="text" name="email" id="email" value="<?php echo $comment_author_email; ?>" tabindex="2" size="15" />
		<label for="email">&nbsp;*E-mail<?php if ($req) _e('','blackhack'); ?>
		</label></p>		
		
		<p>
		<input type="text" name="url" id="url" value="<?php echo $comment_author_url; ?>" size="15" tabindex="3" />
        <label for="url">&nbsp;Website
		</label></p>
	
	<?php endif; ?>

		<p><textarea name="comment" id="comment" cols="30" rows="3" tabindex="4"></textarea></p>

		<p><input name="submit" type="submit" id="submit" tabindex="5" value="发表评论" />
		<input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" /></p>
		<p></p>
	
	<?php do_action('comment_form', $post->ID); ?>

	</form>

<?php endif; // If registration required and not logged in ?>

<?php else : // Comments are closed ?>
	<p id="comments-closed">别找了，这篇文章不允许评论</p>
<?php endif; ?></div>