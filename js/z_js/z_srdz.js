$(function(){
    $.ajax({
        type:'get',
        url:'../data/z_srdz.json',
        dataType:'json',
        // cache:false,
        sucess:function(json){
            alert(json)
            // $.each(json,function(index,tatget){
            //     console.log(tatget);
            // })
        }
        
    })
})