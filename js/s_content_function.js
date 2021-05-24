img_fix();
$('#load_mask').remove();
$('.mask-main').css('filter','none');
single_page_fix_size();
nav_menu_left();
button_out_left();
button_out_right();
submit();
title_right_single();
title_left_single();
date1_left_single();
date1_right_single();
datei_left_single();
datei_bottom_single();
fix_code();
if(sidebar_fix_bool){
	sidebar_fix();
}
sidebar_fix_h2();
col3_sidebar_action();
var page_width = document.querySelector("body").offsetWidth;
fit_screen(page_width);
if (yes == 1) {
	var page = document.querySelector("#page");
	$(page).css("width", "1340px");
	var mask_main = document.querySelector(".mask-main");
	$(mask_main).css("width", "1340px");
	var mask_left = document.querySelector(".mask-left");
	$(mask_left).css("width", "1340px");
	var col1 = document.querySelector(".col1");
	$(col1).css("width", "1070px");
	let post = document.querySelector(".post");
	if(post != null){
		$(post).css("width", "1070px");
		$(post).css("margin", "0 auto");
	}
	let page_class = document.querySelector(".page");
	if(page_class != null){
		$(page_class).css("width", "1070px");
		$(page_class).css("margin", "0 auto");
	}
}
need_cookie(page_width);
logo_position("s");
//修正引用链接尺寸问题
embed_fix("s");
postwords_left_single();
postwords_right_single();

