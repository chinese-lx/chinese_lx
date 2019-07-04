$('.d_img1').click(function(){
    $('.d_mask').css('display','block');
    $('.d_rule').css('display','block');
    $('.d_deleterule').css('display','block');
});
$('.d_deleterule').click(function(){
    $('.d_mask').css('display','none');
    $('.d_rule').css('display','none');
    $('.d_deleterule').css('display','none');
});

//每个li的点击事件
$('.d_feature1').toggle(function(){
    $(this).addClass('d_checked');
    $(this).find('.arrtop').css('display','block').next().css('display','none');
    $('.d_unique').slideDown('slow','swing');
    
},function(){
    $(this).find('.arrtop').css('display','none').next().css('display','block');
    $('.d_unique').slideUp('slow','swing');
    $(this).removeClass('d_checked');
});

$('.d_feature2').toggle(function(){
    $(this).addClass('d_checked');
    $(this).find('.arrtop').css('display','block').next().css('display','none');
    $('.d_steps').slideDown('slow','swing');
},function(){
    $(this).removeClass('d_checked');
    $(this).find('.arrtop').css('display','none').next().css('display','block');
    $('.d_steps').slideUp('slow','swing');
});

$('.d_feature3').toggle(function(){
    $(this).addClass('d_checked');
    $(this).find('.arrtop').css('display','block').next().css('display','none');
    $('.d_reason').slideDown('slow','swing');
},function(){
    $(this).removeClass('d_checked');
    $(this).find('.arrtop').css('display','none').next().css('display','block');
    $('.d_reason').slideUp('slow','swing');
});

$('.d_feature4').toggle(function(){
    $(this).addClass('d_checked');
    $(this).find('.arrtop').css('display','block').next().css('display','none');
    $('.d_server').slideDown('slow','swing');
},function(){
    $(this).removeClass('d_checked');
    $(this).find('.arrtop').css('display','none').next().css('display','block');
    $('.d_server').slideUp('slow','swing');
});

$('.d_feature5').toggle(function(){
    $(this).addClass('d_checked');
    $(this).find('.arrtop').css('display','block').next().css('display','none');
    $('.d_handle').slideDown('slow','swing');
},function(){
    $(this).removeClass('d_checked');
    $(this).find('.arrtop').css('display','none').next().css('display','block');
    $('.d_handle').slideUp('slow','swing');
});

//动态生成数据  ajax请求
$.ajax({
    url:"../data/d_oldtonew.json",
    type:"get",
    dataType:"json",
    success:function(json){
        //动态生成数据列表和分页符，每一页显示八条数据
       // '<li class="d_goodsitem"><div class="d_imgbox"><img src="../img/d_img/old2new/d_new11.jpg" alt=""></div><div class="d_gtitle">ThinkPad New S2 2019 银色</div><div class="d_gdetail">i7-8565U/Windows10/8GB/512GB SSD/UHD Graphics 620/13.3英寸</div><div class="d_gprice"><i>￥</i><span>8299.0</span></div><div class="d_discount"><em></em><span>可用礼包优惠券额度：100</span></div></li>'
      // '<div class="d_paging"><ul class="d_paging_list clearfix"><li class="d_paging_checked">1</li><li>下一页</li></ul></div>'
        var result = '';
        var all = '';
        var page = '';
        var size;
        $.each(json,function(i,v){
            if(i<8){
                result+='<li class="d_goodsitem"><div class="d_imgbox"><img src="'+v.path+'" alt=""></div><div class="d_gtitle">'+v.gtitle+'</div><div class="d_gdetail">'+v.gdetail+'</div><div class="d_gprice"><i>￥</i><span>'+v.gprice+'</span></div><div class="d_discount"><em></em><span>'+v.gdiscount+'</span></div></li>'
            }
        });
        //数据的条数除8
        if(json.length>0){
            if(json.length%8==0){
                size=json.length/8;
            }else{
                size=json.length/8+1;
            }
        }
        //分页时候生成size个li
        for(var i=1;i<=size;i++){
            if(i==1){
                page+='<li class="d_paging_checked d_paging_li">'+i+'</li>'; 
            }else{
                page+='<li class="d_paging_li">'+i+'</li>'; 
            } 
        }
       all = '<ul class="d_goodsli clearfix">'+result+'</ul><div class="d_paging"><ul class="d_paging_list clearfix">'+page+'<li class="d_next d_paging_li">下一页</li></ul></div>';
       $('.d_goodsbox').append(all);
    }
});

//分页符的点击
$('.d_goodsbox').on('click','.d_paging_li',function(){
    if($(this).hasClass('d_paging_checked')){
        return;
    }else{
         //如果点击的是第一页,
        if($(this).html()=='1'){
            $(this).addClass('d_paging_checked').siblings().removeClass('d_paging_checked');
            getData(1);
             //移除上一页li
        }else{//点击的不是第一页
            //判断点击的是第几个li，然后去请求相应的数据 只生成一次上一页
            if($(this).parent().children().eq(0).html()!='上一页'){//上一页已经存在
                $(this).parent().prepend('<li class="d_paging_li d_prev">上一页</li>');
            }
            //如果点击的不是上一页和下一页
            if(!$(this).hasClass('d_prev') && !$(this).hasClass('d_next')){
                $(this).addClass('d_paging_checked').siblings().removeClass('d_paging_checked');  
                var count = parseInt($(this).html());
                getData(count);
            }else if($(this).hasClass('d_prev')){
               //点击上一页
                    //如果点击上一页,先找到当前选中的分页 ， 然后将d_paging_checked 给前一个元素  ，如果当前选中的分页为1，那么return
                    //通过类名选择出当前的分页
                    var num = parseInt($('.d_paging_checked').html());
                    if(num==1){
                        alert('已经是第一页了~');
                        return;
                    }else{
                        $('.d_paging_checked').removeClass('d_paging_checked').prev().addClass('d_paging_checked');
                        getData(num-1);
                    }
                }else if($(this).hasClass('d_next')){//点击下一页
                    var lastPage=parseInt($(this).prev().html());
                    //通过类名选择出当前的分页
                    var currentPage = parseInt($('.d_paging_checked').html());
                    if(currentPage==lastPage){
                        alert('已经是最后一页了~');
                        return;
                    }else{
                        $('.d_paging_checked').next().addClass('d_paging_checked').siblings().removeClass('d_paging_checked');
                        getData(currentPage+1);
                    }
                }   
            }
        }
    
});

//写一个方法，根据count去取数据
function getData(count){
    $.ajax({
        type:'get',
        dataType:'json',
        url:"../data/d_oldtonew.json",
        success:function(json){
            //遍历json
            var result = '';
            $.each(json,function(i,v){
                //取第几页的数据
                if(i>=count*8-8 && i<count*8){
                    result+='<li class="d_goodsitem"><div class="d_imgbox"><img src="'+v.path+'" alt=""></div><div class="d_gtitle">'+v.gtitle+'</div><div class="d_gdetail">'+v.gdetail+'</div><div class="d_gprice"><i>￥</i><span>'+v.gprice+'</span></div><div class="d_discount"><em></em><span>'+v.gdiscount+'</span></div></li>';
                }
            });
            $('.d_goodsli').html(result);
        }
    });
}
