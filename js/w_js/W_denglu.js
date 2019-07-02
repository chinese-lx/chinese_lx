var enter=document.querySelector('.enter');
var register=document.querySelectorAll('.register');
var tuichu=document.querySelector('.tuichu');
var ppmask=document.querySelector('.ppmask');
var regist=document.querySelector('.regist');
var login=document.querySelectorAll('.login');
var regist=document.querySelector('.regist');
var zhucedle=document.querySelector('.zhucedle');
var adv=document.querySelector('.adv');
var zhuce2=document.querySelector('.zhuce2');
var span11 = document.querySelectorAll(".span11")
var dalibao = document.querySelectorAll(".dalibao")

tuichu.onclick=function(){
    ppmask.style.display='none';
    enter.style.display="none";
}
for(let i=0;i<2;i++){
register[i].onclick=function(){
    enter.style.display="block";
    ppmask.style.display='block';
};

login[i].onclick=function(){ 
    regist.style.display="block";
    ppmask.style.display='block';  
}
}

zhucedle.onclick=function(){
    ppmask.style.display="none";
    regist.style.display="none";
}
adv.onclick=function(){
    enter.style.display="block";
    regist.style.display="none";
    
}
zhuce2.onclick=function(){
    enter.style.display="none";
    regist.style.display="block";
}
$("#usname").focus(function(){})
$("#usname").blur(function(){
    var emVl=$("#usname").val();
    var phRreg =/^1[3-9]\d{9}$/;
    var emRreg=/^[1-9a-zA-Z]\w{2,19}@\w{2,10}(\.[a-zA-Z]{2,4}){1,}$/;
    cc=emRreg.test(emVl); 
    bb=phRreg.test(emVl);
    console.log(cc)
    console.log(bb)
 if(cc||bb){

 }else{
        alert("邮箱/手机格式错误")
    }
});

$("#password").focus(function(){})
$("#password").blur(function(){
    var pslvv=$("#password").val();
    var psRreg = /^\d{6,8}$/;
    dd=psRreg.test(pslvv);
    console.log(dd)
 if(dd){

 }else{
        alert("密码格式错误")
    }
});

$("#phonee").focus(function(){})
$("#phonee").blur(function(){
    var emmVl=$("#phonee").val();
    var phhRreg = /^1[3-9]\d{9}$/;
    var emmRreg=/^[1-9a-zA-Z]\w{2,19}@\w{2,10}(\.[a-zA-Z]{2,4}){1,}$/;
    ff=emmRreg.test(emmVl);
    ee=phhRreg.test(emmVl);
 if(ff||ee){

 }else{
        alert("邮箱/手机格式错误")
    }
});

$("#passw").focus(function(){})
$("#passw").blur(function(){
    var psslvv=$("#passw").val();
    var pssRreg = /^\d{6,8}$/;
    jj=pssRreg.test(psslvv);
 if(jj){

 }else{
        alert("密码格式错误")
    }
})


    

// <--注册-->
$('.submita').click(function () {  
    var user = $("#usname").val()
    var pass = $("#password").val()
    var pass2 = $("#password2").val()
    // if(emailReg.test(user)||phone.test(user)){
    //     alert('aaaa')
    // }pass2!=pass
    if(user==""&pass==""){
        alert("账号密码不能为空")
    }else if(pass2!=pass){
        alert("密码不一致 重新输入")
}else{
        $.ajax({     
        url: 'data/w_json/login.php',
        type: 'get',
        data: "act=add&user="+user+"&pass="+pass,// login.php?act=xxx&user=用户名&pass=密码
        dataType: 'json',
        cache: false,
        success: function (json){
            console.log(json)
            console.log(json.msg);
            if(json.err==1){
                alert(json.msg)
            }else if(json.err==0){
            $(".regist").css("display","none")
            $(".ppmask").css("display","none")
            alert("注册成功，请登录")
            }
        },
        error: function (err) {
            console.log(err)
        } 
    });
        }
})

// <--登陆-->
$('.submita2').click(function () {
    var user = $(".phvl").val()
    var pass = $(".pwvl").val()
    if(user==""&pass==""){
        alert("账号密码不能为空")
}else{
    $.ajax({
            url: 'data/w_json/login.php',
            type: 'get',
            data: "act=login&user="+user+"&pass="+pass,
            dataType: 'json',
            cache: false,//不使用缓存
            success: function (json){
                console.log(json)
                alert(json.msg); 
                if(json.err==1){
                    $('.enter').css("display","block");
                    $('.ppmask').css("display","block");     
                }else{
                    $('.enter').css("display","none");
                $('.ppmask').css("display","none");

                for(let i=0;i<2;i++){
                login[i].innerHTML=user
                span11[i].style.display="none"
                register[i].style.display="none"
                dalibao[i].style.display="none"
                }; 

            }
                
                           
            },
            error: function (err) {
                // console.log(err);
                // $('.enter').css("display","block");
                // $('.ppmask').css("display","block");     
            }  
        })
    }
    
})

