# Black-Hack-theme
这是一个我个人制作的wordpress主题，大致长下面这个样子<br>
https://www.redonleft.com/wp-content/themes/blackhack/screenshot.png
<br><br>
本主题是一个黑色科幻风格的日志文章展示主题。主题具备一个“页面展开”功能，在点击设定按钮后，整个页面才会完整展开，完整的日志和侧边栏内容才会显示出来。<br>
除此以外，本主题还使用了其他多个插件。<br>
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
<b>libweibo</b><br>
https://github.com/xiaosier/libweibo<br>
新浪微博开放平台php sdk<br>
<b>Font-Awesome</b><br>
https://github.com/FortAwesome/Font-Awesome<br>
可编程网络图标库<br>
<b>在使用本主题时请注意：</b><br>
微博外联展示功能通过微博API实现，而微博API需要用户自行前往https://open.weibo.com/
申请权限，本主题并不提供相关权限。<br>
如果不想使用此功能，请打开主目录下sidebar.php，查找24行并进行修改：<br>
<blockquote>
   <?php
        include 'weibo.php';
        rol_copyright();
   ?>
</blockquote>
修改为：<br>
<blockquote>
   <?php
        rol_copyright();
   ?>
</blockquote>
