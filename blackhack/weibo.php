<li id="weibo_li"><h2 class="widgettitle">微博内容</h2></li>
<div id="weibo">
    <?php
    function http_to_null($url){
        $new_url_after = strstr($url,"//");
        if(!$new_url_after){
            return $url;
        }
        else{
            $new_url = "https:".$new_url_after;
            return $new_url_after;
        }
    }
    $weibo_content_add = "wp-content/themes/blackhack/json/weibo_content.json";
    $weibo_time_add = "wp-content/themes/blackhack/json/weibo_time.json";
    $weibo_face = "wp-content/themes/blackhack/json/weibo_emotions.json";
    date_default_timezone_set("Asia/Shanghai");
    $date_now = date("Ymd");
    $hour_now = floatval(date("H"))*3600;
    $min_now = floatval(date("i"))*60;
    $time_now = $hour_now + $min_now + floatval(date("s"));
    $f = fopen($weibo_time_add,"r");
    $read_string = fread($f,filesize($weibo_time_add));
    fclose($f);
    $json_read = json_decode($read_string,true);
    if($date_now != $json_read['date']){
        $json_read['already_hits']=0;
    }
    $json_read['date']=$date_now;
    $can_hits = floor($time_now/960);
    $temp_hits = $json_read['already_hits']+1;
    $can_hits_real = $can_hits - $temp_hits;
    if($can_hits_real >= 1){
        $c = new SaeTClientV2( '1916930258', 'bcfb3ba2c7fed73817113a63f3167376', '2.008N8BxByHPjFCa6f69c4d0f0xksxe' );
        $json_read['already_hits']++;
        $ms = $c->home_timeline(1,5,0,0,0,0);
        $limit =$c->rate_limit_status();
        $ip_width = $limit['remaining_ip_hits']/$limit['ip_limit']*121;
        $user_width = $limit['remaining_user_hits']/$limit['user_limit']*121;
        echo "<table><tr><td  colspan='2'>剩余请求次数：".$can_hits_real."</td></tr><tr><td>Remaining Ip Hits</td><td>Remaining User Hits</td></tr><tr><td><div id='re_ip_hit' style='width:". $ip_width."px;'>".$limit['remaining_ip_hits']."</div></td><td><div id='re_user_hit' style='width:".$user_width."px;'>".$limit['remaining_user_hits']."</div></td></tr></table><br />";
        $f = fopen($weibo_time_add,"w");
        fwrite($f,json_encode($json_read));
        fclose($f);
        if ( !$ms[ 'error' ] ) {
            $f = fopen($weibo_content_add,"w");
            fwrite($f,json_encode($ms['statuses']));
            fclose($f);
        }
        else{
            $f = fopen($weibo_content_add,"r");
            $read_string = fread($f,filesize($weibo_content_add));
            fclose($f);
            $json_read = json_decode($read_string,true);
            $ms['statuses'] = $json_read;
        }
    }
    else{
        echo "<table id='touch_limit'><tr><td>剩余请求次数：".$can_hits_real."</td></tr><tr><td>微博API限制函数激活<br />以下内容来自前期访问缓存</td></tr></table>";
        $f = fopen($weibo_time_add,"w");
        fwrite($f,json_encode($json_read));
        fclose($f);
        $f = fopen($weibo_content_add,"r");
        $read_string = fread($f,filesize($weibo_content_add));
        fclose($f);
        $json_read = json_decode($read_string,true);
        $ms['statuses'] = $json_read;
    }
    if ( is_array( $ms[ 'statuses' ] ) ) {
        foreach ( $ms[ 'statuses' ] as $item ) {
            echo "<div class='weibo_line toggle_display'><div class='weibo_text'>";
            print_r( $item[ 'text' ] );
            echo "</div>";
            if($item['retweeted_status']){
                echo "<div class = 'weibo_yinyong'>引用自<br />";
                echo $item['retweeted_status']['user']['screen_name']."<br />";
                echo $item['retweeted_status']['text']."<br />";
                /*if ( $item['retweeted_status'][ 'thumbnail_pic' ] ) {
                    foreach ( $item['retweeted_status'][ 'pic_urls' ] as $weibo_pic ) {
                        echo "<img src='" . $weibo_pic[ 'thumbnail_pic' ] . "' />";
                    }
                }*/
                echo "</div>";
            }
            /*if ( $item[ 'thumbnail_pic' ] ) {
                foreach ( $item[ 'pic_urls' ] as $weibo_pic ) {
                    echo "<img src='" . $weibo_pic[ 'thumbnail_pic' ] . "' />";
                }
            }*/
            echo "<br /><p class='weibo_user'>by：" . $item[ 'user' ][ 'screen_name' ] . "</p>";
            echo "<br /></div>";
        }
    }
    if ( $ms[ 'error' ] ) {
        echo "错误：" . $ms[ 'error' ] . '<br />';
        echo "错误代码：" . $ms[ 'error_code' ] . '<br />';
    }
    ?>
</div>