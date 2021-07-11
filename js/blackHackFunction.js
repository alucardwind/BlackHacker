"use strict";
let t1;
let t2;
let sidebar_fix_bool = true;
let yes;
let yes_thin;
let yes_middle;
let xmlhttp;
let title_position_m;
let title_position_s;

//用于修改总标题位置
function logo_position(singular_or_not){
	let page_width = $('#page').width();
	let col1_width = $('#col1').width();
	let m_left = 0
	if(yes_thin == 1){

	}
	else {
		let min_width = page_width - 270;
		if(page_width >= 1871){
			title_position_m = 1574 - 70 - 247;
		}
		else if(page_width >= 1323){
			m_left = (page_width - 1323) / 2;
			title_position_m = 1053 + m_left - 70 - 247;
		}
		else {
			m_left = (page_width - 803) / 2;
			title_position_m = 533 + m_left - 70 - 247;
		}
		title_position_s = page_width / 2 - 70 -247;
		if(singular_or_not == "m"){
			$('#logoright').css('margin-left',parseInt(title_position_m) + "px");
		}
		else if(singular_or_not == "s"){
			$('#logoright').css('margin-left',parseInt(title_position_s) + "px");
		}
	}
}

function runEffectout() {
	$("#button-out").toggle("slide", {
		direction: "up"
	}, 800);
	$(".nav-menu li").toggle("slide", {
		direction: "up"
	}, 600);
	$("#nav_menu_left").toggle("slide", {direction: "up"}, 600,function(){
		$('#bili_player').toggle("slide", {direction: "up"}, 600);
		let ptbder = document.getElementsByClassName('ptbder');
		let ia = 0;
		for(let iii=0; iii<ptbder.length; iii++){
			$(ptbder[iii]).toggle("slide", {direction: "up"}, 600,function(){
			    ia = iii+1;
				if(ia == ptbder.length){
					img_fix();
					m_img_fix();
					fix_code();
					let sideber_li_ul = document.querySelectorAll('#sidebar li ul');
					for(let ii=0; ii<sideber_li_ul.length; ii++){
						$(sideber_li_ul[ii]).toggle("slide",{direction: "up"},600,function(){
							let iia = ii+1;
							if(iia === sideber_li_ul.length){
								if(sidebar_fix_bool){
									sidebar_fix();
								}
								$("#sidebar li select").toggle("slide", {direction: "up"}, 600);
								$(".avatar_container").toggle("slide", {direction: "up"}, 600);
								$('#weibo').toggle("slide", {direction: "up"}, 600,function(){
									if(sidebar_fix_bool){
										sidebar_weibo_a();
									}
									$("#logoright").animate({marginLeft:title_position_s + "px"}, 600,function(){
										$("#button_out_right").toggle("slide", {direction: "up"}, 800);
										$("#button-in").toggle("slide", {direction: "up"}, 800);
										$("#button_out_left").toggle("slide", {direction: "up"}, 800);
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
		let ptbder = document.getElementsByClassName('ptbder');
		for(let iii=0; iii<ptbder.length; iii++){
			$(ptbder[iii]).toggle("slide", {direction: "up"}, 600,function(){
			    let ia = iii+1;
				if(ia === ptbder.length){
					let sideber_li_ul = document.querySelectorAll('#sidebar li ul');
					for(let ii=0; ii<sideber_li_ul.length; ii++){
						$(sideber_li_ul[ii]).toggle("slide",{direction: "up"},600,function(){
							let iia = ii+1;
							if(iia === sideber_li_ul.length){
								$("#sidebar li select").toggle("slide", {direction: "up"}, 600);
								$(".avatar_container").toggle("slide", {direction: "up"}, 600);
								$('#weibo').toggle("slide", {direction: "up"}, 600);
								$("#button-out").toggle("slide", {direction: "up"}, 800,function(){
									if(yes_thin != 1){
										$("#logoright").animate({marginLeft:title_position_m + "px"}, 600);
									}
								});
							}
						});
					}
				}
			});
		}
	});
}

function m_img_fix(){
	let img;
	let figure_array = document.querySelectorAll('.wp-block-gallery');
	if(figure_array.length > 0){
		for(let i = 0; i < figure_array.length; i++){
			img = figure_array[i].querySelectorAll('ul li figure a');
			for(let ii = 0; ii < img.length; ii++) {
				$(img[ii]).attr('target','_blank');
			}
		}
	}
}

function gallery_fix(){
	$('.blocks-gallery-caption').each(function(){
		$(this).css('border','none');
	});
	$('.blocks-gallery-item').each(function () {
		//$(this).css('marginLeft',7);
		//$(this).css('marginRight',7);
		let img = this.querySelector('figure a img');
		$(img).height(100);
		$(img).css('border','none');
		$(img).css('marginLeft',0);
		$(img).css('marginBottom',0);
		$(img).css('padding',0);

	});
	$('.wp-block-gallery').each(function(){
		$(this).css('borderTopStyle','solid');
		$(this).css('borderTopWidth','1px');
		$(this).css('borderBottomStyle','solid');
		$(this).css('borderBottomWidth','1px');
	});
}

function img_fix(){
	let img;
	let figure_width;
	let figure_height;
	let img_width;
	let img_height;
	let bili;
	let get_pos;
	$('.wp-block-image').each(function () {
		img = this.querySelector('figure img');
		img_width = $(img).attr('width');
		if(img_width != 0) {
			img_height = $(img).attr('height');
			bili = img_height / img_width;
			figure_width = this.offsetWidth;
			get_pos = this.querySelector('.aligncenter');
			if (get_pos) {
				if (img_width > figure_width) {
					figure_width = figure_width - 20;
					figure_height = figure_width * bili;
					$(img).width(figure_width);
					$(img).height(figure_height);
				}
			}
			get_pos = this.querySelector('.alignleft');
			if (get_pos) {
				if (img_width > figure_width / 2) {
					figure_width = (figure_width - 20) / 2;
					figure_height = figure_width * bili;
					$(img).width(figure_width);
					$(img).height(figure_height);
				}
			}
			get_pos = this.querySelector('.alignright');
			if (get_pos) {
				if (img_width > figure_width / 2) {
					figure_width = (figure_width - 20) / 2;
					figure_height = figure_width * bili;
					$(img).width(figure_width);
					$(img).height(figure_height);
				}
			}
		}

		//为了兼容图片格式的再次变化，进行修改
		img = this.querySelector('figure a img');
		img_width = $(img).attr('width');
		if(img_width != 0) {
			img_height = $(img).attr('height');
			bili = img_height / img_width;
			figure_width = this.offsetWidth;
			get_pos = this.querySelector('.aligncenter');
			if (get_pos) {
				if (img_width > figure_width) {
					figure_width = figure_width - 20;
					figure_height = figure_width * bili;
					$(img).width(figure_width);
					$(img).height(figure_height);
				}
			}
			get_pos = this.querySelector('.alignleft');
			if (get_pos) {
				if (img_width > figure_width / 2) {
					figure_width = (figure_width - 20) / 2;
					figure_height = figure_width * bili;
					$(img).width(figure_width);
					$(img).height(figure_height);
				}
			}
			get_pos = this.querySelector('.alignright');
			if (get_pos) {
				if (img_width > figure_width / 2) {
					figure_width = (figure_width - 20) / 2;
					figure_height = figure_width * bili;
					$(img).width(figure_width);
					$(img).height(figure_height);
				}
			}
		}
	});

	//以下用于兼容老版编辑器输出的文章图片
	let pw_width;
	let pw_array = document.getElementsByClassName('postwords');
	for(let ii = 0; ii<pw_array.length; ii++){
		let img_array = pw_array[ii].querySelectorAll('p img');
		if(img_array.length > 0){
			pw_width = pw_array[ii].offsetWidth;
			for(let iii = 0; iii<img_array.length; iii++){
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

	//以下用于修复meida_text
	$('.wp-block-media-text').each(function () {
		img = this.querySelector('img');
		let words = this.querySelector('.wp-block-media-text__content');
		let ih = $(img).height();
		let wh = $(words).height();
		$(img).removeAttr('width');
		$(img).attr('height',wh);
		$(img).css('object-fit','cover');
	});
}


function sidebar_light(){
	let h2_title_array = document.getElementsByClassName('widgettitle');
	let number = h2_title_array.length;
	let number1 = number;
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
	let searchsubmit = document.querySelectorAll("#searchsubmit");
	if(searchsubmit.length > 0){
		for(let i=0; i < searchsubmit.length; i++){
			searchsubmit[i].value = "";
		}
	}
}

function nav_menu_left(){
	let nav_menu_left = document.getElementById("nav_menu_left");
	if(!nav_menu_left){return;}
	let nav_tx = nav_menu_left.getContext("2d");
	nav_tx.scale(2,2);
	nav_tx.beginPath();
	nav_tx.moveTo(100,29);
	nav_tx.lineTo(0,29);
	nav_tx.lineTo(30,1);
	nav_tx.lineTo(100,1);
	nav_tx.strokeStyle = "#58c7ee";
	nav_tx.lineWidth = 2;
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
	let button_out_left = document.getElementById("button_out_left");
	if(!button_out_left){return;}
	let button_tx = button_out_left.getContext("2d");
	button_tx.scale(2,2);
	button_tx.beginPath();
	button_tx.moveTo(0,1);
	button_tx.lineTo(75,1);
	button_tx.moveTo(75,60);
	button_tx.lineTo(0,29);
	button_tx.lineWidth = 2;
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
	button_tx.lineTo(40,24);
	button_tx.lineTo(0,24);
	button_tx.lineWidth = 1;
	button_tx.strokeStyle = "#58c7ee";
	button_tx.globalAlpha = 1;
	button_tx.stroke();
}

function button_out_right(){
	let button_out_right = document.getElementById("button_out_right");
	if(!button_out_right){return;}
	let button_tx = button_out_right.getContext("2d");
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
	button_tx.moveTo(0,1);
	button_tx.lineTo(32,1);
	button_tx.lineTo(49,20);
	button_tx.lineTo(49,39);
	button_tx.lineTo(25,39);
	button_tx.lineTo(0,60);
	button_tx.lineWidth = 2;
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
	let comment_left = document.getElementById("comment_left");
	if(!comment_left){return;}	
	let com_tx = comment_left.getContext("2d");
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
	let comment_right = document.getElementById("comment_right");
	if(!comment_right){return;}
	let com_tx = comment_right.getContext("2d");
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
    com_tx.beginPath();
    com_tx.moveTo(4,84);
    com_tx.lineTo(4,21);
    com_tx.lineTo(0,21);
    com_tx.strokeStyle = "#58c7ee";
	com_tx.lineWidth = 2;
	com_tx.stroke();
}

function comment_bottom(){
	let comment_bottom = document.getElementById("comment_bottom");
	if(!comment_bottom){return;}
	let com_tx = comment_bottom.getContext("2d");
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
	let postwords_left = document.getElementById("postwords_left");
	if(!postwords_left){return;}
	let pos_tx = postwords_left.getContext("2d");
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
	let postwords_bottom = document.getElementById("postwords_bottom");
	if(!postwords_bottom){return;}
	let pos_tx = postwords_bottom.getContext("2d");
	pos_tx.scale(2,2);
	pos_tx.beginPath();
	pos_tx.moveTo(579,58);
	pos_tx.lineTo(400,58);
	pos_tx.lineTo(320,164);
	pos_tx.strokeStyle = "#58c7ee";
	pos_tx.lineWidth = 1;
    pos_tx.stroke();
    pos_tx.beginPath();
    pos_tx.moveTo(579,19);
	pos_tx.lineTo(0,19);
    pos_tx.strokeStyle = "#58c7ee";
	pos_tx.lineWidth = 2;
    pos_tx.stroke();
} 

function title_right(){
	let title_right = document.getElementsByClassName("title_right");
	for(let i=0; i<title_right.length; i++){
		let tit_tx = title_right[i].getContext("2d");
		let wid = title_right[i].offsetWidth;
		let x = wid;
		tit_tx.scale(2,2);
		tit_tx.beginPath();
		tit_tx.moveTo(0,0);
		let y = wid/6;
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
	let title_left = document.getElementsByClassName("title_left");
	for(let i=0; i<title_left.length; i++){
		let tit_tx = title_left[i].getContext("2d");
		let wid = title_left[i].offsetWidth;
		let y = wid*2/3;
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
	let date1_right = document.getElementsByClassName("date1_right");
	for(let i=0; i<date1_right.length; i++){
		let dat_tx = date1_right[i].getContext("2d");
		let wid = date1_right[i].offsetWidth;
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
	let date1_left = document.getElementsByClassName("date1_left");
	for(let i=0; i<date1_left.length; i++){
		let dat_tx = date1_left[i].getContext("2d");
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
	let logo_right = document.getElementsByClassName("logo_right");
	for(let i=0; i<logo_right.length; i++){
		let log_tx = logo_right[i].getContext("2d");
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
	let logo_left = document.getElementsByClassName("logo_left");
	for(let i=0; i<logo_left.length; i++){
		let log_tx = logo_left[i].getContext("2d");
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
	let left_top = document.getElementById("left_top");
	let lef_tx = left_top.getContext("2d");
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
	let postwords_top = document.getElementsByClassName("postwords_top");
	for(let i=0; i<postwords_top.length; i++){
		let pos_tx = postwords_top[i].getContext("2d");
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
	let date_right = document.getElementsByClassName("date_right");
	for(let i=0; i<date_right.length; i++){
		let dat_tx = date_right[i].getContext("2d");
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
	let date_left = document.getElementsByClassName("date_left");
	for(let i=0; i<date_left.length; i++){
		let dat_tx = date_left[i].getContext("2d");
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
	let title_right_single = document.getElementById("title_right_single");
	if(!title_right_single){return;}
	let tit_tx = title_right_single.getContext("2d");
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
	let title_left_single = document.getElementById("title_left_single");
	if(!title_left_single){return;}
	let tit_tx = title_left_single.getContext("2d");
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
	let date1_left_single = document.getElementById("date1_left_single");
	if(!date1_left_single){return;}
	let dat_tx = date1_left_single.getContext("2d");
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
	let date1_right_single = document.getElementById("date1_right_single");
	if(!date1_right_single){return;}
	let dat_tx = date1_right_single.getContext("2d");
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
	let pw = $(".single_postwords");
	if(pw == null){return;}
    let hei_pw = pw.outerHeight();
    document.getElementById("postwords_left_single").height = hei_pw;
    $("#postwords_left_single").css("height",hei_pw);
	let pos_tx = document.getElementById("postwords_left_single").getContext("2d");
	pos_tx.beginPath();
	//pos_tx.scale(2,2);
	pos_tx.moveTo(27,0);
	pos_tx.lineTo(27,hei_pw);
	pos_tx.lineWidth = 1;
	pos_tx.strokeStyle = "#58c7ee";
    pos_tx.stroke();
    if(hei_pw<85){return;}
	pos_tx.beginPath();
	pos_tx.moveTo(27,hei_pw);
	pos_tx.lineTo(27,hei_pw-15);
	pos_tx.moveTo(27,hei_pw-35);
	pos_tx.lineTo(27,hei_pw-50);
	pos_tx.moveTo(27,hei_pw-70);
	pos_tx.lineTo(27,hei_pw-85);
	pos_tx.lineWidth = 3;
	pos_tx.strokeStyle = "#ffffff";
    pos_tx.stroke();
    if(hei_pw<145){return;}
	pos_tx.beginPath();
	pos_tx.moveTo(27,60);
	pos_tx.lineTo(27,75);
	pos_tx.moveTo(27,95);
	pos_tx.lineTo(27,110);
	pos_tx.moveTo(27,130);
	pos_tx.lineTo(27,145);
    pos_tx.stroke();
    if(hei_pw<270){return;}
	pos_tx.beginPath();
	pos_tx.moveTo(27,185);
	pos_tx.lineTo(27,200);
	pos_tx.moveTo(27,220);
	pos_tx.lineTo(27,235);
	pos_tx.moveTo(27,255);
    pos_tx.lineTo(27,270);
    pos_tx.stroke();
}
 
function postwords_right_single(){
	let pw = $(".single_postwords");
	if(pw == null){return;}
    let hei_pw = pw.outerHeight();
	document.getElementById("postwords_right_single").height = hei_pw;
    $("#postwords_right_single").css("height",hei_pw);
	let pos_tx = document.getElementById("postwords_right_single").getContext("2d");
    pos_tx.beginPath();
    if(hei_pw<120){
        pos_tx.moveTo(40,hei_pw);
        pos_tx.lineTo(40,0);
        pos_tx.lineWidth = 1;
        pos_tx.strokeStyle = "#58c7ee";
	    pos_tx.stroke();
        return;
    }
	pos_tx.moveTo(32,hei_pw-120);
	pos_tx.lineTo(32,hei_pw-100);
	pos_tx.lineTo(47,hei_pw-100);
	pos_tx.lineTo(47,hei_pw-120);
	pos_tx.closePath();
	pos_tx.lineWidth = 3;
	pos_tx.strokeStyle = "#58c7ee";
    pos_tx.stroke();
    if(hei_pw<218){return;}
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
	pos_tx.moveTo(70,hei_pw-40);
	pos_tx.lineTo(70,hei_pw-90);
	pos_tx.stroke();
}

function datei_left_single(){
	let datei_left_single = document.getElementById("datei_left_single");
	if(!datei_left_single){return;}
	let dat_tx = datei_left_single.getContext("2d");
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
	let datei_bottom_single = document.getElementById("datei_bottom_single");
	if(!datei_bottom_single){return;}
	let dat_tx = datei_bottom_single.getContext("2d");
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
	let hei_px;
	let li_array = document.querySelectorAll("#sidebar li ul li");
	for(let i=0; i<li_array.length; i++){
		let li_left = document.createElement('canvas');
		let li_left_height = li_array[i].offsetHeight;
		if(li_left_height === 0){return;}
		li_left.height = li_left_height + 10;
		li_left.width = "57";
		hei_px = li_left_height + 10 + "px";
		li_left.style.height = hei_px;
		li_left.style.width = "20%";
		li_left.style.float = "left";
		li_left.className = "li_left";
		let li_tx = li_left.getContext("2d");
		li_tx.beginPath();
		li_tx.moveTo(57,li_left_height);
		li_tx.lineTo(47,li_left_height-10);
		li_tx.lineWidth = 1;
		li_tx.strokeStyle = "#58c7ee";
		li_tx.stroke();
		$(li_left).insertBefore(li_array[i]);
		let li_right = document.createElement('canvas');
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
	let hei_px;
	let sidebar_title = document.getElementsByClassName("widgettitle");
	for(let ii=0; ii<sidebar_title.length; ii++){
		let sidebar_title_height = sidebar_title[ii].offsetHeight;
		if(sidebar_title_height === 0){return;}
		let h2_left = document.createElement('canvas');
		h2_left.height = sidebar_title_height+15;
		h2_left.width = 25;
		hei_px = sidebar_title_height + 15 +"px";
		h2_left.style.height = hei_px;
		h2_left.style.width = "10%";
		h2_left.style.float = "left";
		$(h2_left).insertBefore(sidebar_title[ii]);
		let h2_tx = h2_left.getContext("2d");
		h2_tx.beginPath();
		h2_tx.moveTo(25,sidebar_title_height);
		h2_tx.lineTo(10,sidebar_title_height-15);
		h2_tx.lineWidth = 2;
		h2_tx.arc(7,sidebar_title_height-18,3,0,Math.PI*2,false);
		h2_tx.strokeStyle = "#58c7ee";
		h2_tx.stroke();
		let h2_right = document.createElement('canvas');
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
	let weibo = document.getElementsByClassName('weibo_text');
	for(let i=0; i<weibo.length; i++){
		let text = $(weibo[i]).html();
		let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
		text = text.replace(reg, "<a href='$1$2' target=_blank>$1$2</a>");
		weibo[i].innerHTML = text;
		sidebar_fix_bool = false;
	}
}

function mobile_buttom_up() {
	let buttom_up = document.getElementsByClassName("mobile_button_up");
	if(!buttom_up){return;}
	for(let i = 0; i < buttom_up.length; i++){
		let dat_tx = buttom_up[i].getContext("2d");
		dat_tx.beginPath();
		dat_tx.scale(2,2);
		dat_tx.moveTo(0,0);
		dat_tx.lineTo(0,43);
		dat_tx.lineTo(43,43);
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.fillStyle = "#58c7ee";
		dat_tx.fill();
	}
}

function mobile_buttom_down() {
	let buttom_down = document.getElementsByClassName("mobile_button_down");
	if(!buttom_down){return;}
	for(let i = 0; i < buttom_down.length; i++){
		let dat_tx = buttom_down[i].getContext("2d");
		dat_tx.beginPath();
		dat_tx.scale(2,2);
		dat_tx.moveTo(43,0);
		dat_tx.lineTo(0,0);
		dat_tx.lineTo(0,43);
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.fillStyle = "#58c7ee";
		dat_tx.fill();
	}
}

function mobile_sidebar_up() {
	let sidebar_up = document.getElementsByClassName("mobile_sidebar_up");
	if(!sidebar_up){return;}
	for(let i = 0; i <sidebar_up.length; i++){
		let dat_tx = sidebar_up[i].getContext("2d");
		dat_tx.beginPath();
		dat_tx.scale(2,2);
		dat_tx.moveTo(0,1);
		dat_tx.lineTo(210,1);
		dat_tx.lineTo(230,19);
		dat_tx.lineTo(0,19);
		dat_tx.lineWidth = 2;
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.globalAlpha = 0.2;
		dat_tx.fillStyle = "#58c7ee";
		dat_tx.fill();
	}
}

function mobile_sidebar_down() {
	let sidebar_down = document.getElementsByClassName("mobile_sidebar_down");
	if(!sidebar_down){return;}
	for(let i = 0; i <sidebar_down.length; i++){
		let dat_tx = sidebar_down[i].getContext("2d");
		dat_tx.beginPath();
		dat_tx.scale(2,2);
		dat_tx.moveTo(0,1);
		dat_tx.lineTo(230,1);
		dat_tx.lineTo(210,19);
		dat_tx.lineTo(0,19);
		dat_tx.lineWidth = 2;
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.globalAlpha = 0.2;
		dat_tx.fillStyle = "#58c7ee";
		dat_tx.fill();
	}
}

function col3_sidebar_action() {
	let col3_con1 = false;
	let col3_con2 = false;
	let col3_out = false;
	let col3_out_in;
	let col3_con1_block;
	let col3_con2_block;
	function col3_control_key() {
		col3_out_in = document.getElementsByClassName("move_right");
		if(col3_out_in.length > 0 ){
			col3_out = true;
		}
		else {
			col3_out = false;
		}
		col3_con1_block = document.getElementsByClassName("col3_con1_display_block");
		if(col3_con1_block.length > 0){
			col3_con1 = true;
		}
		else{
			col3_con1 = false;
		}
		col3_con2_block = document.getElementsByClassName("col3_con2_display_block");
		if(col3_con2_block.length > 0){
			col3_con2 = true;
		}
		else {
			col3_con2 = false;
		}
	}
	$("#to_right_buttom").click(function () {
		col3_control_key();
		if(!col3_out){
			$("#col3_con2").removeClass("col3_con2_display_block");
			$('#col3_con2').addClass("col3_con2_display_none");
			$("#col3_con1").removeClass("col3_con1_display_none");
			$('#col3_con1').addClass("col3_con1_display_block");
			$( ".move_left" ).switchClass( "move_left","move_right",600 );
		}
		else if(col3_out && col3_con1){
			$( ".move_right" ).switchClass( "move_right","move_left",600, "swing",function () {
				$( "#col3_con1" ).switchClass( "col3_con1_display_block","col3_con1_display_none",600 );
			});
		}
		else if(col3_out && col3_con2){
			$("#col3_con2").removeClass("col3_con2_display_block");
			$('#col3_con2').addClass("col3_con2_display_none");
			$("#col3_con1").removeClass("col3_con1_display_none");
			$('#col3_con1').addClass("col3_con1_display_block");
		}
	});
	$("#page_to_right_buttom").click(function () {
		col3_control_key();
		if(!col3_out){
			$("#col3_con1").removeClass("col3_con1_display_block");
			$('#col3_con1').addClass("col3_con1_display_none");
			$("#col3_con2").removeClass("col3_con2_display_none");
			$('#col3_con2').addClass("col3_con2_display_block");
			$( ".move_left" ).switchClass( "move_left","move_right",600 );
		}
		else if(col3_out && col3_con2){
			$( ".move_right" ).switchClass( "move_right","move_left",600 , "swing",function () {
				$( ".col3_con2_display_block" ).switchClass( "col3_con2_display_block","col3_con2_display_none",600 );
			});
		}
		else if(col3_out && col3_con1){
			$("#col3_con1").removeClass("col3_con1_display_block");
			$('#col3_con1').addClass("col3_con1_display_none");
			$("#col3_con2").removeClass("col3_con2_display_none");
			$('#col3_con2').addClass("col3_con2_display_block");
		}
	});
}

function fit_screen(page_width) {
	if (page_width >= 1871) {
		yes = 1;
	} else {
		yes = 0;
	}
	if (page_width < 803) {
		yes_thin = 1;
	} else {
		yes_thin = 0;
	}
	if(page_width >= 803 && page_width < 1323 ){
		yes_middle = 1;
	}
	else {
		yes_middle = 0;
	}
}

function need_cookie(page_width) {
	let check_name = "page_width=";
	let co_array = document.cookie.split(';');
	let check_same = false;
	for (let i = 0; i < co_array.length; i++) {
		let co = co_array[i].trim();
		if (co.indexOf(check_name) == 0) {
			let check_width = co.substring(check_name.length, co.length);
			if (check_width != page_width) {
				document.cookie = "width_bool=" + yes;//yes是公用变量，值在上面fit_screem中进行定义
				document.cookie = "width_thin_bool=" + yes_thin;
				document.cookie = "page_width=" + page_width;
				location.reload();
			} else {
				check_same = true;
				break;
			}
		}
	}
	if (!check_same) {
		document.cookie = "width_bool=" + yes;
		document.cookie = "width_thin_bool=" + yes_thin;
		document.cookie = "page_width=" + page_width;
		setCookie('from_site',null);
		location.reload();
	}
}

function find_point_img() {
	let middle_line = document.body.clientWidth / 2;
	$('.blocks-gallery-item').each(function () {
		$(this).mouseenter(function () {
			let img_div = this.querySelector('figure a img');
			let img_src = $(img_div).attr('src');
			let ajax_img_width = img_div.naturalWidth;
			let ajax_img_height = img_div.naturalHeight;
			let bili_width_height = ajax_img_width / ajax_img_height;
			let screen_heigth = document.body.clientHeight;
			if(ajax_img_width > middle_line){
				ajax_img_width = middle_line - 100;
				ajax_img_height = ajax_img_width / bili_width_height;
			}
			if(ajax_img_height > screen_heigth){
				ajax_img_height = screen_heigth / 1.5;
				ajax_img_width = ajax_img_height * bili_width_height;
			}
			let pos = this.getBoundingClientRect();
			let x = pos.left;
			let y = pos.top;
			if(y < 0){
				y = 0;
			}
			if(x < 0){
				x = 0;
			}
			let large_x = 0;
			let large_y = 0;
			let bottom_y = screen_heigth - y;//计算位置纵坐标到底部的距离，从而可以对比图片高度
			if(bottom_y < ajax_img_height){
				large_y = screen_heigth - ajax_img_height - 40;
			}
			else{
				large_y = y;
			}
			//图片展示的位置应该以相集的位置和宽度为基点，稳定显示在相集右侧或左侧，从而不遮挡相集其他图片
			let gallery_width = $(this).parent().width();
			let gallery_left = this.parentNode.getBoundingClientRect().left;
			//下方的数字代表定位时应该增加border和padding的距离，再加上一个余量
			if(x < middle_line){
				large_x = gallery_left + gallery_width + 5;
			}
			else {
				large_x = gallery_left - ajax_img_width - 19;
			}
			$.ajax({
				url:'https://www.redonleft.com/wp-content/themes/blackhack/ajax/ajax_show_img.php',
				method: 'GET',
				data:{
					img_src:img_src,
					imgwidth:ajax_img_width,
					imgheight:ajax_img_height
				},
				success:function (result) {
					$("#show_large_image").html(result);
					$("#show_large_image").css("left",large_x+"px");
					$("#show_large_image").css("top",large_y+"px");
					$("#show_large_image").show('size',300);
				}
			});
		});
		$(this).mouseleave(function () {
			$('#show_large_image').mouseleave(function () {
				close_ajax_img();
			});
		});
	});
}

function close_ajax_img() {
	$("#show_large_image").html("");
	$("#show_large_image").css("left",0+"px");
	$("#show_large_image").css("top",0+"px");
	$("#show_large_image").css("display","none");
}

function fix_code(){
	let block_code_array = document.querySelectorAll(".wp-block-code");
	if( block_code_array == null){
		return;
	}
	for(let i = 0; i < block_code_array.length; i++){
		let code = block_code_array[i].querySelector("code");
		let code_height = code.offsetHeight;
		let enter_num = code_height / 14;//默认字体大小为15px，code字体为0.8em，行高1.2em，所以单行高为14.4px，四舍五入为14
		let ul_node = document.createElement("UL")//创建ul node
		ul_node.setAttribute("class","code_list_num");//设置ul的class名称
		for(let ii = 1; ii <= enter_num; ii++){
			let li_node = document.createElement("LI");
			let li_node_text = document.createTextNode(ii);//创建li内容
			li_node.appendChild(li_node_text);//将li内容填入li标签内
			ul_node.appendChild(li_node);//将li填入ul内
		}
		block_code_array[i].appendChild(ul_node);//将ul填入选中的wp-block-code内
	}
}

function weibo_user_left(){
	let user_left = document.getElementsByClassName("weibo_user_left");
	if(!user_left){
		return;
	}
	for(let i = 0; i <user_left.length; i++){
		let dat_tx = user_left[i].getContext("2d");
		dat_tx.beginPath();
		dat_tx.scale(2,2);
		dat_tx.moveTo(20,24);
		dat_tx.lineTo(40,24);
		dat_tx.lineTo(40,0);
		dat_tx.closePath();
		dat_tx.globalAlpha = 0.2;
		dat_tx.fillStyle = "#58c7ee";
		dat_tx.fill();
		dat_tx.beginPath();
		dat_tx.moveTo(20,24);
		dat_tx.lineTo(40,0);
		dat_tx.globalAlpha = 1;
		dat_tx.lineWidth = 1;
		dat_tx.strokeStyle = "#58c7ee";
		dat_tx.stroke();
		dat_tx.beginPath();
		dat_tx.moveTo(12,24);
		dat_tx.lineTo(32,0);
		dat_tx.lineWidth = 3;
		dat_tx.lineCap="round";
		dat_tx.lineJoin="round";
		dat_tx.stroke();
	}
}

function title_hover() {
	let title_button = document.querySelectorAll(".title_content");
	if(title_button.length == 0){
		return;
	}
	for(let i =0; i < title_button.length; i++){
		$(title_button[i]).mouseenter(function () {
			let title_b = this.querySelector('.title_background');
			$(title_b).toggle("fade",500);
		})
		$(title_button[i]).mouseleave(function () {
			let title_b = this.querySelector('.title_background');
			$(title_b).toggle("fade",500);
		})
	}
}

function single_page_fix_size(){
	let post = $(".single_postwords");
	if(post == null){return;}
    let post_height = post.outerHeight();
    $('.postborder').height(post_height);
}

function load_time(){
	let load_div = document.createElement("div");
	load_div.innerHTML = "正在加载中……";
	load_div.id = 'load_mask';
	let pw_width = $('#border').width();
	let client_height = document.documentElement.clientHeight;
	load_div.style.width = pw_width;
	load_div.style.height = '100%';
	load_div.style.lineHeight = client_height+"px";
	//console.log(load_div);
	$("#border").prepend(load_div);
	$('.mask-main').css('filter','blur(10px)');
}

function getCookie(name){
	let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		return decodeURI(arr[2]);
	}
	else{
		return null;
	}
}

function setCookie(name,value){
	document.cookie = name + "="+ encodeURI(value) + ";expires=0";
}

function border_loop() {
	$('.border_top').animate({
		right:"0px",
		left:'50px'
	}, 2000, 'linear', function () {
		$('.border_right').animate({
			top:'100%',
			bottom:'-40px'
		},2000,'linear',function () {
			$('.border_right').css({
				top: '-40px',
				bottom: '100%'
			});
		});
		$('.border_top').animate({
			right:"-100px",
			left:'100%'
		},500,'linear',function () {
			$('.border_top').css({
				right: '100%',
				left: '-100px'
			});
		});
	});

	$('.border_bottom').animate({
		right:"50px",
		left:'0px'
	}, 2000, 'linear', function () {
		$('.border_left').animate({
			top:'-40px',
			bottom:'100%'
		},2000,'linear',function () {
			$('.border_left').css({
				top: '100%',
				bottom: '-40px'
			});
		});
		$('.border_bottom').animate({
			right:"100%",
			left:'-100px'
		},500,'linear',function () {
			$('.border_bottom').css({
				right: '-100px',
				left: '100%'
			});
		});
	});
}

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
	switch(arguments.length){
		case 1:
			return parseInt(Math.random()*minNum+1,10);
			break;
		case 2:
			return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
			break;
		default:
			return 0;
			break;
	}
}

function up_down (dom){
	let find_content = $(dom).find('.border_shadow_content');
	find_content.animate({
		top: "-5px",
		left: "7px"
	},500,'linear',function () {
		find_content.animate({
			top: "-5px",
			left: "7px"
		},500,'linear',function () {
			find_content.animate({
				top: "0px",
				left: "0px"
			},500,'linear',function () {
				find_content.animate({
					top: "0px",
					left: "0px"
				},500,'linear',function () {
					let next_time = randomNum(1,1000);
					let new_clock = setTimeout(function () {
						up_down(dom);
					},next_time);
				});
			});
		});
	});
}

function different_start() {
	let start_time = 0;
	let clock_num = new Array();
	let border_array = document.querySelectorAll('.post');
	for(let i = 0; i < border_array.length; i++){
		start_time = randomNum(1,500);
		clock_num[i] = setTimeout(function () {
			up_down(border_array[i]);
		},start_time);
	}
}

//站点封面函数
function insert_div() {
	fix_area_position();
	let background_anime = cover_anmie();
	press_enter(background_anime);
	$('#cover_bottom').show('slide',{direction:'down'},500);
	$('#cover_top').show('slide',{direction:'up'},500,function () {
		$('#text_area').show('fade',{ to: { width: 300, height: 500 } },500);
		$('#svg_area').show('fade',{ to: { width: 300, height: 500 } },500,function () {
			$('#text_area').animate({height:'500px'},500,'linear');
			$('#svg_area').animate({height:'500px'},500,'linear',function () {
				let c = new coder('text_area');
				let time_now = getCurrentDate();
				c.load("<div class='writecode'>>>时间"+time_now+"</div>",500);
				c.load("<div class='writecode'>>>完成加密链接</div>");
				c.load("<div class='writecode'>>>已获取访问权限</div>");
				c.load("<div class='writecode'>>>完成网站引导界面启动</div>");
				c.load("<div class='writecode'>>>这里是redonleft.com</div>");
				c.load("<div class='writecode'>>></div>");
				c.load("<div class='writecode'>>>开始读取网站文本……</div>",2000);
				c.load("<div class='writecode'>>>完成读取！</div>",3000);
				c.load("<div class='writecode'>>></div>");
				c.load("<div class='writecode'>>>开始构建网站结构……</div>");
				c.load("<script>all_path_animate();</script>");
				c.load("<div class='writecode'>>>完成构建！</div>",3500);
				c.load("<div class='writecode'>>></div>");
				c.load("<div class='writecode'>>>开始准备网站特效……</div>");
				c.load("<div class='writecode'>>>正在运行特效……</div>");
				c.load("<script>show_svg_shadow();</script>");
				c.load("<div class='writecode'>>>所有特效运行正常</div>",3000);
				c.load("<div class='writecode'>>></div>");
				c.load("<div class='writecode'>>>准备退出引导界面</div>");
				c.load("<div class='writecode'>>>have fun！</div>");
				c.load("<script>hide_cover("+background_anime+");</script>",2000);
			});
		});
	});
}

let coder = function (dom) {
	this._dom = dom;
}

let del = 1000;

coder.prototype = {
	constructor: coder,
	load: function(code, second) {
		let dom = this._dom;
		let use_second = 0;
		if(!second){
			use_second = 1000;
		}
		else {
			use_second = second;
		}
		del += use_second;
		setTimeout(function() {
			$("#" + dom).append(code);
			$('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight);

		}, del);
		//console.log(del);
	}
}

window.requestAnimFrame = function(){
	return (
		window.requestAnimationFrame       ||
		function(/* function */ callback){
			window.setTimeout(callback, 1000 / 60);
		}
	);
}();

window.cancelAnimFrame = function(){
	return (
		window.cancelAnimationFrame       ||
		function(id){
			window.clearTimeout(id);
		}
	);
}();

let current_frame = 0;
let total_frames = 180;
let animate_handle = 0
function all_path_animate() {
	$('#show_svg').css('display','block');
	let pt_a = new Array();
	let pt_l = new Array();
	let paths = Array.prototype.slice.call( document.querySelectorAll( 'path' ) );
	paths.forEach( function( el, i ) {
		pt_a[i] = el;
		pt_l[i] = el.getTotalLength();
		pt_a[i].style.strokeDasharray = pt_l[i] + ' ' + pt_l[i];
		pt_a[i].style.strokeDashoffset = pt_l[i];
	});
	let progress = current_frame / total_frames;
	current_frame++;
	for(let i = 0, len = pt_a.length; i < len; i++){
		pt_a[i].style.strokeDashoffset = Math.floor(pt_l[i] * (1 - progress));
		if(pt_a[i].style.strokeDashoffset < 0){
			pt_a[i].style.strokeDashoffset = 0;
		}
	}
	if(progress <= 1){
		animate_handle = window.requestAnimFrame(function (){all_path_animate();});
	}
	else {
		window.cancelAnimFrame(animate_handle);

	}
}

function show_svg_shadow() {
	$('#svg_shadow').show('fade', 2000, function () {
		$('#text_area').css('text-shadow','8px 8px 5px #00dd00');
		$('#show_svg').css({
			'transform':'rotateY(360deg)',
			'transition':'2s'
		});
	});
}

function hide_cover(f_animate) {
	clearInterval(f_animate);
	$('#cover').hide('fold',1000);
}

function getCurrentDate() {
	let now = new Date();
	let year = now.getFullYear(); //得到年份
	let month = now.getMonth();//得到月份
	let date = now.getDate();//得到日期
	let day = now.getDay();//得到周几
	let hour = now.getHours();//得到小时
	let minu = now.getMinutes();//得到分钟
	let sec = now.getSeconds();//得到秒
	month = month + 1;
	if (month < 10) month = "0" + month;
	if (date < 10) date = "0" + date;
	if (hour < 10) hour = "0" + hour;
	if (minu < 10) minu = "0" + minu;
	if (sec < 10) sec = "0" + sec;
	let time = year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;
	return time;
}

function fix_area_position(){
	let screen_width = document.body.clientWidth;
	let screen_height = document.body.clientHeight;
	let text_width = $('#text_area').outerWidth();
	let text_height = 530;
	let svg_width = $('#svg_area').outerWidth();
	let svg_height = 530;
	let text_left = (screen_width - text_width - svg_width) / 2;
	let text_top = (screen_height - text_height) / 2;
	let svg_left = text_left + text_width;
	$('#text_area').css('left',text_left+'px');
	$('#text_area').css('top',text_top+'px');
	$('#svg_area').css('left',svg_left+'px');
	$('#svg_area').css('top',text_top+'px');
}

function press_enter(f_animate) {
	$(document).keydown(function(event){
		if(event.keyCode == 8 || event.keyCode == 13 || event.keyCode == 27 || event.keyCode == 32){
			window.cancelAnimationFrame;
			hide_cover(f_animate);
		}
	});
}


//为page_nav加上get内容防止网站内部链接引发cover
function fix_page_nav_href() {
	$('.page_navi li a').each(function () {
		let href_str = $(this).attr('href');
		let from_site_str = 'from_site=1';
		if(href_str.indexOf(from_site_str) < 0){
			href_str = href_str + "&" + from_site_str;
			$(this).attr('href',href_str);
		}
	});
}

//封面背景动画函数
function cover_anmie() {
	let width, height
	let step = 0;
	let canvas = document.getElementById('bg_canvas');
	let ctx = canvas.getContext('2d');
	let travelers = new Array();
	let ctrl = {
		chanceToSplit: 0.2,
		num: 50,
		max: 50,
		fade: 0,
		draw: true,
	}

	let numAngles = 6;
	let angles = [];
	for (let i=0; i < numAngles; i++) {
		angles.push( Math.PI * 2 / numAngles * i - Math.PI/2 );
	}

	setup();

	function setup() {
		canvas.width = width = document.body.clientWidth - 4;
		canvas.height = height = document.body.clientHeight - 48;

		ctx.beginPath();
		ctx.rect(0, 0, width, height);
		ctx.fillStyle = '#000000';
		ctx.globalAlpha = 0.2;
		ctx.fill();
	}

	function Traveler(ctx, x, y, vx, vy) {
		this.x = x
		this.y = y;
		this.x1 = x
		this.y1 = y;
		this.vx = vx;
		this.vy = vy;
		this.ctx = ctx;
		this.step = 0;
		this.active = true;
		this.draw = function () {
			if (this.active) {
				ctx.beginPath();
				ctx.lineWidth = 0.8;
				ctx.strokeStyle = "#ffff00";
				ctx.globalAlpha = 1;
				ctx.moveTo(this.x1, this.y1);
				ctx.lineTo(this.x, this.y);
				ctx.stroke();
			}
		};
		this.update = function () {
			if(this.active){
				this.step ++;
				if (Math.random() < ctrl.chanceToSplit && travelers.length < ctrl.max) {
					let a = angles[Math.floor(Math.random() * angles.length)];
					let s = 0.8 + Math.random() * 10;
					let vx = Math.cos(a + Math.PI/2) * s;
					let vy = Math.sin(a + Math.PI/2) * s;
					addTraveler(this.x1, this.y1, vx, vy);
				}
				this.x1 = this.x;
				this.y1 = this.y;
				this.x += this.vx;
				this.y += this.vy;
				if (this.getColor(this.x, this.y) >= 100){
					this.active = false;
					this.die();
				}
			}
		}
		this.getColor = function (x, y) {
			let col = ctx.getImageData(x, y, 1, 1).data;
			if(col[3] === 0){//这个判断很重要，有些线段的终点坐标在浏览器外面，需要直接die
				return 999;
			}
			else {
				return col[0] + col[1] + col[2];
			}
		}

		this.die = function () {
			let i = travelers.indexOf(this);
			travelers.splice(i,1);
			delete this;

		}
	}
	let animate_loop = setInterval(animate, 50);
	return animate_loop;

	function addTraveler(x, y, vx, vy){
		let traveler = new Traveler(ctx, x, y, vx, vy);
		travelers.push(traveler);
	}

	function animate() {
		if(ctrl.draw){
			step++;
			draw();
		}
	}

	function draw () {
		let traveler;
		for (let t in travelers) {
			traveler = travelers[t];
			traveler.update();
			traveler.draw();
		}
		if(travelers.length < ctrl.num){
			let a = Math.PI/2;
			let s = 3;
			let vx = Math.cos(a) * s;
			let vy = Math.sin(a) * s;
			addTraveler(Math.random()*canvas.width, canvas.height, vx, vy);
		}
	}

	function removeTravelers() {
		while(travelers.length > 0){
			delete travelers.pop();
		}
	}
}

//用于修复插入链接产生网页预览
function embed_fix(s_or_not) {
	$('.wp-block-embed__wrapper').each(function () {
		$(this).find('blockquote').css('display','none');
		let find_iframe = $(this).find('iframe');
		find_iframe.removeAttr('width');
		find_iframe.removeAttr('height');
		if(s_or_not == 'm'){
			$(this).css('height','215px');
		}
		else if(s_or_not == 's'){
			$(this).css('height','175px');
		}
	});
}