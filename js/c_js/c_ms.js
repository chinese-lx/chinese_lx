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