<?php get_header();?>
  <!-- main page block -->
<div id="border">
    <div class="mask-main">
      <div class="mask-left">  
          <!-- first column -->          
          <div id="col1" class="col1">          
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
                  <?php $num=0; $con3_yes = 0;?>
                  <?php if (have_posts()) : ?>
                  <?php while (have_posts()) : the_post(); ?>
                  <!-- post -->
					
                   <?php 
			  if($_GET['bili_av']){
				  $bili_av = $_GET['bili_av'];
			  }
			  else{
				  $bili_av = get_option('bilibili_num');
			  }
			  $change_av = "<form action='index.php' method='get'>
							<input type='number' name='bili_av' value='".$bili_av."' />
							<input type='submit' value='提交AV号' /><br />
							这里所展示的是我近期很喜欢的B站视频，可以通过提交AV号变更视频
							</form></div>";
				   $num++;
				   if ( is_sticky() ) {
				   	$num--;
				   }
				   $con3_yes = $_COOKIE["width_bool"];
					if ($con3_yes == 0) {
						if ( $num == 1 ) {
							echo "<div id='con1'><div id='bili_player'>";
							rol_player(array('type' => 'bilibili'));
							echo $change_av;
						} 
						elseif ( $num == 4 ) {echo "<div id='con2'> ";}
					} 
					else {
						if ( $num == 1 ) {
							echo "<div id='con1'><div id='bili_player'>";
							rol_player(array('type' => 'bilibili'));
							echo $change_av;
						} 
						elseif ( $num == 3 ) {echo "<div id='con2'> ";}
						elseif ( $num == 5 ) {echo "<div id='con3'> ";}
					}  
				   ?>
			  
                   <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >                
                        <div id="title">
							<canvas class="title_right" height="88" width="218"></canvas>
							<a class="title_light" href="<?php the_permalink() ?>" rel="bookmark" title="进入单页的 <?php the_title(); ?>">
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
                   <?php
                   if ($con3_yes == 0) {
                   	if ( $num == 3 or $num == 6 ) {
                   		echo " </div> ";
                   	}
                   } else {
                   	if ( $num == 2 or $num == 4 or $num == 6 ) {
                   		echo " </div> ";
                   	}
                   }
                   ?>
                  <!-- /post -->
                  <?php endwhile; ?>
                  <?php endif; ?>
              <!-- rizhi -->
              <div id="last"></div> 
          </div>
          <!-- col1 -->
          <?php get_sidebar(); ?>
      </div>
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