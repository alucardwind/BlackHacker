# BlackHack theme
这是一个我个人制作的wordpress主题，你可以直接进入我的网站观看效果
https://www.redonleft.com<br><br>
或者
大致长下面这个样子<br><br>
![](/screenshot1.png)
<br>
![](/screenshot.png)<br>
<br>
## 概述
再次说明：本主题是一个基于wordpress框架的个人博客主题，使用的前提是你已经拥有一个使用wordpress框架的博客网站。<br>
本主题是一个黑色科幻风格的日志文章展示主题。主题具备一个“页面展开”功能，在点击设定按钮后，整个页面才会完整展开，完整的日志和侧边栏内容才会显示出来。<br>
基于wordpress的要求，请将PHP版本升级之7.0以上，目前我的PHP测试版本是7.4.8<br>
<br>
## 使用说明
请在使用前仔细阅读<br>
https://github.com/alucardwind/blackhack/wiki 
<br>
<br>
## 插件和开源项目
主题中所使用的开源项目包括以下：<br>
<b>MetingJS</b><br>
https://github.com/metowolf/MetingJS<br>
网页音频播放器<br>
<b>redonleft_player</b><br>
https://github.com/alucardwind/redonleft_player<br>
用于将上面的播放器与wordpress相结合，可在后台直接控制播放器播放音频和视频<br>
<b>redonleft_copyright</b><br>
https://github.com/alucardwind/redonleft_copyright<br>
用于网页显示和简单的编辑网站版权信息<br>
<b>libweibo</b>×注1<br>
https://github.com/xiaosier/libweibo<br>
新浪微博开放平台php sdk<br>
<b>Font-Awesome</b><br>
https://github.com/FortAwesome/Font-Awesome<br>
可编程网络图标库<br>
<br>
主题样式表中已经包含了以下wordpress插件的样式设定<br>请自行下载这些插件<br>
<b>Prime Strategy Page Navi<br>
        <s>Sidebar Login</s>因太久不更新已经不适应现在的版本<br>
        Login With Ajax<br>
        <s>WP User Avatar</s>插件自行更新至ProfilePress<br>
        ProfilePress ×注2
</b>
<br>
<br>
 ### ×注1      
<b>在使用本主题时请注意：</b><br>
微博外联展示功能通过微博API实现，而微博API需要用户自行前往https://open.weibo.com/
申请权限，本主题并不提供相关权限。<br>
如果不想使用此功能，请打开主目录下sidebar.php，查找24行并删除下方语句：<br>
get_weibo();<br>
如已经申请好相关权限，请参照下方链接安装并操作<br>
https://github.com/xiaosier/libweibo<br>
在weibo.php中修改34行，填入你的权限代码<br>
$c = new SaeTClientV2( '', '', '' );<br>
<br>
### ×注2
在WP User Avatar升级为ProfilePress后会提醒网站管理员自动创建一系列page，用于登录、注册等。然而本主题会自动展示所有page，增加这些page后会导致page导航过长。此外，redonleft.com是一个私人网站，并不开放会员注册。基于以上原因，在使用本主题的时候，请根据自己的实际情况进行选择是否创建这些page。我推荐不要创建，本主题仅使用该插件的基础功能。<br>
