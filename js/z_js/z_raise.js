$(function(){
	/*//轮播图切换（swiper）
	var mySwiper = new Swiper('.swiper-container', {
		//自动播放
		autoplay: {
			delay: 2000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		loop:true,
		pagination :{
            //分页器
			el: '.swiper-pagination',
			clickable :true,
        },
		effect : 'slde'  
	})
	// if(mySwiper.slides.length<=3){
	// 	mySwiper.destroy();
	// }
	//鼠标放上暂停轮播
	mySwiper.el.onmouseover = function(){ 
		mySwiper.autoplay.stop();
	}
	//鼠标离开开启轮播
	mySwiper.el.onmouseleave = function(){
		mySwiper.autoplay.start();
	}*/
	//用jQ动画设置轮播图切换
	var timer = setInterval(fn,4000);
	$('#z_banner').bind({
		mouseover:function(){
			clearInterval(timer);
		},
		mouseout:function(){
			timer = setInterval(fn,3000);
		}
	})
	function fn(){
		$('#z_banner').animate({opacity:0},'slow','swing');
		$('#z_banner').animate({opacity:1},'slow','swing');
	}
	//剩余天数
	var startDate = new Date();
	var endDate = new Date("2019-06-30 23:59:59");
	var timer = (endDate.getTime() - startDate.getTime())/1000/60/60/24;
	var lastDays = parseInt(timer);
	if(lastDays==0){
		lastDays = 0;
		$('.joinRaise_top .span2').css('background','#7e7e7e')
	}
	$('.lastDays dt').html(lastDays);
	//众筹数据
	$.ajax({
		url:'../data/z_raise.json',
		dataType:'json',
		type:'post',
		success:function(json){
			$.each(json,function(index,value){
				if (index == 0 ) {
					$('.joinRaise .joinRaise_top .span1 a').html(value.title);
					$('.joinRaise .details').html(value.details);
					$('.joinRaise .raiseInfor .raiseMoney').html(value.raiseMoney);
					$('.joinRaise .raiseInfor .targetMoney ').html(value.targetMoney);
					$('.joinRaise .raiseInfor .person ').html(value.person);
					var progress = (value.raiseMoney.substr(1)/value.targetMoney.substr(1)*100).toFixed(1)+'%';
					$('.joinRaise .raiseInfor .progress').html(progress);
				}
			})
		}
	})

})