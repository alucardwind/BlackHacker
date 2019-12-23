<?php get_header();?>
  <!-- main page block -->
<div id="border">
    <div class="mask-main">
      <div class="mask-left">  
          <!-- first column -->          
          <div class="col1"> 
			<script type='text/javascript'>
				var page_width = document.querySelector("body").offsetWidth;
				var yes;
				if(page_width >= 1871){
					yes = 1;
				}
				else{
					yes = 0;
				}
				if(yes==1){
					var page = document.querySelector("#page");
					$(page).css("width","1871px");
					var mask_main = document.querySelector(".mask-main");
					$(mask_main).css("width","1871px");
					var mask_left = document.querySelector(".mask-left");
					$(mask_left).css("width","1871px");
					var col1 = document.querySelector(".col1");
					$(col1).css("width","1574px");
				}
				var check_name = "page_width=";
				var co_array = document.cookie.split(';');
				console.log(page_width);
				console.log(yes);
				console.log(co_array);
				var check_same = false;
				for(var i=0; i<co_array.length; i++){
				  var co = co_array[i].trim();
				  if(co.indexOf(check_name)==0){
					  var check_width = co.substring(check_name.length,co.length);
					  if(check_width != page_width){
						  document.cookie = "width_bool="+yes;
						  document.cookie = "page_width="+page_width;
						  console.log(co_array);
						  location.reload(true);
					  }
					  else{
						  check_same = true;
						  break;
					  }
				  }
				}
				if(!check_same){
				   document.cookie = "width_bool="+yes;
				   document.cookie = "page_width="+page_width;
				   location.reload(true);
				}
			</script>
              <div id="rizhi">
                  <div id="fitchrome">
                    <div id="button-border">
                      <div id="button-out" class="0"><a>Open Page</a></div>
					  <canvas id="button_out_right" width="100" height="120"></canvas>
					  <div id="button-in" class="0"><a>Close Page</a></div>
					  <canvas id="button_out_left" width="150" height="120"></canvas>
                      <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu' ) ); ?>
					<canvas id="nav_menu_left" width="200" height="60"></canvas>
                    </div>
                  </div> <!-- 防止chrome浏览器错位 -->
				  <?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
                  <?php /* If this is a category archive */ if (is_category()) { ?>
                  <h2 class="pagetitle"><?php printf(__('以下文章归类于 &#8216;%s&#8217;'), single_cat_title('', false)); ?></h2>
                  <?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
                  <h2 class="pagetitle"><?php printf(__('Posts Tagged &#8216;%s&#8217;'), single_tag_title('', false) ); ?></h2>
                  <?php /* If this is a daily archive */ } elseif (is_day()) { ?>
                  <h2 class="pagetitle"><?php printf(__('以下文章写于 %s|Daily archive page'), get_the_time(__('F jS, Y'))); ?></h2>
                  <?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
                  <h2 class="pagetitle"><?php printf(__('以下文章写于 %s|Monthly archive page'), get_the_time(__('F, Y'))); ?></h2>
                  <?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
                  <h2 class="pagetitle"><?php printf(__('以下文章写于 %s|Yearly archive page'), get_the_time(__('Y'))); ?></h2>
                  <?php /* If this is an author archive */ } elseif (is_author()) { ?>
                  <h2 class="pagetitle"><?php _e('Author Archive'); ?></h2>
                  <?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
                  <h2 class="pagetitle"><?php _e('Blog Archives'); ?></h2>
                  <?php } ?>
                 <?php $num=0;$con3_yes = 0;?>
                  <?php if (have_posts()) : ?>
                  <?php while (have_posts()) : the_post(); ?>
                  <!-- post -->
                   <?php 
				   $num++;
				   $con3_yes = $_COOKIE["width_bool"];
					if ($con3_yes == 0) {
						if ( $num == 1 ) {echo "<div id='con1'> ";} 
						elseif ( $num == 4 ) {echo "<div id='con2'> ";}
					} 
					else {
						if ( $num == 1 ) {echo "<div id='con1'> ";} 
						elseif ( $num == 3 ) {echo "<div id='con2'> ";}
						elseif ( $num == 5 ) {echo "<div id='con3'> ";}
					} 
				   ?>
                   <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >                
                         <div id="title" class="title_light">
							<canvas class="title_right" height="88" width="218"></canvas>
							<a href="<?php the_permalink() ?>" rel="bookmark" title="进入单页的 <?php the_title(); ?>">
								<?php the_title(); ?>
							</a>
							<canvas class="title_left" height="88" width="98"></canvas>
							<canvas class="date1_right" height="46" width="200"></canvas>
							<div id="date1">
								<?php the_category(' ');?><?php edit_post_link(__('编辑'),''); ?><div id="zhiding"><b>置顶</b></div>
							</div>
							<canvas class="date1_left" height="46" width="124"></canvas>
                        </div>
 
                         <div id="postborder" class="ptbder">
							<?php
							if(is_sticky()){
								echo "<canvas id='comment_right' width='40' height='168'></canvas>";
							}
							else{
								echo "<canvas class='postwords_top' width='990' height='80'></canvas>";
							}
							?>
							 <div class="postwords"> 
							  <?php the_content('...点这里浏览全文 »'); ?>
							  <div id="titlep"></div>
							  <div id="fitimg"></div> <!-- 为日志中图片撑出足够高度 -->
							</div>	 
							<?php
							if(is_sticky()){ 
								echo "<canvas id='comment_left' width='60' height='360'></canvas>";
								  global $withcomments; 
								  $withcomments = true; 
								  comments_template( '/comments_inline.php', true );
								echo "<canvas id='postwords_left' width='166' height='170'></canvas>";
								echo "<canvas id='postwords_bottom' width='1158' height='164'></canvas>";
								echo "<canvas id='comment_bottom' width='1962' height='80'></canvas>";
							  }
							?>
                        </div>
                        <div id="date">
							<canvas class="date_right" width="60" height="60"></canvas> 
                          <div id="datei">
                          <strong><?php the_author(); ?></strong>发表于<?php the_time('Y.m.jS') ?>
                          </div>
							<canvas class="date_left" width="100" height="60"></canvas>
                        </div>
					   
                   </div>
                   <?php if ($con3_yes == 0) {
                   	if ( $num == 3 or $num == 6 ) {echo " </div> ";}
                   } else {
                   	if ( $num == 2 or $num == 4 or $num == 6 ) {echo " </div> ";}
                   }?>
                  <!-- /post -->
                  <?php endwhile;?>
                  <?php endif;
				  if ($con3_yes == 0) {
					  if($num < 3){echo " </div> ";}
					  if($num > 3 && $num < 6){echo " </div> ";}
				  }
				  else{
					  if($num < 2){echo " </div> ";}
					  if($num > 2 && $num < 4){echo " </div> ";}
					  if($num > 4 && $num < 6){echo " </div> ";}
				  }
				  ?>
              <!-- rizhi -->    
               <div id="last"></div>   
          </div>
           <!--col1 -->
		  </div>
          <?php get_sidebar(); ?>
      
      <!-- mask-left -->
    </div>
    <!-- mask-main -->
    <div class="clear-content"></div>
</div>
<!-- border -->
<?php get_footer(); ?>
</div>
<!-- page -->
</body>
</html>