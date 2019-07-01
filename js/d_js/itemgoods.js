$(document).ready(function(){
    //购买数量加减 ，价格和乐豆随之变化 
    //单价
    var singleprice = $('.d_trueprice').html();
    var singleledou = $('.d_bigledou').html();
    $('.d_reduce').bind('click',function(){
        
        if($('.d_count').html()==1){
            $('.d_count').html("1");
            $('.d_trueprice').html(singleprice);
            $('.d_bigledou').html(singleledou);
        }else{
            $('.d_count').html($('.d_count').html()-1);
            // var p = $('.d_count').html();
            // $('.d_price d_trueprice').html();
            //价格
            $('.d_trueprice').html(singleprice*$('.d_count').html());
            $('.d_bigledou').html(singleledou*$('.d_count').html());
        }

    });
    
    $('.d_add').bind('click',function(){
        
        if($('.d_count').html()==5){
            $('.d_count').html("5");
            $('.d_trueprice').html(singleprice*5);
            $('.d_bigledou').html(singleledou*5);
        }else{
            $('.d_count').html(parseInt($('.d_count').html())+1);
            // var p = $('.d_count').html();
            // $('.d_price d_trueprice').html(parseInt(p)*$('.d_price d_trueprice').html());
            $('.d_trueprice').html(singleprice*$('.d_count').html());
            $('.d_bigledou').html(singleledou*$('.d_count').html());
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

   //动画
    $('.d_bgred').hover(function(){
        $('.d_showmsg').slideDown({
            duration:500,
            easing:'linear'
        });
        $('.d_showwords').html($('.d_heading').html()+'<br>￥'+$('.d_trueprice').html()+'+'+$('.d_bigledou').html()+'乐豆');
    },function(){
        $('.d_showmsg').slideUp(500,'linear');
    });

    //小图区mouseover事件
    $('.d_imgsmall').on('mouseover','li',function(){
        //当前边框变红
        $(this).addClass('d_imgchecked').siblings().removeClass('d_imgchecked');
        $('.d_bigimg').find('img').attr('src','../img/d_img/itemgoods/d_big'+$(this).attr('index')+'.jpg');
        $('.d_bigimg').attr('index',$(this).attr('index'));
        if($(this).attr('index')==1){
            $('.d_leftarr').css('opacity','0.3');
        }else{
            $('.d_leftarr').css('opacity','1');
        }
    });
    //小图区箭头点击事件
    //左箭头  点击箭头，当前的
    $('.d_leftarr').click(function(){
        //主要：找到当前的红框li
        if($('.d_bigimg').attr('index')==1){
            $(this).css('opacity','0.3');
        }else{
            $(this).css('opacity','1');
            $('.d_imgsmall').find('li[index='+$(".d_bigimg").attr("index")+']').prev().addClass('d_imgchecked').siblings().removeClass('d_imgchecked');
            var newIndex = $('.d_bigimg').attr('index')-1;
            if(newIndex==1){
                $(this).css('opacity','0.3');
            }
            $('.d_bigimg').attr('index',newIndex);
            $('.d_bigimg').find('img').attr('src','../img/d_img/itemgoods/d_big'+newIndex+'.jpg'); 
        }
    });
    $('.d_rightarr').click(function(){
        //当到了第五张图时
        if($('.d_bigimg').attr('index')==5){
            
        }else{
            $('.d_imgsmall').find('li[index='+$(".d_bigimg").attr("index")+']').next().addClass('d_imgchecked').siblings().removeClass('d_imgchecked');
            var newIndex = parseInt($('.d_bigimg').attr('index'))+1;
            $('.d_bigimg').attr('index',newIndex);
            $('.d_bigimg').find('img').attr('src','../img/d_img/itemgoods/d_big'+newIndex+'.jpg'); 
        }
    });

    

});
