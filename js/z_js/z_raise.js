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
})