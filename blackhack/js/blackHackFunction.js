"use strict";
var t1;
var t2;
var sidebar_fix_bool = true;

function runEffectout() {
	$("#button-out").toggle("slide", {
		direction: "up"
	}, 800);
	$(".nav-menu li").toggle("slide", {
		direction: "up"
	}, 600);
	$("#nav_menu_left").toggle("slide", {direction: "up"}, 600,function(){
		$('#bili_player').toggle("slide", {direction: "up"}, 600);
		var ptbder = document.getElementsByClassName('ptbder');
		for(let iii=0; iii<ptbder.length; iii++){
			$(ptbder[iii]).toggle("slide", {direction: "up"}, 600,function(){
			    var ia = iii+1;
				if(ia === ptbder.length){
					var img_fix_auto = new img_fix();
					var sideber_li_ul = document.querySelectorAll('#sidebar li ul');
					for(let ii=0; ii<sideber_li_ul.length; ii++){
						$(sideber_li_ul[ii]).toggle("slide",{direction: "up"},600,function(){
							var iia = ii+1;
							if(iia === sideber_li_ul.length){
								$("#sidebar li select").toggle("slide", {direction: "up"}, 600);
								$(".avatar_container").toggle("slide", {direction: "up"}, 600);
								var sidebar_ex_cha = document.getElementsByClassName('toggle_display');
								for(let si=0; si<sidebar_ex_cha.length; si++){
									$(sidebar_ex_cha[si]).toggle("slide", {direction: "up"}, 600);
								}
								$("#displayr").toggle("drop", {direction: "right"}, 600);
								$(".titler").toggle("drop", {direction: "right"}, 600);
								$(".titlel").toggle("drop", 600);
								$("#displayl").toggle("drop", 600,function(){
									$("#button_out_right").toggle("slide", {direction: "up"}, 800);
									$("#button-in").toggle("slide", {direction: "up"}, 800);
									$("#button_out_left").toggle("slide", {direction: "up"}, 800,function(){
										if(sidebar_fix_bool){
											sidebar_fix();
											sidebar_weibo_a();
										}
									});
									
								});
							}
						});
					}
				}
			});
		}
	});
}

function runEffectin() {
	$("#button-in").toggle("slide", {direction: "up"}, 800);
	$("#button_out_right").toggle("slide", {direction: "up"}, 800);
	$("#button_out_left").toggle("slide", {direction: "up"}, 800);
	$(".nav-menu li").toggle("slide", {direction: "up"}, 600);
	$("#nav_menu_left").toggle("slide", {direction: "up"}, 600,function(){
		$('#bili_player').toggle("slide", {direction: "up"}, 600);
		
		var ptbder = document.getElementsByClassName('ptbder');
		for(let iii=0; iii<ptbder.length; iii++){
			$(ptbder[iii]).toggle("slide", {direction: "up"}, 600,function(){
			    var ia = iii+1;
				if(ia === ptbder.length){
					var sideber_li_ul = document.querySelectorAll('#sidebar li ul');
					for(let ii=0; ii<sideber_li_ul.length; ii++){
						$(sideber_li_ul[ii]).toggle("slide",{direction: "up"},600,function(){
							var iia = ii+1;
							if(iia === sideber_li_ul.length){
								$("#sidebar li select").toggle("slide", {direction: "up"}, 600);
								$(".avatar_container").toggle("slide", {direction: "up"}, 600);
								var sidebar_ex_cha = document.getElementsByClassName('toggle_display');
									for(let si=0; si<sidebar_ex_cha.length; si++){
										$(sidebar_ex_cha[si]).toggle("slide", {direction: "up"}, 600);
									}
								$("#displayr").toggle("drop", {direction: "right"}, 600);
								$(".titler").toggle("drop", {direction: "right"}, 600);
								$(".titlel").toggle("drop", 600);
								$("#displayl").toggle("drop", 600,function(){
									$("#button-out").toggle("slide", {direction: "up"}, 800);
								});
							}
						});
					}
				}
			});
		}
	});
}

function light() {
	var tit_li = document.getElementsByClassName('title_light');
	function chuandi_light(s_class){
		$(s_class).animate({borderTopColor: "#06F"}, 500,function(){
			$(s_class).animate({borderTopColor: "#58c7ee"}, 1000);
		});
	}
	for(var j=0; j<tit_li.length; j++){
		chuandi_light(tit_li[j]);		
	}
	t1 = setTimeout(light, 2500);
}

function title_hover(select){
	$(select).toggleClass("title_hover",500);
}

function img_fix(){
	var figure_array = document.querySelectorAll('.wp-block-image');
	var figure_width;
	var figure_height;
	var img;
	var img_width;
	var img_height;
	var bili;
	var get_pos;
	if(figure_array){
		for(var i=0; i<figure_array.length; i++){
			img = figure_array[i].querySelector('figure img');
			img_width = img.naturalWidth;
			if(img_width !== 0){
				img_height = img.naturalHeight;
				bili = img_height/img_width;
				figure_width = figure_array[i].offsetWidth;
				get_pos = figure_array[i].querySelector('.aligncenter');
				if(get_pos){
					if(img_width > figure_width){
						figure_width = figure_width-20;
						$(img).width(figure_width);
						figure_height = figure_width*bili;
						$(img).height(figure_height);
					}
				}
				get_pos = figure_array[i].querySelector('.alignleft');
				if(get_pos){
					if(img_width > figure_width / 2){
						figure_width = (figure_width-20)/2;
						$(img).width(figure_width);
						figure_height = figure_width*bili;
						$(img).height(figure_height);
					}
				}
				get_pos = figure_array[i].querySelector('.alignright');
				if(get_pos){
					if(img_width > figure_width / 2){
						figure_width = (figure_width-20)/2;
						$(img).width(figure_width);
						figure_height = figure_width*bili;
						$(img).height(figure_height);
					}
				}
			}
		}
	}
	//以下用于兼容老版编辑器输出的文章图片
	var pw_width;
	var pw_array = document.getElementsByClassName('postwords');
	for(var ii = 0; ii<pw_array.length; ii++){
		var img_array = pw_array[ii].querySelectorAll('p img');
		if(img_array.length > 0){
			pw_width = pw_array[ii].offsetWidth;
			for(var iii = 0; iii<img_array.length; iii++){
				img_width = img_array[iii].naturalWidth;
				img_height = img_array[iii].naturalHeight;
				bili = img_height / img_width;
				if(img_array[iii].classList.contains("aligncenter") && img_width > pw_width){
					img_width = pw_width -70;
				}
				if(img_array[iii].classList.contains("alignleft") || img_array[iii].classList.contains("alignright")){
					if(img_width > pw_width / 2){
						img_width = (pw_width -70)/2;
					}
				}
				img_height = bili*img_width;
				$(img_array[iii]).width(img_width);
				$(img_array[iii]).height(img_height);
			}
		}
	}
}


function sidebar_light(){
	var h2_title_array = document.getElementsByClassName('widgettitle');
	var number = h2_title_array.length;
	var number1 = number;
	number--;
	function fangfa(arr){
		$(h2_title_array[arr]).animate({borderBottomColor: "#06F"},500,function(){
			$(h2_title_array[arr]).animate({borderBottomColor: "#58c7ee"}, 1000,function(){
				if(arr === number){return;}
				arr++;
				fangfa(arr);
			});			
		});
	}
	fangfa(0);
	number1 = number1 * 1500 + 500;
	t2 = setTimeout(sidebar_light, number1);
}

function submit(){
	var searchsubmit = document.querySelectorAll("#searchsubmit");
	if(searchsubmit.length > 0){
		for(var i=0; i < searchsubmit.length; i++){
			searchsubmit[i].value = "";
		}
	}
}

function nav_menu_left(){
	var nav_menu_left = document.getElementById("nav_menu_left");
	if(!nav_menu_left){return;}
	var nav_tx = nav_menu_left.getContext("2d");
	nav_tx.scale(2,2);
	nav_tx.beginPath();
	nav_tx.moveTo(100,30);
	nav_tx.lineTo(0,30);
	nav_tx.lineTo(30,0);
	nav_tx.lineTo(100,0);
	nav_tx.strokeStyle = "#58c7ee";
	nav_tx.lineWidth = 3;
	nav_tx.stroke();
	nav_tx.closePath();
	nav_tx.fillStyle = "#58c7ee";
	nav_tx.globalAlpha = 0.2;
	nav_tx.fill();
	nav_tx.beginPath();
	nav_tx.globalAlpha = 1;
	nav_tx.moveTo(100,23);
	nav_tx.lineTo(90,15);
	nav_tx.lineTo(15,15);
	nav_tx.lineWidth = 1;
	nav_tx.strokeStyle = "#58c7ee";
	nav_tx.stroke();
}

function button_out_left(){
	var button_out_left = document.getElementById("button_out_left");
	if(!button_out_left){return;}
	var button_tx = button_out_left.getContext("2d");
	button_tx.scale(2,2);
	button_tx.beginPath();
	button_tx.moveTo(0,0);
	button_tx.lineTo(75,0);
	button_tx.moveTo(75,60);
	button_tx.lineTo(0,29);
	button_tx.lineWidth = 3;
	button_tx.strokeStyle = "#58c7ee";
	button_tx.stroke();
	button_tx.closePath();
	button_tx.beginPath();
	button_tx.moveTo(0,0);
	button_tx.lineTo(75,0);
	button_tx.lineTo(75,60);
	button_tx.lineTo(0,30);
	button_tx.closePath();
	button_tx.fillStyle = "#58c7ee";
	button_tx.globalAlpha = 0.2;
	button_tx.fill();
	button_tx.beginPath();
	button_tx.moveTo(75,40);
	button_tx.lineTo(40,23);
	button_tx.lineTo(0,23);
	button_tx.lineWidth = 1;
	button_tx.strokeStyle = "#58c7ee";
	button_tx.globalAlpha = 1;
	button_tx.stroke();
}

function button_out_right(){
	var button_out_right = document.getElementById("button_out_right");
	if(!button_out_right){return;}
	var button_tx = button_out_right.getContext("2d");
	button_tx.scale(2,2);
	button_tx.beginPath();
	button_tx.moveTo(0,0);
	button_tx.lineTo(32,0);
	button_tx.lineTo(50,20);
	button_tx.lineTo(50,40);
	button_tx.lineTo(25,40);
	button_tx.lineTo(0,60);
	button_tx.closePath();
	button_tx.fillStyle = "#58c7ee";
	button_tx.globalAlpha = 0.2;
	button_tx.fill();
	button_tx.beginPath();
	button_tx.moveTo(0,0);
	button_tx.lineTo(32,0);
	button_tx.lineTo(50,20);
	button_tx.lineTo(50,39);
	button_tx.lineTo(25,39);
	button_tx.lineTo(0,60);
	button_tx.lineWidth = 3;
	button_tx.strokeStyle = "#58c7ee";
	button_tx.globalAlpha = 1;
	button_tx.stroke();
	button_tx.beginPath();
	button_tx.moveTo(0,40);
	button_tx.lineTo(15,30);
	button_tx.lineTo(50,30);
	button_tx.lineWidth = 1;
	button_tx.stroke();
}

function comment_left(){
	var comment_left = document.getElementById("comment_left");
	if(!comment_left){return;}	
	var com_tx = comment_left.getContext("2d");
	com_tx.scale(2,2);
	com_tx.beginPath();
	com_tx.moveTo(30,0);
	com_tx.lineTo(1,30);
	com_tx.lineTo(1,179);
	com_tx.lineTo(30,179);
	com_tx.strokeStyle = "#58c7ee";
	com_tx.lineWidth = 2;
	com_tx.stroke();
	com_tx.closePath();
	com_tx.fillStyle = "#58c7ee";
	com_tx.globalAlpha = 0.2;
	com_tx.fill();
	com_tx.beginPath();
	com_tx.moveTo(30,172);
	com_tx.lineTo(0,172);
	com_tx.strokeStyle = "#58c7ee";
	com_tx.lineWidth = 1;
	com_tx.globalAlpha = 1;
	com_tx.stroke();
}

function comment_right(){
	var comment_right = document.getElementById("comment_right");
	if(!comment_right){return;}
	var com_tx = comment_right.getContext("2d");
	com_tx.scale(2,2);
	com_tx.beginPath();
	com_tx.moveTo(0,0);
	com_tx.lineTo(19,20);
	com_tx.lineTo(19,84);
	com_tx.strokeStyle = "#58c7ee";
	com_tx.lineWidth = 2;
	com_tx.stroke();
	com_tx.lineTo(0,84);
	com_tx.closePath();
	com_tx.fillStyle = "#58c7ee";
	com_tx.globalAlpha = 0.2;
	com_tx.fill();
	com_tx.beginPath();
	com_tx.moveTo(20,60);
	com_tx.lineTo(0,60);
	com_tx.strokeStyle = "#58c7ee";
	com_tx.lineWidth = 1;
	com_tx.globalAlpha = 1;
	com_tx.stroke();
}

function comment_bottom(){
	var comment_bottom = document.getElementById("comment_bottom");
	if(!comment_bottom){return;}
	var com_tx = comment_bottom.getContext("2d");
	com_tx.scale(2,2);
	com_tx.beginPath();
	com_tx.moveTo(981,0);
	com_tx.lineTo(961,39);
	com_tx.lineTo(60,39);
	com_tx.lineTo(0,13);
	com_tx.strokeStyle = "#58c7ee";
	com_tx.lineWidth = 2;
	com_tx.stroke();
	com_tx.lineTo(0,0);
	com_tx.closePath();
	com_tx.fillStyle = "#58c7ee";
	com_tx.globalAlpha = 0.2;
	com_tx.fill();
	com_tx.beginPath();
	com_tx.moveTo(0,0);
	com_tx.lineTo(60,27);
	com_tx.lineTo(950,27);
	com_tx.lineTo(965,0);
	com_tx.strokeStyle = "#58c7ee";
	com_tx.lineWidth = 2;
	com_tx.globalAlpha = 1;
	com_tx.stroke();
	com_tx.beginPath();
	com_tx.moveTo(764,0);
	com_tx.lineTo(748,20);
	com_tx.lineTo(400,20);
	com_tx.lineTo(385,5);
	com_tx.lineTo(0,5);
	com_tx.strokeStyle = "#58c7ee";
	com_tx.lineWidth = 1;
	com_tx.stroke();
}

function postwords_left(){
	var postwords_left = document.getElementById("postwords_left");
	if(!postwords_left){return;}
	var pos_tx = postwords_left.getContext("2d");
	pos_tx.scale(2,2);
	pos_tx.beginPath();
	pos_tx.moveTo(0,0);
	pos_tx.lineTo(83,85);
	pos_tx.strokeStyle = "#58c7ee";
	pos_tx.lineWidth = 2;
	pos_tx.stroke();
	pos_tx.lineTo(0,85);
	pos_tx.closePath();
	pos_tx.fillStyle = "#58c7ee";
	pos_tx.globalAlpha = 0.2;
	pos_tx.fill();
}

function postwords_bottom(){
	var postwords_bottom = document.getElementById("postwords_bottom");
	if(!postwords_bottom){return;}
	var pos_tx = postwords_bottom.getContext("2d");
	pos_tx.scale(2,2);
	pos_tx.beginPath();
	pos_tx.moveTo(579,58);
	pos_tx.lineTo(400,58);
	pos_tx.lineTo(320,164);
	pos_tx.strokeStyle = "#58c7ee";
	pos_tx.lineWidth = 1;
	pos_tx.stroke();
} 

function title_right(){
	var title_right = document.getElementsByClassName("title_right");
	for(var i=0; i<title_right.length; i++){
		var tit_tx = title_right[i].getContext("2d");
		var wid = title_right[i].offsetWidth;
		var x = wid;
		tit_tx.scale(2,2);
		tit_tx.beginPath();
		tit_tx.moveTo(0,0);
		var y = wid/6;
		x = y;
		tit_tx.lineTo(x+5,22);
		tit_tx.lineTo(0,44);
		tit_tx.strokeStyle = "#58c7ee";
		tit_tx.lineWidth = 2;
		tit_tx.stroke();
		tit_tx.closePath();
		tit_tx.fillStyle = "#58c7ee";
		tit_tx.globalAlpha = 0.2;
		tit_tx.fill();
		tit_tx.beginPath();
		tit_tx.moveTo(x+5,22);
		x += y;
		tit_tx.lineTo(x,22);
		x += y;
		tit_tx.lineTo(x,44);
		tit_tx.strokeStyle = "#58c7ee";
		tit_tx.lineWidth = 2;
		tit_tx.globalAlpha = 1;
		tit_tx.stroke();
		x -= y;
		x -= 6;
		tit_tx.beginPath();
		tit_tx.moveTo(x,22);
		tit_tx.lineTo(x+y,44);
		x -= 4;
		tit_tx.moveTo(x,22);
		tit_tx.lineTo(x+y,44);
		tit_tx.lineWidth = 1;
		tit_tx.stroke();
	}
}

function title_left(){
	var title_left = document.getElementsByClassName("title_left");
	for(var i=0; i<title_left.length; i++){
		var tit_tx = title_left[i].getContext("2d");
		var wid = title_left[i].offsetWidth;
		var y = wid*2/3;
		tit_tx.scale(2,2);
		tit_tx.beginPath();
		tit_tx.moveTo(wid,0);
		tit_tx.lineTo(y-5,22);
		tit_tx.lineTo(wid,44);
		tit_tx.strokeStyle = "#58c7ee";
		tit_tx.lineWidth = 2;
		tit_tx.stroke();
		tit_tx.closePath();
		tit_tx.fillStyle = "#58c7ee";
		tit_tx.globalAlpha = 0.2;
		tit_tx.fill();
		tit_tx.beginPath();
		tit_tx.moveTo(y-5,22);
		tit_tx.lineTo(1,22);
		tit_tx.lineTo(1,44);
		tit_tx.strokeStyle = "#58c7ee";
		tit_tx.lineWidth = 2;
		tit_tx.globalAlpha = 1;
		tit_tx.stroke();
		tit_tx.beginPath();
		tit_tx.moveTo(17,34);
		tit_tx.lineTo(12,44);
		tit_tx.moveTo(17,22);
		tit_tx.lineTo(6,44);
		tit_tx.lineWidth = 1;
		tit_tx.stroke();
	}
}

function date1_right(){
	var date1_right = document.getElementsByClassName("date1_right");
	for(var i=0; i<date1_right.length; i++){
		var dat_tx = date1_right[i].getContext("2d");
		var wid = date1_right[i].offsetWidth;
		dat_tx.scale(2,2);
		dat_tx.beginPath();
		dat_tx.moveTo(wid,23);
		dat_tx.lineTo(wid-8,14);
		dat_tx.lineTo(8,14);
		dat_tx.lineTo(0,23);
		dat_tx.closePath();
		dat_tx.fillStyle = "#58c7ee";
		dat_tx.fill();
		dat_tx.beginPath();
		dat_tx.moveTo(wid-19,0);
		dat_tx.lineTo(wid-19,23);
		dat_tx.lineWidth = 2;
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.beginPath();
		dat_tx.moveTo(wid-29,0);
		dat_tx.lineTo(wid-19,12);
		dat_tx.lineWidth = 1;
		dat_tx.stroke();
	}
}

function date1_left(){
	var date1_left = document.getElementsByClassName("date1_left");
	for(var i=0; i<date1_left.length; i++){
		var dat_tx = date1_left[i].getContext("2d");
		dat_tx.scale(2,2);
		dat_tx.beginPath();
		dat_tx.moveTo(1,0);
		dat_tx.lineTo(1,23);
		dat_tx.lineWidth = 2;
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.beginPath();
		dat_tx.moveTo(0,23);
		dat_tx.lineTo(12,0);
		dat_tx.lineWidth = 1;
		dat_tx.stroke();
	}
}

function logo_right(){
	var logo_right = document.getElementsByClassName("logo_right");
	for(var i=0; i<logo_right.length; i++){
		var log_tx = logo_right[i].getContext("2d");
		log_tx.scale(2,2);
		log_tx.beginPath();
		log_tx.moveTo(0,4);
		log_tx.lineTo(20,4);
		log_tx.lineTo(20,73);
		log_tx.lineTo(0,73);
		log_tx.moveTo(20,58);
		log_tx.lineTo(0,58);
		log_tx.lineWidth = 2;
		log_tx.strokeStyle = "#58c7ee";
		log_tx.stroke();
		log_tx.beginPath();
		log_tx.moveTo(0,79.5);
		log_tx.lineTo(28,79.5);
		log_tx.lineTo(28,54);
		log_tx.moveTo(28,50);
		log_tx.lineTo(28,5);
		log_tx.moveTo(24,12);
		log_tx.lineTo(24,0);
		log_tx.lineTo(12,0);
		log_tx.lineWidth = 1;
		log_tx.stroke();
	}
}

function logo_left(){
	var logo_left = document.getElementsByClassName("logo_left");
	for(var i=0; i<logo_left.length; i++){
		var log_tx = logo_left[i].getContext("2d");
		log_tx.scale(2,2);
		log_tx.beginPath();
		log_tx.moveTo(140,10);
		log_tx.lineTo(105,10);
		log_tx.moveTo(140,64);
		log_tx.lineTo(117,64);
		log_tx.moveTo(140,79);
		log_tx.lineTo(109,79);
		log_tx.moveTo(34,10);
		log_tx.lineTo(10,10);
		log_tx.lineTo(10,79);
		log_tx.lineTo(34,79);
		log_tx.lineWidth = 2;
		log_tx.strokeStyle = "#58c7ee";
		log_tx.stroke();
		log_tx.beginPath();
		log_tx.moveTo(5,5);
		log_tx.lineTo(5,65);
		log_tx.moveTo(140,85.5);
		log_tx.lineTo(120,85.5);
		log_tx.lineWidth = 1;
		log_tx.stroke();
	}
}

function left_top(){
	var left_top = document.getElementById("left_top");
	var lef_tx = left_top.getContext("2d");
	lef_tx.scale(2,2);
	lef_tx.beginPath();
	lef_tx.moveTo(0,60);
	lef_tx.lineTo(50,60);
	lef_tx.lineTo(60,50);
	lef_tx.lineTo(60,0);
	lef_tx.lineTo(15,0);
	lef_tx.lineTo(0,15);
	lef_tx.lineTo(0,60);
	lef_tx.lineWidth = 1;
	lef_tx.strokeStyle = "#58c7ee";
	lef_tx.stroke();
	lef_tx.moveTo(40,59);
	lef_tx.lineTo(50,59);
	lef_tx.lineTo(59,50);
	lef_tx.lineTo(59,40);
	lef_tx.moveTo(59,8);
	lef_tx.lineTo(59,1);
	lef_tx.lineTo(52,1);
	lef_tx.moveTo(20,1);
	lef_tx.lineTo(15,1);
	lef_tx.lineTo(1,15);
	lef_tx.lineTo(1,20);
	lef_tx.lineWidth = 2;
	lef_tx.stroke();
}

function postwords_top(){
	var postwords_top = document.getElementsByClassName("postwords_top");
	for(var i=0; i<postwords_top.length; i++){
		var pos_tx = postwords_top[i].getContext("2d");
		pos_tx.scale(2,2);
		pos_tx.beginPath();
		pos_tx.moveTo(1,0);
		pos_tx.lineTo(1,40);
		pos_tx.lineWidth = 2;
		pos_tx.strokeStyle = "#58c7ee";
		pos_tx.stroke();
		pos_tx.lineTo(495,40);
		pos_tx.lineTo(462,0);
		pos_tx.fillStyle = "#58c7ee";
		pos_tx.globalAlpha = 0.2;
		pos_tx.fill();
		pos_tx.beginPath();
		pos_tx.moveTo(0,18);
		pos_tx.lineTo(440,18);
		pos_tx.lineTo(462,0);
		pos_tx.lineTo(495,40);
		pos_tx.globalAlpha = 1;
		pos_tx.stroke();
		pos_tx.beginPath();
		pos_tx.moveTo(5,40);
		pos_tx.lineTo(5,6);
		pos_tx.lineTo(22,25);
		pos_tx.lineTo(22,40);
		pos_tx.lineWidth = 4;
		pos_tx.stroke();
		pos_tx.beginPath();
		pos_tx.moveTo(5,40);
		pos_tx.lineTo(15,24);
		pos_tx.moveTo(18,18);
		pos_tx.lineTo(22,14);
		pos_tx.moveTo(30,6);
		pos_tx.lineTo(36,0);
		pos_tx.moveTo(450,0);
		pos_tx.lineTo(483,40);
		pos_tx.moveTo(478,40);
		pos_tx.lineTo(470,30);
		pos_tx.moveTo(466,25);
		pos_tx.lineTo(458,15);
		pos_tx.lineWidth = 1;
		pos_tx.stroke();
	}
}

function date_right(){
	var date_right = document.getElementsByClassName("date_right");
	for(var i=0; i<date_right.length; i++){
		var dat_tx = date_right[i].getContext("2d");
		dat_tx.scale(2,2);
		dat_tx.beginPath();
		dat_tx.moveTo(0,29);
		dat_tx.lineTo(30,1);
		dat_tx.lineTo(0,1);
		dat_tx.lineWidth = 2;
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.globalAlpha = 0.2;
		dat_tx.fillStyle = "#58c7ee";
		dat_tx.fill();
	}
}

function date_left(){
	var date_left = document.getElementsByClassName("date_left");
	for(var i=0; i<date_left.length; i++){
		var dat_tx = date_left[i].getContext("2d");
		dat_tx.scale(2,2);
		dat_tx.beginPath();
		dat_tx.moveTo(0,0);
		dat_tx.lineTo(0,30);
		dat_tx.lineTo(50,30);
		dat_tx.lineTo(50,0);
		dat_tx.globalAlpha = 0.2;
		dat_tx.fillStyle = "#58c7ee";
		dat_tx.fill();
		dat_tx.beginPath();
		dat_tx.globalAlpha = 1;
		dat_tx.moveTo(1,0);
		dat_tx.lineTo(1,29);
		dat_tx.lineTo(50,29);
		dat_tx.moveTo(50,1);
		dat_tx.lineTo(30,1);
		dat_tx.lineTo(29,1);
		dat_tx.lineTo(0,30);
		dat_tx.lineWidth = 2;
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.beginPath();
		dat_tx.moveTo(5,0);
		dat_tx.lineTo(5,18);
		dat_tx.lineTo(23,0);
		dat_tx.lineWidth = 4;
		dat_tx.stroke();
		dat_tx.beginPath();
		dat_tx.moveTo(25,30);
		dat_tx.lineTo(12,17);
		dat_tx.moveTo(29,30);
		dat_tx.lineTo(21,22);
		dat_tx.lineWidth = 1;
		dat_tx.stroke();
	}
}

function title_right_single(){
	var title_right_single = document.getElementById("title_right_single");
	if(!title_right_single){return;}
	var tit_tx = title_right_single.getContext("2d");
	tit_tx.scale(2,2);
	tit_tx.beginPath();
	tit_tx.moveTo(0,0);
	tit_tx.lineTo(23,23);
	tit_tx.lineTo(23,45.5);
	tit_tx.lineTo(0,45.5);
	tit_tx.lineTo(0,46.5);
	tit_tx.lineTo(24,46.5);
	tit_tx.lineTo(24,10);
	tit_tx.lineTo(400,10);
	tit_tx.lineTo(400,46.5);
	tit_tx.lineTo(480,46.5);
	tit_tx.moveTo(50,47);
	tit_tx.lineTo(50,34);
	tit_tx.lineTo(370,34);
	tit_tx.lineTo(370,47);
	tit_tx.lineWidth = 1;
	tit_tx.strokeStyle = "#58c7ee";
	tit_tx.stroke();
}

function title_left_single(){
	var title_left_single = document.getElementById("title_left_single");
	if(!title_left_single){return;}
	var tit_tx = title_left_single.getContext("2d");
	tit_tx.scale(2,2);
	tit_tx.beginPath();
	tit_tx.moveTo(50,0);
	tit_tx.lineTo(27,23);
	tit_tx.lineTo(27,47);
	tit_tx.lineWidth = 1;
	tit_tx.strokeStyle = "#58c7ee";
	tit_tx.stroke();
	tit_tx.beginPath();
	tit_tx.lineTo(27,46);
	tit_tx.lineTo(50,46);
	tit_tx.lineWidth = 2;
	tit_tx.stroke();
}

function date1_left_single(){
	var date1_left_single = document.getElementById("date1_left_single");
	if(!date1_left_single){return;}
	var dat_tx = date1_left_single.getContext("2d");
	dat_tx.scale(2,2);
	dat_tx.beginPath();
	dat_tx.moveTo(27,0);
	dat_tx.lineTo(27,32);
	dat_tx.lineWidth = 1;
	dat_tx.strokeStyle = "#58c7ee";
	dat_tx.stroke();
	dat_tx.beginPath();
	dat_tx.moveTo(57,31.5);
	dat_tx.lineTo(581.5,31.5);
	dat_tx.stroke();
}

function date1_right_single(){
	var date1_right_single = document.getElementById("date1_right_single");
	if(!date1_right_single){return;}
	var dat_tx = date1_right_single.getContext("2d");
	dat_tx.scale(2,2);
	dat_tx.beginPath();
	dat_tx.moveTo(110,0);
	dat_tx.lineTo(110,32);
	dat_tx.lineWidth = 1;
	dat_tx.strokeStyle = "#58c7ee";
	dat_tx.stroke();
	dat_tx.beginPath();
	dat_tx.moveTo(0,31.5);
	dat_tx.lineTo(80,31.5);
	dat_tx.stroke();
}

function postwords_left_single(){
	var pw = document.getElementsByClassName("single_postwords");
	if(pw.length === 0){return;}
	var hei_pw = pw[0].offsetHeight;
	var postwords_left_single = document.getElementById("postwords_left_single");
	postwords_left_single.height = hei_pw * 2;
	$("#postwords_left_single").css("height",hei_pw);
	var pos_tx = postwords_left_single.getContext("2d");
	pos_tx.beginPath();
	pos_tx.scale(2,2);
	pos_tx.moveTo(27,0);
	pos_tx.lineTo(27,hei_pw);
	pos_tx.lineWidth = 1;
	pos_tx.strokeStyle = "#58c7ee";
	pos_tx.stroke();
	pos_tx.beginPath();
	pos_tx.moveTo(27,hei_pw);
	pos_tx.lineTo(27,hei_pw-15);
	pos_tx.moveTo(27,hei_pw-35);
	pos_tx.lineTo(27,hei_pw-50);
	pos_tx.moveTo(27,hei_pw-70);
	pos_tx.lineTo(27,hei_pw-85);
	if(hei_pw<85){return;}
	pos_tx.lineWidth = 3;
	pos_tx.strokeStyle = "#ffffff";
	pos_tx.stroke();
	pos_tx.beginPath();
	pos_tx.moveTo(27,60);
	pos_tx.lineTo(27,75);
	pos_tx.moveTo(27,95);
	pos_tx.lineTo(27,110);
	pos_tx.moveTo(27,130);
	pos_tx.lineTo(27,145);
	if(hei_pw<145){return;}
	pos_tx.stroke();
	pos_tx.beginPath();
	pos_tx.moveTo(27,185);
	pos_tx.lineTo(27,200);
	pos_tx.moveTo(27,220);
	pos_tx.lineTo(27,235);
	pos_tx.moveTo(27,255);
	pos_tx.lineTo(27,270);
	if(hei_pw<270){return;}
	pos_tx.stroke();
}

function postwords_right_single(){
	var pw = document.getElementsByClassName("single_postwords");
	if(pw.length === 0){return;}
	var hei_pw = pw[0].offsetHeight;
	var postwords_right_single = document.getElementById("postwords_right_single");
	postwords_right_single.height = hei_pw * 2;
	$("#postwords_right_single").css("height",hei_pw);
	var pos_tx = postwords_right_single.getContext("2d");
	pos_tx.beginPath();
	pos_tx.scale(2,2);
	pos_tx.moveTo(32,hei_pw-120);
	pos_tx.lineTo(32,hei_pw-100);
	pos_tx.lineTo(47,hei_pw-100);
	pos_tx.lineTo(47,hei_pw-120);
	if(hei_pw<120){return;}
	pos_tx.closePath();
	pos_tx.lineWidth = 3;
	pos_tx.strokeStyle = "#58c7ee";
	pos_tx.stroke();
	pos_tx.beginPath();
	pos_tx.moveTo(40,hei_pw-120);
	pos_tx.lineTo(40,0);
	pos_tx.lineWidth = 1;
	pos_tx.stroke();
	pos_tx.beginPath();
	pos_tx.moveTo(70,0);
	pos_tx.lineTo(70,120);
	pos_tx.moveTo(70,124);
	pos_tx.lineTo(78,132);
	pos_tx.lineTo(70,140);
	pos_tx.lineTo(62,132);
	pos_tx.lineTo(70,124);
	pos_tx.moveTo(70,150);
	pos_tx.lineTo(78,158);
	pos_tx.lineTo(70,166);
	pos_tx.lineTo(62,158);
	pos_tx.lineTo(70,150);
	pos_tx.moveTo(70,176);
	pos_tx.lineTo(78,184);
	pos_tx.lineTo(70,192);
	pos_tx.lineTo(62,184);
	pos_tx.lineTo(70,176);
	pos_tx.moveTo(70,202);
	pos_tx.lineTo(78,210);
	pos_tx.lineTo(70,218);
	pos_tx.lineTo(62,210);
	pos_tx.lineTo(70,202);
	if(hei_pw<218){return;}
	pos_tx.moveTo(70,hei_pw-40);
	pos_tx.lineTo(70,hei_pw-90);
	pos_tx.stroke();
}

function datei_left_single(){
	var datei_left_single = document.getElementById("datei_left_single");
	if(!datei_left_single){return;}
	var dat_tx = datei_left_single.getContext("2d");
	dat_tx.beginPath();
	dat_tx.scale(2,2);
	dat_tx.moveTo(27,0);
	dat_tx.lineTo(27,41);
	dat_tx.moveTo(57,0);
	dat_tx.lineTo(57,41);
	dat_tx.moveTo(601,0);
	dat_tx.lineTo(560,41);
	dat_tx.strokeStyle = "#58c7ee";
	dat_tx.lineWidth = 1;
	dat_tx.stroke();
}

function datei_bottom_single(){
	var datei_bottom_single = document.getElementById("datei_bottom_single");
	if(!datei_bottom_single){return;}
	var dat_tx = datei_bottom_single.getContext("2d");
	dat_tx.beginPath();
	dat_tx.scale(2,2);
	dat_tx.moveTo(27,0);
	dat_tx.lineTo(27,41);
	dat_tx.lineTo(27,80);
	dat_tx.lineTo(520,80);
	dat_tx.lineTo(562,40);
	dat_tx.lineTo(1031,40);
	dat_tx.lineTo(1031,0);
	dat_tx.moveTo(560,0);
	dat_tx.lineTo(550,10);
	dat_tx.lineTo(620,10);
	dat_tx.moveTo(660,10);
	dat_tx.lineTo(730,10);
	dat_tx.moveTo(770,10);
	dat_tx.lineTo(840,10);
	dat_tx.moveTo(880,10);
	dat_tx.lineTo(950,10);
	dat_tx.moveTo(990,10);
	dat_tx.lineTo(1010,10);
	dat_tx.lineTo(1010,0);
	dat_tx.moveTo(535,25);
	dat_tx.lineTo(502,58);
	dat_tx.moveTo(462,58);
	dat_tx.lineTo(392,58);
	dat_tx.moveTo(352,58);
	dat_tx.lineTo(282,58);
	dat_tx.moveTo(242,58);
	dat_tx.lineTo(172,58);
	dat_tx.moveTo(132,58);
	dat_tx.lineTo(62,58);
	dat_tx.moveTo(57,58);
	dat_tx.lineTo(57,0);
	dat_tx.strokeStyle = "#58c7ee";
	dat_tx.lineWidth = 1;
	dat_tx.stroke();
	dat_tx.beginPath();
	dat_tx.moveTo(750,2);
	dat_tx.lineTo(750,22);
	dat_tx.lineTo(765,22);
	dat_tx.lineTo(765,2);
	dat_tx.lineTo(749,2);
	dat_tx.moveTo(860,2);
	dat_tx.lineTo(860,22);
	dat_tx.lineTo(875,22);
	dat_tx.lineTo(875,2);
	dat_tx.lineTo(859,2);
	dat_tx.lineWidth = 3;
	dat_tx.stroke();
	dat_tx.beginPath();
	dat_tx.moveTo(270,80);
	dat_tx.lineTo(285,80);
	dat_tx.moveTo(305,80);
	dat_tx.lineTo(320,80);
	dat_tx.moveTo(340,80);
	dat_tx.lineTo(355,80);
	dat_tx.strokeStyle = "#ffffff";
	dat_tx.stroke();
}

function sidebar_fix(){
	var hei_px;
	var li_array = document.querySelectorAll("#sidebar li ul li");
	for(var i=0; i<li_array.length; i++){
		var li_left = document.createElement('canvas');
		var li_left_height = li_array[i].offsetHeight;
		if(li_left_height === 0){return;}
		li_left.height = li_left_height + 10;
		li_left.width = "57";
		hei_px = li_left_height + 10 + "px";
		li_left.style.height = hei_px;
		li_left.style.width = "20%";
		li_left.style.float = "left";
		li_left.className = "li_left";
		var li_tx = li_left.getContext("2d");
		li_tx.beginPath();
		li_tx.moveTo(57,li_left_height);
		li_tx.lineTo(47,li_left_height-10);
		li_tx.lineWidth = 1;
		li_tx.strokeStyle = "#58c7ee";
		li_tx.stroke();
		$(li_left).insertBefore(li_array[i]);
		var li_right = document.createElement('canvas');
		li_right.height = li_left_height + 10;
		li_right.width ="57";
		li_right.style.height = hei_px;
		li_right.style.width = "20%";
		li_right.style.float = "left";
		li_right.className = "li_right";
		$(li_right).insertAfter(li_array[i]);
		li_tx = li_right.getContext("2d");
		li_tx.beginPath();
		li_tx.moveTo(0,li_left_height);
		li_tx.lineTo(10,li_left_height+10);
		li_tx.lineWidth = 1;
		li_tx.strokeStyle = "#58c7ee";
		li_tx.stroke();
	}
	sidebar_fix_bool = false;
}

function sidebar_fix_h2(){
	var hei_px;
	var sidebar_title = document.getElementsByClassName("widgettitle");
	for(var ii=0; ii<sidebar_title.length; ii++){
		var sidebar_title_height = sidebar_title[ii].offsetHeight;
		if(sidebar_title_height === 0){return;}
		var h2_left = document.createElement('canvas');
		h2_left.height = sidebar_title_height+15;
		h2_left.width = 25;
		hei_px = sidebar_title_height + 15 +"px";
		h2_left.style.height = hei_px;
		h2_left.style.width = "10%";
		h2_left.style.float = "left";
		$(h2_left).insertBefore(sidebar_title[ii]);
		var h2_tx = h2_left.getContext("2d");
		h2_tx.beginPath();
		h2_tx.moveTo(25,sidebar_title_height);
		h2_tx.lineTo(10,sidebar_title_height-15);
		h2_tx.lineWidth = 2;
		h2_tx.arc(7,sidebar_title_height-18,3,0,Math.PI*2,false);
		h2_tx.strokeStyle = "#58c7ee";
		h2_tx.stroke();
		var h2_right = document.createElement('canvas');
		h2_right.height = sidebar_title_height+15;
		h2_right.width = 25;
		h2_right.style.height = hei_px;
		h2_right.style.width = "10%";
		h2_right.style.float = "left";
		$(h2_right).insertAfter(sidebar_title[ii]);
		h2_tx = h2_right.getContext("2d");
		h2_tx.beginPath();
		h2_tx.arc(10,sidebar_title_height+10,3,0,Math.PI*2,false);
		h2_tx.moveTo(0,sidebar_title_height);
		h2_tx.lineTo(8,sidebar_title_height+8);
		h2_tx.lineWidth = 2;
		h2_tx.strokeStyle = "#58c7ee";
		h2_tx.stroke();
	}
}

function sidebar_weibo_a(){
	var weibo = document.getElementsByClassName('weibo_text');
	for(var i=0; i<weibo.length; i++){
		var text = $(weibo[i]).html();
		var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
		text = text.replace(reg, "<a href='$1$2' target=_blank>$1$2</a>");
		weibo[i].innerHTML = text;
		sidebar_fix_bool = false;
	}
}