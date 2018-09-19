

$("#myvia,#playmyinfo").mouseenter(function(){
    $("#playmyinfo").css("display","block");});

$("#myvia,#playmyinfo").mouseleave(function(){
    $("#playmyinfo").css("display","none");});


function hideAndShow(kind){
    if(kind == 1){
        //show the login and hide the regist
        $('#registModal').modal('hide');
        $('#loginModal').modal('toggle');
    }
    else if(kind == 2){
        $('#loginModal').modal('hide');
        $('#registModal').modal('toggle');
    }
}