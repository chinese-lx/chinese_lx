
$('.huabeifq').mouseover(function(){
    $('.xzfq').css("display","block")
    $('.zsfq').css("margin-left","0")
    $('.huabeifq').css("width","230px").css("border","1px solid #DADADA").css("border-bottom","none")
    $('#w_xl')[0].innerHTML="&#xe7c6;"
    var xzfq =document.querySelector(".xzfq")
    var w_redl = xzfq.children 
    var w_redlet =document.querySelectorAll(".w_redlet")
    var xzfq2=document.querySelector('.xzfq2')
    var w_3qi=document.querySelectorAll('.w_3qi')  
    for(let i = 0; i < w_redl.length; i++){ 
        w_redl[i].onclick=function(){          
                for (var j = 0; j < w_redl.length; j++) {
                    w_redlet[j].style.background="#fff"
                    console.log(w_redlet[j])

                }
                index = i;
                w_redlet[index].style.background="red"
                xzfq2.innerHTML=w_3qi[i].innerHTML;
        }
    }
    
})
//花呗鼠标移出
$('.xzfq').mouseout(function(){
    $('.xzfq').css("display","none")
    $('.zsfq').css("margin-left","10px").css("border-left","1px solid #DADADA");
    $('.huabeifq').css("width","220px").css("border","1px solid #DADADA");
    $('#w_xl')[0].innerHTML="&#xe638;"
    
})

//招商鼠标移入
$('.zsfq').mouseover(function(){
    $('.xzfq').css("display","none")
    $('.zsfq2').css("display","block");
    $('.zsfq').css('border-bottom','none');
    $('#zstb')[0].innerHTML="&#xe7c6;";

    var zsfq2 =document.querySelector(".zsfq2");
    var w_redl = zsfq2.children;
    var w_zsdd =document.querySelectorAll(".w_zsdd");
    

    var zstb=document.querySelector('.zstb')
    var w_3qi=document.querySelectorAll('.w_3qi')  
    for(let i = 0; i < w_redl.length; i++){ 
        w_redl[i].onclick=function(){        
                for (var j = 0; j < w_redl.length; j++) {
                    w_zsdd[j].style.background="#fff"
                }
                index = i;
                w_zsdd[index].style.background="red"
                zstb.innerHTML=w_3qi[i].innerHTML;
        }
    }

})
//招商鼠标移出
$('.zsfq').mouseout(function(){
    $('.zsfq2').css("display","none");
    $('.zsfq').css("border-bottom","1px solid #DADADA");
    $('#zstb')[0].innerHTML="&#xe638;"
})
$('.w_subtract').click(function(){
    $(".w_append").val()
})

var w_min1=document.querySelectorAll(".w_min1");
var ulpmax=document.querySelector(".ulpmax");
var lipmax=ulpmax.children;
var index=0;
for (let i = 0; i < w_min1.length; i++) {
    w_min1[i].onmouseover=function(){
        for (var j = 0; j < lipmax.length; j++) {
            lipmax[j].style.display="none"
            w_min1[j].style.border="1px solid #ededed"
            console.log(lipmax[j])   
        }
        index=i;
        lipmax[index].style.display="block"
        
        w_min1[index].style.border="1px solid red ";

    }
}
var index =0
var w_rightmin=document.querySelector('.w_rightmin')
w_rightmin.onclick=function(){
    index++;
    if(index>5){
        index=5
    }
        if(index==5){
        $(".shabi2").animate({left:"-466px"},500)
        }
            
        for (var j = 0; j < lipmax.length; j++) {
            w_min1[j].style.border="1px solid #ededed";
            console.log(w_min1[j])
            lipmax[j].style.display="none";           
        }
        w_min1[index].style.border="1px solid red ";
        console.log(w_min1[index])
        lipmax[index].style.display="block"
 }
 var w_leftmin=document.querySelector(".w_leftmin")
 w_leftmin.onclick=function(){
     
     index--;
     if(index<0){
         index=0
     }
     if (index<5) {
         $(".shabi2").animate({left:0},500)
     }
     for (var i=0; i < lipmax.length ;i++) {
        w_min1[i].style.border="1px solid #ededed";
        lipmax[i].style.display="none";           

     }
     w_min1[index].style.border="1px solid red ";
     lipmax[index].style.display="block"
        
 }

