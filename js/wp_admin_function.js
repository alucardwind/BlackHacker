window.onload = function(){
    //用于防止后台回到网站又触发动画
    let ab_item_array = document.getElementById('wp-admin-bar-site-name').getElementsByClassName('ab-item');
    for(let i = 0; i < ab_item_array.length; i++){
        let ab_item_href = ab_item_array[i].attributes['href'].nodeValue;
        let from_site_str = 'from_site=1';
        if(ab_item_href.indexOf(from_site_str) < 0){
            ab_item_href = ab_item_href + "?" + from_site_str;
            ab_item_array[i].attributes['href'].nodeValue = ab_item_href;
        }
    }
    // document.cookie = "from_site=1;expires=0";
}
