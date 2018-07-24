$(document).ready(function(){
//    $("#auto_movie")[0].play();
    
    
    setTimeout(function(){
        
        
        $("#auto_movie").trigger('play');
        $("#auto_movie")[0].play();
        
//        $("video").each(function(){
//            $(this).get(0).play();
//        });
        
        
        
        alert("!");
    },3000);


})

