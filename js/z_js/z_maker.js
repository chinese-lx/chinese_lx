$(function(){
	//轮播图切换
	var mySwiper = new Swiper('#z_banner', {
		//自动播放
		autoplay: {
			delay: 500,
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

	
	
	
	
	
})