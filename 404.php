
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css" type="text/css" media="screen" />
<script>
	window.onload = function(){
		setTimeout(function(){window.location.href="https://www.redonleft.com";},10000);
	};
</script>
    <?php wp_head(); ?>
</head>
<body >
<!-- page wrap -->
<div id="page"<?php if(!is_page_template('page-nosidebar.php')) { ?> class="with-sidebar"<?php } ?>>
	<div id="header">
		<div id="logoborder">
			<div id="logoright">
				<div id="displayr">
					<div id="name">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
					</div>
					<div class="info">
						<?php bloginfo( 'description' ); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<style>
		h1{
			font-size: 40px;
			text-align: center;
			margin-top: 20%;
		}
	</style>
	<div id="border">
		<h1>这里是404错误页面<br />显示本页意味着你请求的页面不存在<br />本页将在10秒后跳转至主页</h1>
	</div>
</div>	
</body>
</html>