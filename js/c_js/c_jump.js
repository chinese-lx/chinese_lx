
$("#jump1").click(function(){
    $('html,body').animate({scrollTop: $("#ms").offset().top}, 500);
})

$("#jump2").click(function(){
    $('html,body').animate({scrollTop: $("#main1").offset().top}, 500);
})
$("#jump3").click(function(){
    $('html,body').animate({scrollTop: $("#main2").offset().top}, 500);
})
var jump1 =document.getElementById("jump1")
jump1.onmouseover= function(){

    jump1.innerHTML="今日秒杀"
}
jump1.onmouseout= function(){

    jump1.innerHTML="秒杀"
}

var jump2 =document.getElementById("jump2")
jump2.onmouseover= function(){

    jump2.innerHTML="Lenovo 电脑"
}
jump2.onmouseout= function(){

    jump2.innerHTML="1F"
}
var jump3 =document.getElementById("jump3")
jump3.onmouseover= function(){

    jump3.innerHTML="Lenovo台式机"
}
jump3.onmouseout= function(){

    jump3.innerHTML="2F"
}
// window.onmousewheel = function(){
//     console.log(document.documentElement.scrollTop)
//     if(document.documentElement.scrollTop>300&&document.documentElement.scrollTop<2060){
//     $("#mdj").css('display',"block") 
// }
// if(document.documentElement.scrollTop<300){
//     $("#mdj").css('display',"none") 
// }
// if(document.documentElement.scrollTop>2060){
//     $("#mdj").css('display',"none") 
// }
// }
