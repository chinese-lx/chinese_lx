$(document).ready(function(){

    $('.d_reduce').bind('click',function(){
        
        if($('.d_count').html()==1){
            $('.d_count').html("1");
        }else{
            $('.d_count').html($('.d_count').html()-1);
            // var p = $('.d_count').html();
            // $('.d_price d_trueprice').html();
        }

    });
    
    $('.d_add').bind('click',function(){
        
        if($('.d_count').html()==5){
            $('.d_count').html("5");
        }else{
            $('.d_count').html(parseInt($('.d_count').html())+1);
            // var p = $('.d_count').html();
            // $('.d_price d_trueprice').html(parseInt(p)*$('.d_price d_trueprice').html());
        }
    });
    
    $('.d_bystagesbox').mouseover(function(){
        $(this).find('ul').css('display','block');
       });
       $('.d_bystagesbox').mouseout(function(){
         $(this).find('ul').css('display','none');
        } );
   
   //蚂蚁花呗部分
    $('.d_fenqili').mouseover(function(){
        // var index = $(this).index();
         $(this).find('.d_topwrap span:first').addClass('d_hovered');
    });
    $('.d_fenqili').mouseout(function(){
        // var index = $(this).index();
        $(this).find('.d_topwrap span:first').removeClass('d_hovered');
    });


    $('.d_mayihuabei .d_circle').click(function(){
        $(this).find('.d_circleinner').addClass('d_checked').end().parent().siblings().find('.d_circle').find('.d_circleinner').removeClass('d_checked');
        var val=$(this).next().find('span:first').html();
        $('.d_mayihuabei .d_selectright').html(val+'');
        $('.d_mayihuabei').addClass('d_redborder').siblings().removeClass('d_redborder');
        $('.d_buynow').html('分期支付');
    });

    //不分期
    $('.d_bystages').click(function(){
        $(this).addClass('d_redborder').siblings().removeClass('d_redborder');
        $('.d_buynow').html('立即购买');
    });
   
    //招商银行
    $('.d_zhaoshang .d_circle').click(function(){
        $(this).find('.d_circleinner').addClass('d_checked').end().parent().siblings().find('.d_circle').find('.d_circleinner').removeClass('d_checked');
        var val=$(this).next().find('span:first').html();
        $('.d_zhaoshang .d_selectright').html(val+'');
        $('.d_zhaoshang').addClass('d_redborder').siblings().removeClass('d_redborder');
        $('.d_buynow').html('分期支付');
    });

    $('.d_introduction').find('i').mouseover(function(){
         $('.d_smallintro').css('display','block');
    });
    $('.d_introduction').find('i').mouseout(function(){
        $('.d_smallintro').css('display','none');
   });
})