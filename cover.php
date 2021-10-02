<div id="cover">
    <div id="cover_top" class="cover_border"></div>
    <canvas id="bg_canvas"></canvas>
	<div id="text_area"></div>
	<div id="svg_area">
		<svg class="line-drawing" id="svg_shadow" preserveAspectRatio="xMaxYMin meet" xmlns="http://www.w3.org/2000/svg" ">
		<defs>
			<filter id="f1" x="0" y="0" width="200%" height="200%">
				<feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
				<feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
				<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
			</filter>
		</defs>
		<path id="svg_1" d="m112,32 c4,370 153.98767,400 296,420" filter="url(#f1)"/>
		<path id="svg_2" d="m112,32 c-1,-1 72,51 380,54" filter="url(#f1)"/>

		<path id="svg_4" d="m490,85 l 0, 80 c -80,17 -85,55 -84,213 c-31,2 -100,-9 -159,-40 c12,22 45,62 159,87 l0,28" filter="url(#f1)"/>
		<path id="svg_6" d="m175,150 c0,0 10,90 165,80 c-5,-26.54687 -20,-90 -165,-80" filter="url(#f1)"/>
		</svg>
		<svg class="line-drawing" id="show_svg" preserveAspectRatio="xMaxYMin meet" xmlns="http://www.w3.org/2000/svg" ">
		<path id="svg_1" d="m112,32 c4,370 153.98767,400 296,420"/>
		<path id="svg_2" d="m112,32 c-1,-1 72,51 380,54"/>

		<path id="svg_4" d="m490,85 l 0, 80 c -80,17 -85,55 -84,213 c-31,2 -100,-9 -159,-40 c12,22 45,62 159,87 l0,28"/>
		<path id="svg_6" d="m175,150 c0,0 10,90 165,80 c-5,-26.54687 -20,-90 -165,-80"/>
		</svg>
	</div>
    <div id="notice_area">点击空格或回车或ESC按钮都可以跳过本动画/Press Enter or ESC or Space to skip this animation</div>
    <div id="cover_bottom" class="cover_border"></div>
</div>
<script>
    insert_div();
</script>