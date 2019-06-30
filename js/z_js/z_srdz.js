$(function(){
    $.ajax({
        type:'post',
        url:'../data/z_srdz.json',
        cache:false,
        dataType:'json',
        cache:false,
        success:function(json){
            var results1 = '';
            var results2 = '';
            var results3 = '';
            $.each(json[0].computer1,function(index,target){
                /*<li><p class="tips"><span>MX250显卡</span></p><a href="#" class="list" title="小新 Air 13  湖光蓝"><div class="list_img"><img src="../img/z_img/srdz/list1.jpg" alt=""></div><p class="name">小新 Air 13  湖光蓝</p><p class="title">i7-8565U/8G/512G SSD/MX250</p><p class="price"><span>￥</span><b>5999</b><i>立即购买</i></p></a></li>*/
                results1 += '<li><p class="tips"><span>'+target.tips+'</span></p><a href="#" class="list" title="'+target.name+'"><div class="list_img"><img src="'+target.path+'" alt=""></div><p class="name">'+target.name+'</p><p class="title">'+target.title+'</p><p class="price"><span>￥</span><b>'+target.price+'</b><i>立即购买</i></p></a></li>'
            
                $('.computer1 ul').html(results1);
                var $span = $('.computer1 ul li .tips span')
                for (var i = 0; i < $span.length; i++) {
                    if($span[i].innerHTML==''){
                        $($span[i]).css('visibility', 'hidden')
                    }
                }
            });
            $.each(json[0].computer2,function(index,target){
                /*<li><p class="tips"><span>MX250显卡</span></p><a href="#" class="list" title="小新 Air 13  湖光蓝"><div class="list_img"><img src="../img/z_img/srdz/list1.jpg" alt=""></div><p class="name">小新 Air 13  湖光蓝</p><p class="title">i7-8565U/8G/512G SSD/MX250</p><p class="price"><span>￥</span><b>5999</b><i>立即购买</i></p></a></li>*/
                results2 += '<li><p class="tips"><span>'+target.tips+'</span></p><a href="#" class="list" title="'+target.name+'"><div class="list_img"><img src="'+target.path+'" alt=""></div><p class="name">'+target.name+'</p><p class="title">'+target.title+'</p><p class="price"><span>￥</span><b>'+target.price+'</b><i>立即购买</i></p></a></li>'
                $('.computer2 ul').html(results2);
                var $span = $('.computer2 ul li .tips span')
                for (var i = 0; i < $span.length; i++) {
                    if($span[i].innerHTML==''){
                        $($span[i]).css('visibility', 'hidden')
                    }
                }
            });
            $.each(json[0].products_more,function(index,target){
                /*<li><p class="tips"><span>MX250显卡</span></p><a href="#" class="list" title="小新 Air 13  湖光蓝"><div class="list_img"><img src="../img/z_img/srdz/list1.jpg" alt=""></div><p class="name">小新 Air 13  湖光蓝</p><p class="title">i7-8565U/8G/512G SSD/MX250</p><p class="price"><span>￥</span><b>5999</b><i>立即购买</i></p></a></li>*/
                results3 += '<li><p class="tips"><span>'+target.tips+'</span></p><a href="#" class="list" title="'+target.name+'"><div class="list_img"><img src="'+target.path+'" alt=""></div><p class="name">'+target.name+'</p><p class="title">'+target.title+'</p><p class="price"><span>￥</span><b>'+target.price+'</b><i>立即购买</i></p></a></li>'
                $('.products_more ul').html(results3);
                var $span = $('.products_more ul li .tips span')
                for (var i = 0; i < $span.length; i++) {
                    if($span[i].innerHTML==''){
                        $($span[i]).css('visibility', 'hidden')
                    }
                }
            });

        },
        error:function(faild){
            console.log(faild);
        }
    })
})