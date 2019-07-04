var c_b = document.querySelectorAll(".c_bms")
var c_z = document.querySelectorAll(".c_zms")
var ms_l = document.querySelectorAll(".ms_l");
var ms_r = document.querySelectorAll(".ms_r")
var index = 0;



ms_l[1].onclick = function(){
    //console.log(index);
    console.log(1)
    index = 0;
    animate(c_z[0],{left:0},10);
}
//toRight点击 
ms_r[0].onclick = function(){
    console.log(2)
    console.log(c_z)
    index = 1;
    animate(c_z[0],{left:-1200*index},10);
}


var shi =document.getElementById("shi")
var fen =document.getElementById("fen")
var miao =document.getElementById("miao")
var shi1 =document.getElementById("shi1")
var fen1 =document.getElementById("fen1")
var miao1 =document.getElementById("miao1")

function getDB(num){
	return num < 10 ? "0" + num : num;
}
function show(){
    //获取目的日期
    var time=Number(new Date(2019,7-1,5,18,0,0));
    // var time=new Date(myyear,mymonth,myday,myhour,myminute,mysecond).getTime();
    //获取当前时间
    var nowTime=Date.now();
    // var nowTime=new Date().getTime();
    //获取时间差
    var timediff=Math.round((time-nowTime)/1000);
    //获取还剩多少天
    var day=parseInt(timediff/3600/24);
    var day1 =parseInt(Math.floor(day))
    //获取还剩多少小时
    var hour=parseInt(timediff/3600%24);
    //获取还剩多少分钟
    var minute=parseInt(timediff/60%60);
    //获取还剩多少秒
    var second=timediff%60;
    //输出还剩多少时间
    // document.getElementById("1").innerHTML=day;
    shi.innerHTML=getDB(hour+day1*24);
    fen.innerHTML=getDB(minute);
    miao.innerHTML=getDB(second);
    
    shi1.innerHTML=getDB(hour+day1*24);
    fen1.innerHTML=getDB(minute);
    miao1.innerHTML=getDB(second);
    setTimeout(show,1000);
    if(timediff==0){return;}
    
    }

show()

