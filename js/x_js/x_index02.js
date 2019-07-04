$('.x-serial').on('mouseover','li',function(){
    //当前边框变红 this表示鼠标指向对应的li
    $(this).addClass('x_imgchecked').siblings().removeClass('x_imgchecked');
    $('.pic').find('img').attr('src',"../img/x_img/x_img2/big"+$(this).attr("index")+".jpg");
    
})

// //商品活动倒计时

    var x_distance = document.querySelector(".x_distance")
    //活动结束 时间
    var end = new Date("2019/7/5 20:00:00");
    var now = new Date();
    var timer = null;
    //获取 两个时间的时间差
    function getDiff(start,end){
        return (end.getTime() - start.getTime())/1000;
    }
    compute();
    
    function compute(){
            //获得秒数
        var s = getDiff(now,end);
        if(s < 0){
            x_distance.innerHTML = "活动已过期";
            clearInterval(timer);
            return;
        }
        //console.log(s);
        //计算时分秒
        var hours = s/60/60;
        var d = parseInt(hours/24);
        var h = parseInt((hours/24 - d) * 24);
        var m = parseInt(((hours/24 - d) * 24 - h) * 60);
        var t = parseInt((((hours/24 - d) * 24 - h) * 60 - m) * 60);
        
        x_distance.innerHTML = "活动距结束还剩" + d +"天" + h + "时" + m + "分" + t + "秒结束";
    }
    
    //让这个时间差每秒钟递减
    timer = setInterval(function(){
        now = new Date();
        compute();
        console.log(1)
    },1000);
		
	