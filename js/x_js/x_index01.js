var box=document.querySelector('.box');
var imLi = box.children;
var uu = document.querySelector(".uu");
var uuLi = uu.children;
var timer1 = setInterval(playGame,3000);
var index = 0;
function playGame(){  
    index++;
    for(var i=0;i<imLi.length;i++){
        // imLi[i].style.opacity=0;
        animate(imLi[i],{opacity:0},10)
        uuLi[i].className="";
    }
    if(index==2){
        index=0;
    }
    // imLi[index].style.opacity=100;
    animate(imLi[index],{opacity:100},10)
    uuLi[index].className="current"
}

for (let i = 0; i < uuLi.length; i++) {
    
    uuLi[i].onmouseover = function(){
        clearInterval(timer1)
       
            for (var j = 0; j < uuLi.length; j++) {
                uuLi[j].className = "";
                imLi[j].style.opacity=0;
            }
            index = i;
            animate(imLi[index],{opacity:100},10);
            uuLi[index].className = "current";
    }
        uuLi[i].onmouseout = function(){
            timer1 = setInterval(playGame,3000);
        }
        
    }

    var x_goods=document.querySelectorAll(".x_goods");
    var x_one=document.querySelectorAll(".x_one");  
    for(var i = 0;i < x_goods.length;i++){
        x_goods[i].index = i;
        x_goods[i].onmouseover=function(){             
            x_one[this.index].style.display="block";
            x_one[this.index].style.opacity="1";
        } 
    }
    for(var i=0;i< x_one.length;i++){
        x_one[i].index = i;
        x_one[i].onmouseout=function(){       
        this.style.display="none";
        this.style.opacity="0";
        }
    }
/********************************/
   var x_inter=document.querySelectorAll(".x_inter");
   var x_two=document.querySelectorAll(".x_two");
   for(var i = 0;i < x_inter.length;i++){
    x_inter[i].index = i;
    x_inter[i].onmouseover=function(){             
        x_two[this.index].style.display="block";
        x_two[this.index].style.opacity="1";
    } 
}
for(var i=0;i< x_two.length;i++){
    x_two[i].index = i;
    x_two[i].onmouseout=function(){       
    this.style.display="none";
    this.style.opacity="0";
    }
}


   


    
   
   
    
    
    