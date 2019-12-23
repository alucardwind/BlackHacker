 <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> >                
                    <div class="clearfix">
                        <div id="title">
                        <a id="truetitle" href="<?php the_permalink() ?>" rel="bookmark" title="进入单页的 <?php the_title(); ?>"><?php the_title(); ?></a>
                        <div id="tbl"></div>  
                        <div id="date1">
                        <?php the_category(' ');?><?php edit_post_link(__('编辑'),''); ?><div id="zhiding"><b>置顶</b></div>
                        <div id="dbl"></div>
                        </div>                   
                        </div>
                        <?php
						$long=mb_strlen(get_the_title());
						$long+=strlen(get_the_title());
						$long/=2;
						$long*=7.5;
						$category = get_the_category();
						for($x=0; $x<count($category); $x++){
							if($category[$x]->cat_name != NULL){
								$long1+=mb_strlen($category[$x]->cat_name);
								}
							}
						$long1*=13;
						$long+=$long1;
						$long+=56;
						$long+=126;
						if($long < 260){$long=260;}
						?>
                        <div class="postborder">
                          <div class="postwords"> 
                          <?php the_content('...点这里浏览全文 »'); ?>
                          <span id="prompt"></span>
                          <div id="titlep"></div>
                          <div id="fitimg"></div> <!-- 为日志中图片撑出足够高度 -->
                          <?php 
						  if(is_sticky()){ 
						  global $withcomments; 
						  $withcomments = true; 
						  comments_template( '/comments_inline.php', true );}
						  ?>  
                          </div>
                        </div>
                        <div id="date">
                        <span id="dateb" style="width:<?php echo $long . "px"; ?>;">
                        <span id="datei">
                        <strong><?php the_author(); ?></strong>发表于<?php the_time('Y.m.jS') ?>
                        </span>
                        </span>
                        </div>
                    </div>
 </div>