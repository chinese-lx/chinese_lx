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
   
    //小图区的箭头点击事件
    //左箭头的点击
    // $('.d_leftarr').click(function(){
    //     //如果当前的是第一张图
    //     if($('.d_imgchecked').attr('index')==1){
    //         $(this).css('opacity','0.3');
    //     }else{//如果不是第一张图
    //         $(this).css('opacity','1');
    //         $('.d_imgchecked').removeClass('d_imgchecked').prev().addClass('d_imgchecked');
    //         var newIndex = $('.d_imgchecked').attr('index');
    //         if(newIndex==1){
    //             $(this).css('opacity','0.3');
    //         }
    //         $('.d_bigimg').find('img').attr('src','../img/d_img/itemgoods/d_big'+newIndex+'.jpg'); 
    //     }
    // });
    
    //点击一次左箭头，在现有的left上向右走90px ，left:[-720,0]
    //点一次在当前的left上+90
    
    $('.d_leftarr').click(function(){
        var current=parseInt($('.d_imgsmall').css('left'))/(90);
       
        if(current==0){//如果当前的位置是0
            return;
        }else{
            current++;
        }
        $('.d_imgsmall').animate({
            left:(current)*(90)
        },500,'linear');
    });

    //右箭头的点击事件
//     $('.d_rightarr').click(function(){
//         if($('.d_imgchecked').attr('index')==5){
//             // $('.d_imgsmall li').css('left','-450px');
//             return;
//         }else{
//             if( $('.d_imgchecked')==1){
//                 $('.d_leftarr').css('opacity','0.3'); 
//             }
//             $('.d_leftarr').css('opacity','1'); 
//             $('.d_imgchecked').removeClass('d_imgchecked').next().addClass('d_imgchecked');
//             var newIndex = $('.d_imgchecked').attr('index');
//             $('.d_bigimg').find('img').attr('src','../img/d_img/itemgoods/d_big'+newIndex+'.jpg'); 
//         }
//     });
// });
    
    $('.d_rightarr').click(function(){
        var current=parseInt($('.d_imgsmall').css('left'))/(-90);
        
        if(current==8){//当前的位置是-720px
            return;
        }else{
            current++;
        }
        $('.d_imgsmall').animate({
            left:(current)*(-90)
        },500,'swing');
    });

    var h=parseInt($('.d_gray').offset().top);
    var t=$('.nav').height();
    //获取浏览器窗口的宽
    window.onscroll=function(){
        if(document.documentElement.scrollTop>(h)){
            $('.d_gray').css({
                position:"fixed",
                top:50,
                zIndex:9999
            });
            $('.d_imgwrap').css('margin-bottom','150px');
        }
        if(document.documentElement.scrollTop<(h)){
            $('.d_gray').css({
                position:"static"
            });
             $('.d_imgwrap').css('margin-bottom','0');
        }
    }

});
