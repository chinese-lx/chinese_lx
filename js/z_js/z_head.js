$(function(){
	//手机二维码显示隐藏
	$('.z_phone a').mouseover(function(){
		$('.z_qrCode').show('fast','linear');
		$(this).css('background-position','33px -80px');
	});
	$('.z_qrCode').mouseout(function(){
		$('.z_qrCode').hide('fast','linear');
		$('.z_phone a').css('background-position','34px -114px');
	});
//	setInterval(function(){
//		$('.z_news p').animate({top:-15},500,'swing')
//	},1000)
	//公告轮播
	//console.log(pTop);
	var timer = setInterval(autoPlay,2000);
	$('.z_news').bind({
		
		mouseover:function(){
			console.log('mouseover');
			clearInterval(timer);
		},
		mouseout:function(){
			console.log('mouseout');
			timer = setInterval(autoPlay,2000);
		}
	})
	// $('.z_news').hover(
	// 	function(){
	// 		console.log(timer);
	// 		clearInterval(timer);
	// 	},
	// 	function(){
	// 		timer = setInterval(autoPlay,2000);
	// 	}
	// )
	
	function autoPlay(){
		var pTop = parseInt($('.z_news p').css('top'));
		if(pTop == -15){
			$('.z_news p').attr('style','top=9px');
		}
		//setTimeout(function(){
			$('.z_news p').animate({top:-15},800,'linear');
		//},1000)
	}
})
