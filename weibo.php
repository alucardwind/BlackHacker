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
    $time_now = $hour_now + $min_now + floatval(date("s"));//现在时间换算成秒
    $f = fopen($weibo_time_add,"r");
    $read_string = fread($f,filesize($weibo_time_add));
    fclose($f);
    $json_read = json_decode($read_string,true);
    if($date_now != $json_read['date']){
        $json_read['already_hits']=0;
    }
    $json_read['date']=$date_now;
    $can_hits = floor($time_now/960);//微博API规定每天获取次数上限为100，为防止异常情况，我将上限设定为90次。即每960秒可增加一次获取次数。这里计算出到现在时刻，一共可以获取多少次
    $temp_hits = $json_read['already_hits']+1;//从json中获取已经获取的次数，加上本次运行的一次
    $can_hits_real = $can_hits - $temp_hits;//前两者相减获得实际剩余的获取次数
    if($can_hits == 0){
        $can_hits_real = 0;
        $ip_width = 0;
    }
    else{
        $ip_width = $temp_hits / $can_hits * 121;//这里为下面的table中的div背景计算长度，为模拟进度条。这个进度条为表示已经请求的次数和允许请求的次数比值
    }
    $user_width = ($time_now/960 - $can_hits)*121;//这个进度条为表示离请求次数增加还剩多久
    $percent_float = ($time_now/960 - $can_hits) * floatval(100);//以百分数展示还剩多久
    $percent = round($percent_float,0)."%";//以百分数展示还剩多久
    if($can_hits_real >= 1){
        $c = new SaeTClientV2( '1916930258', 'bcfb3ba2c7fed73817113a63f3167376', '2.008N8BxByHPjFCa6f69c4d0f0xksxe' );
        $json_read['already_hits']++;
        $ms = $c->home_timeline(1,5,0,0,0,0);
        $limit =$c->rate_limit_status();
        echo "<table><tr><td>剩余请求次数</td><td>请求增速</td></tr><tr><td><div id='re_ip_hit' style='width:". $ip_width."px;'>".$can_hits_real."</div></td><td><div id='re_user_hit' style='width:".$user_width."px;'>".$percent."</div></td></tr></table>";
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
        echo "<table id='touch_limit'><tr><td>剩余请求次数</td><td>请求增速</td></tr><tr><td><div id='re_ip_hit_red' style='width:". $ip_width."px;'>".$can_hits_real."</div></td><td><div id='re_user_hit_red' style='width:".$user_width."px;'>".$percent."</div></td></tr></table>";
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

            echo "<div class='weibo_user'><i class='fab fa-weibo'></i> " . $item[ 'user' ][ 'screen_name' ] . "</div>";
            echo "<canvas class='weibo_user_left' width='80' height ='48'></canvas>";
            echo "</div>";
        }
    }
    if ( $ms[ 'error' ] ) {
        echo "错误：" . $ms[ 'error' ] . '<br />';
        echo "错误代码：" . $ms[ 'error_code' ] . '<br />';
    }
    ?>
</div>