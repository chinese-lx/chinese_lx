 //切换详情页     
 var a1 = document.getElementById("a1")
 var a2 = document.getElementById("a2")
 var info = document.querySelectorAll(".info-box");
 a1.onclick = function () {
     info[0].style.display = "block"
     info[1].style.display = "none"

 }
 a2.onclick = function () {
     info[1].style.display = "block"
     info[0].style.display = "none"

 }

 //橱窗图
 window.onload = function () {
     var winpic = document.getElementById("winpic");
     var p1 = document.getElementById("p1");
     var p2 = document.getElementById("p2");
     var p3 = document.getElementById("p3");
     var p4 = document.getElementById("p4");
     var p5 = document.getElementById("p5");
     var p6 = document.getElementById("p6");

     p1.onmouseover = function () {
         winpic.src = "../img/q_img/g-01 (51).jpg"
     }
     p2.onmouseover = function () {
         winpic.src = "../img/q_img/g-03 (4).jpg"
     }
     p3.onmouseover = function () {
         winpic.src = "../img/q_img/g-03 (3).jpg"
     }
     p4.onmouseover = function () {
         winpic.src = "../img/q_img/g-03 (2).jpg"
     }
     p5.onmouseover = function () {
         winpic.src = "../img/q_img/g-03 (1).jpg"
     }
     p6.onmouseover = function () {
         winpic.src = "../img/q_img/g-03 (1).jpg"
     }
 }

//  var left = document.querySelector(".left-button");
//  var right = document.querySelector(".right-button");
//  var list = document.querySelector(".list");
//  var zhanshi = document.querySelector(".zhanshi");
//  var lic = list.children;

//  right.onclick=function(){
//      index++;
//     $('.zhanshi').animate({left:"-420px"},500);
//     for(var j=0;j<lic.length;j++){
//         checked[j].style.border="1px solid #ccc";
//          list[j].style.display="none";
//     }
//     checked[index].style.border="1px solid red";
//     list[index].style.display="block";
//  }