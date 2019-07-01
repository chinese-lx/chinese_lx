//去d_data请求数据
$(function () {
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '../data/exchange_ledou.json',
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
                var all = result + '<div class="d_moregoods"><p>没有了</p><div><img src="../img/d_img/d_morearr.png"></div></div>';
            }
            $('.d_listbox').html(all);
        }
    
    })
});
//积分请求
//去d_data请求数据
$(function () {
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '../data/exchange_jifen.json',
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
    
    })
});



{/* <div class="d_listbox">
 <div class="d_list">
<div class="d_img"><img src="../img/d_img9.jpg" alt=""></div>
<p class="d_details">知识优盘</p>
<p class="d_price"><span class="wordorange">$128</span>+<span class="wordorange">120积分</span>乐豆</p>
</div>  */}