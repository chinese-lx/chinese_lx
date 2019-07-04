var r_ul = $(".ull")
var r_li = $(".lli")
var r_t = $(".r_t")
var r_a = $(".lia")
var c_r = $(".c_ri")
var c_nav= $(".c_nav")
var index=0;

//禁止滚动条滚动
var nogun=function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function (e) {
        $(document).scrollTop(top);
    })
}
//移除禁止滚动条滚动
var gun =function removeUnScroll() {
    $(document).unbind("scroll.unable");
}

for(let i = 0;i<r_t.length;i++){
    r_li[i].onmouseover = function(){
    animate(r_t[i],{opacity:100},10);
}
r_li[i].onmouseout = function(){
    animate(r_t[i],{opacity:0},10);
}
}

window.onmousewheel = function(){
    if(document.documentElement.scrollTop>300){
        $(".c_ri").css('display',"block") 
    }
    if(document.documentElement.scrollTop<300){
        $(".c_ri").css('display',"none") 
    }
    if(document.documentElement.scrollTop>50){
        $(".nav_ss").css({'display':"none"}) 
        $("#n_dl").css({'display':"block"}) 
        $(".nav").css({'position':'fixed','top':0,"right":0,'width':"100%","z-index":9000})
        $("#sous2").css({"display":"block"})
        $(".c_nav").css({'height':'50px',"line-height":"50px"})
        $(".na_li").css({'height':'50px'})
    }
    if(document.documentElement.scrollTop<50){
        $(".nav_ss").css({'display':"block"}) 
        $("#n_dl").css({'display':"none"}) 
        $("#sous2").css({"display":"none"})
        $(".nav").css({'position':'relative','top':0,"right":0,'width':"100%","z-index":0})
        $(".c_nav").css({'height':'70px',"line-height":"70px"})
        $(".na_li").css({'height':'70px'})
    }

    if(document.documentElement.scrollTop>300&&document.documentElement.scrollTop<2060){
        $("#mdj").css('display',"block") 
    }
    if(document.documentElement.scrollTop<300){
        $("#mdj").css('display',"none") 
    }
    if(document.documentElement.scrollTop>2060){
        $("#mdj").css('display',"none") 
    }


}

var sous2 =document.getElementById("sous2")

var c_stop =document.getElementById("c_stop")
sous2.onclick = function(){

    $("#c_ssk").css("display","block")
    $("#n_dl").css("display","none")
    $("#nav_ss").css("display","none")
    $("#na_ul").css("display","none")
    $(".c_nav").css({"line-height":"36px"})
    $("#sous2").css({'position':'absolute',"left":"1200px","display":"block"})
    $("#sous2").animate({"left":"26%"},'fast');
    nogun()
    // animate(sous2,{left:10},10);
}

c_stop.onclick = function(){

    $("#c_ssk").css("display","none")
    $("#n_dl").css("display","block")
    $("#nav_ss").css("display","block")
    $("#na_ul").css("display","block")
    $(".c_nav").css({"line-height":"50px"})
    $("#sous2").css({'position':'unset'})
    gun()
    // animate(sous2,{left:10},10);
}


