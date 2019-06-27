$(function(){
	//手机二维码显示隐藏
	$('.z_phone a').mouseover(function(){
		$('.z_qrCode').slideDown('fast','linear');
		$(this).css('background-position','33px -71px');
	});
	$('.z_phone a').mouseout(function(){
		$('.z_qrCode').slideUp('fast','linear');
		$(this).css('background-position','34px -105px');
	});
	//公告轮播
	//清除计时器有点问题
	var timer = setInterval(autoPlay,2000);
	$('.z_news').bind({
		mouseover:function(){
			clearInterval(timer);
		},
		mouseout:function(){
			timer = setInterval(autoPlay,2000);
		}
	})
	function autoPlay(){
		var aTop = parseInt($('.z_news p a').css('marginTop'));
		if(aTop == -50){
			$('.z_news p a').css('marginTop','-23px');
		}
		setTimeout(function(){
			$('.z_news p a').animate({marginTop:-50},800,'linear');
		},1000)
	}
	
})
