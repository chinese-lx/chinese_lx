    var tu = document.querySelectorAll(".tu")
    var bd = document.querySelectorAll(".b_d")
    var bn_left = document.getElementById("bn_l")
    var bn_right = document.getElementById("bn_r")
    var banner1 = document.getElementById("banner1")
    var bn_lr=document.getElementById("bn_lr")
    var index=0;
    //ban鼠标进出
    banner1.onmouseover = function(){
            //停止轮播
			animate(bn_lr,{opacity:100},10);
    }
    banner1.onmouseout = function(){
            //开启轮播 
		animate(bn_lr,{opacity:0},10);
    }
    //左边<
    bn_right.onclick = function(){
            index++;
			if(index == 4){
				index = 0;
			}
			for (var i = 0; i < tu.length; i++) {
                tu[i].style.display = "none";
                bd[i].style.background="black"
            }
            tu[index].style.display = "block";
            bd[index].style.background="red"
    }
    //右边>
    bn_left.onclick = function(){
            index--;
			if(index == -1){
				index = 3;
			}
			for (var i = 0; i < tu.length; i++) {
                tu[i].style.display = "none";
                bd[i].style.background="black"
            }
            tu[index].style.display = "block";
            bd[index].style.background="red"
            console.log(index) 
    }
    //下方小点点
    for(let o=0;o<bd.length;o++){
        bd[o].onclick = function(){
            index = o;
            for (var i = 0; i < bd.length; i++) {
                tu[i].style.display = "none";
                bd[i].style.background="black"
            }
            tu[index].style.display = "block";
            bd[index].style.background="red"
        }
    }