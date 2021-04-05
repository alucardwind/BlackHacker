<head>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.js"></script>
    <style>
        body{
            background:black;
        }
        #box{
            width: 150px;
            height: 8px;
            background-image: radial-gradient(closest-side at 50% 50%,rgba(88, 199, 238, 1), rgba(0, 0, 0, 0));
            /*background-image: radial-gradient(closest-side at 50% 50%,rgba(255, 0, 0, 0.9), rgba(0, 0, 0, 0));*/
            background-repeat: no-repeat;
            position: fixed;
        }
    </style>
</head>
<body>
<div id="box">
</div>
<script>
    let body_width = $('body').width();
    let box_width = $('#box').width();
    let limit_width = body_width - box_width;
    let need_distance = 100;
    let distance = need_distance;
    let postion = 0;
    let run_right = true;
    let timer = setInterval(function(){run(distance)},1000)
    function run(d){
        if(postion >= limit_width){
            run_right = false;
        }
        else if(postion <= 0){
            run_right = true;
        }
        if(!run_right){
            d = -d;
        }
        postion += d
        $('#box').animate({
            left: postion+'px'
        },1000,'linear');
    }
</script>
</body>
