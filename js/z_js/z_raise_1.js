$(function(){
    //动态获取数据  
    $.ajax({
        type: "post",
        url: '../data/z_raise.json',
        dataType: "json",
        success: function (json) {
            $.each(json,function(index,value){
				if (index == 0 ) {
                    $('#z_title').html(value.title);
                    $('.contaniner_raise .targetMoney').html(value.targetMoney);
                    $('.contaniner_raise .person,.details_r .limitPerson span:eq(1)').html(value.person);
                    $('.contaniner_raise .raiseMoney').html(value.raiseMoney);
                    var progress = (value.raiseMoney.substr(1)/value.targetMoney.substr(1)*100).toFixed(1)+'%';
                    $('.contaniner_raise .progress').html(progress);
                    $('.details_r .proDetails').html(value.details);
                }
            })
        }
    })
    //剩余天数
	var startDate = new Date();
	var endDate = new Date("2019-06-30 23:59:59");
	var timer = (endDate.getTime() - startDate.getTime())/1000/60/60/24;
    var lastDays = parseInt(timer);
	if(lastDays<=0){
		lastDays = 0;
	}
    $('.contaniner_raise .lastDays').html(lastDays);
    //支持按钮价格
    //根据表单里面的数据实时更新价格
    var ipVal = $('.details_r .buyCounts input');
    ipVal.on('input',function(){
        var counts = parseInt(ipVal.val());
        if(counts==0){
            $('.details_r .supports a span').html('￥'+0)
        }else if (counts>50) {
            $('.details_r .supports a span').html('￥'+199);
            ipVal.val(1);
        } else if (isNaN(counts)) {
            $('.details_r .supports a span').html('￥'+0)
        } else {
            
          $('.details_r .supports a span').html('￥'+counts*199)
        }
    })
    //项目简介/评论/参与者切换
    $('.pro_nav').on('click','li',function(){
        $('.pro_nav li').css('border-bottom','0');
        this.style.borderBottom='2px solid #e2231a';
        var $index = $(this).index();//获取下标
        $('.details_l>div').eq($index).css('display','block').siblings('.details_l>div').css('display','none');
    });
    //参与者信息请求
    $.getJSON('../data/z_raise_1.json',function(json){
        //0: {username: "13***27", price: "￥199", JoinTime: "2019-07-03 16:58:55"}
        var total = json.length;
        var nums = 7;
        var pages = Math.ceil(total/nums);
        //封装一个函数根据页码动态获取页面内容
        function inforHtml(curr){
            var results = '';
            var last = curr*nums;
            if(last>total){
                last=total;
            }
            for (var index = (curr-1)*nums; index< last; index++) {
                results+='<dl><dt>'+json[index].price+'</dt><dd><i>'+json[index].username+'</i><span>'+json[index].JoinTime+'</span></dd></dl>'
            }
            return results;
        };
        //分页器模块调用
        layui.use('laypage', function(){
            var laypage = layui.laypage;
            //执行一个laypage实例
            laypage.render({
                elem: $('.z_pages'),
                count: total,//数据总数，从服务端得到
                pages:pages,
                limit:nums,
                jump:function(obj){
                   $('.participants .p_infor').html(inforHtml(obj.curr));
                }
            });
        });
    });
    //点击分页器页面浏览器窗口跳到nav导航处
    $(document).on('click','#layui-laypage-1 a',function(){
        $('html').animate({
            scrollTop:$('.pro_nav').offset().top
        },300)
    })
})