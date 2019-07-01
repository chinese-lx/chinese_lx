//去d_data请求数据
$(function () {
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '../data/d_exchange_ledou.json',
        success: function (json) {
            var result = '';
            $.each(json, function (index, value) {
                if(index<10){
                    result += '<div class="d_list"><div class="d_img"><img src="' + value.path +
                 '" alt=""></div><div class="d_detailbox"><p class="d_details">' + value.details + 
                 '</p></div><p class="d_price"><span class="wordorange">' + value.price +
                  '</span>+<span class="wordorange">' + value.virtual + '</span>乐豆</p></div>';
                }
            });    
            if(json.length>10){
                var all = result + '<div class="d_moregoods d_ledou"><p>查看更多商品</p><div><img src="../img/d_img/d_morearr.png"></div></div>';
            }else{
                var all = result + '<div class="d_moregoods"><p>没有了</p><div><img src="../img/d_img/d_morearr.png"></div></div>';
            }
            $('.d_listbox').html(all);
        }
    
    })

//积分请求
//去d_data请求数据

    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '../data/d_exchange_jifen.json',
        success: function (json) {
            var result = '';
            $.each(json, function (index, value) {
                if(index<10){
                    result += '<div class="d_list"><div class="d_img"><img src="' + value.path +
                 '" alt=""></div><div class="d_detailbox"><p class="d_details">' + value.details + 
                 '</p></div><p class="d_price"><span class="wordorange">' + value.price +
                  '</span>+<span class="wordorange">' + value.virtual + '</span>乐豆</p></div>';
                }
            });    
            if(json.length>10){
                var all = result + '<div class="d_moregoods"><p>查看更多商品</p><div><img src="../img/d_img/d_morearr.png"></div></div>';
            }else{
                var all = result + '<div class="d_moregoods mb72"><p>没有了</p><div><img src="../img/d_img/d_morearr.png"></div></div>';
            }
            $('.d_jifenbox').html(all);
        }
    
    });
    var count = 2;
    //更多商品的点击事件 点击了之后再拉去十条数据
    $('.d_listbox').on('click','.d_ledou',function(){
        console.log('执行到事件');
         $.ajax({
            type: 'get',
            dataType: 'json',
            url: '../data/d_exchange_ledou.json',
            success:function(json){
                console.log('执行ajax');
               if($('.d_ledou').attr('count')){
                     var  data='';
                    //如果这个属性存在就读出来是第几次请求
                    $.each(json, function(index, value) {
                        if(index>=10*$('.d_ledou').attr('count')-10 && index<10*$('.d_ledou').attr('count')){
                            console.log('执行if');
                            data += '<div class="d_list"><div class="d_img"><img src="' + value.path +
                         '" alt=""></div><div class="d_detailbox"><p class="d_details">' + value.details + 
                         '</p></div><p class="d_price"><span class="wordorange">' + value.price +
                          '</span>+<span class="wordorange">' + value.virtual + '</span>乐豆</p></div>';
                        }
                    });
                    $('.d_ledou').before(data);
                    if(10*$('.d_ledou').attr('count')>json.length){
                        $('.d_ledou').find('p').html('没有了');
                        return;
                    }
                    $('.d_ledou').attr('count',parseInt($('.d_ledou').attr('count'))+1);
               }else{
                   //否则肯定是第二次 加载完数据之后  加count=3
                   var result = '';
                   $.each(json, function (index, value) {
                       if(index>=10 && index<20){
                           result += '<div class="d_list"><div class="d_img"><img src="' + value.path +
                        '" alt=""></div><div class="d_detailbox"><p class="d_details">' + value.details + 
                        '</p></div><p class="d_price"><span class="wordorange">' + value.price +
                         '</span>+<span class="wordorange">' + value.virtual + '</span>乐豆</p></div>';
                       }
                   });
                   $('.d_ledou').before(result);
                   if(json.length<20){
                        $('.d_ledou').find('p').html('没有了');
                        $('.d_listbox').off('click');
                        return;
                   }
                   $('.d_ledou').attr('count','3');
               }
            }
         });
    });
});




{/* <div class="d_listbox">
 <div class="d_list">
<div class="d_img"><img src="../img/d_img9.jpg" alt=""></div>
<p class="d_details">知识优盘</p>
<p class="d_price"><span class="wordorange">$128</span>+<span class="wordorange">120积分</span>乐豆</p>
</div>  */}