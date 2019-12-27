<div class="col2">
	<ul id="sidebar">
	<?php if ( !function_exists('dynamic_sidebar')
	|| !dynamic_sidebar() ) : ?>	
	<?php endif; ?>
	<br clear="all"/><!--下面的块clear both无法生效，故增加前面的语句 -->
		<li id="aplayer_li"><h2 class="widgettitle">音乐播放器控制</h2></li>
		<div id="aplayer" class="toggle_display">
			播放器位于屏幕左下角<br />默认网易云音乐<br />可通过提交歌单ID变更播放列表
			<form method="get" action="index.php">
				<?php
				if($_GET['ap_num']){
					$list_num = $_GET['ap_num'];
				}
				else{
					$list_num = get_option('netease_num');;
				}
				?>
				<input type="number" name="ap_num" value="<?php echo $list_num; ?>"/>
				<input type="submit" value="提交" /><br />
			</form>
		</div>
        <?php
        include 'weibo.php';
        rol_copyright();
        ?>
	</ul>

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
</div>


