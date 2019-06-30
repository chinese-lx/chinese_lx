$(function(){
	//轮播图切换
	var mySwiper = new Swiper('#z_banner', {
		//自动播放
		autoplay: {
			delay: 1000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		loop:true,
		//分页器
		pagination :{
			el: '.swiper-pagination',
			clickable :true,
		}
	})
	//鼠标放上暂停轮播
	mySwiper.el.onmouseover = function(){ 
		mySwiper.autoplay.stop();
	}
	//鼠标离开开启轮播
	mySwiper.el.onmouseleave = function(){
		mySwiper.autoplay.start();
	}
	//分页器上的字
	$('.paging span:eq(0)').html('小新美图定制');
	$('.paging span:eq(1)').html('ThinkPad美图定制');
	$('.paging span:eq(2)').html('ThinkPad专属定制');
	$('.paging span:eq(3)').html('联想拯救者专属定制');	
})