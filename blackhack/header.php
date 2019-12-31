<?php
session_start();
require 'vendor/autoload.php'
?>
<html>
<head>
	<title>
		<?php
		global $page, $paged;
		wp_title( '|', true, 'right' );
		bloginfo( 'name' );
		$site_description = get_bloginfo( 'description', 'display' );
		if ( $site_description && ( is_home() || is_front_page() ) )
			echo " | $site_description";
		if ( $paged >= 2 || $page >= 2 )
			echo ' | ' . sprintf( __( 'Page %s'), max( $paged, $page ) );
		?>
	</title>
    <meta name="viewport" content="width=device-width,initial-scale=0.6">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
	<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
	<script src="https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.js"></script>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/blackHackFunction.js"></script>
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/mobile.css" type="text/css" media="screen" />
	<!-- require APlayer -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
	<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
	<!-- require MetingJS -->
	<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
	<!-- 更新APlayer CSS-->
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/aplayer.css" type="text/css" media="screen" />	
	<?php
	if(is_singular()){
		echo "<script src='".esc_url( get_template_directory_uri() )."/js/s_content_Function.js'></script>";
	}
	else{
		echo "<script src='".esc_url( get_template_directory_uri() )."/js/m_content_Function.js'></script>";
	}
	?>
	<!--<script src="https://kit.fontawesome.com/e9a2b0295c.js"></script>-->
	<script src="https://cdn.bootcss.com/font-awesome/5.10.0-12/js/all.min.js"></script>
	<script>
		$(document).ready(function () {

			$("#button-out").click(function () {
				var runout = new runEffectout();
			});

			$("#button-in").click(function () {
				var runin = new runEffectin();
			});

			var title_a = document.querySelectorAll('#title a');
			for(let auto_i=0; auto_i<title_a.length; auto_i++){
				$(title_a[auto_i]).hover(function(){
					title_hover(title_a[auto_i]);
				});
			}
        });
	</script>
</head>
<body >
<!-- page wrap -->
<div id="page" <?php if(!is_page_template( 'page-nosidebar.php')) { ?> class="with-sidebar"<?php } ?>>
	<div id="header">
		<div id="logoborder">
			<canvas id="left_top" width="120" height="120"></canvas>
			<div id="logoleft">
				<canvas class="logo_left titlel" width="280" height="200"></canvas>
				<div id="displayl">
					<div id="name">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
					</div>
					<div class="info">
						<?php bloginfo( 'description' ); ?>
					</div>
				</div>
				<canvas class="logo_right titlel" width="80" height="168"></canvas>
			</div>
			<div id="logoright">
				<canvas class="logo_left titler" width="280" height="200"></canvas>
				<div id="displayr">
					<div id="name">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
					</div>
					<div class="info">
						<?php bloginfo( 'description' ); ?>
					</div>
				</div>
				<canvas class="logo_right titler" width="80" height="168"></canvas>
			</div>
		</div>
	</div>