$(document).ready(function(){
    
    // @@@@@@@@@@@@@@@@@@@@@
    // Common
    // @@@@@@@@@@@@@@@@@@@@@
    
    
    var nowURL = window.location.href;
    var afterhtml = nowURL.split("/html/");
    var characterType , episode;
    // URL 을 체크해서 캐릭터와 에피소드를 알아낸다.
    // URL 규칙은 ?characterType&episode || ?characterType
    checkUrlType();
    
    function checkUrlType(){
        var hashes = window.location.href.slice( window.location.href.indexOf('?') + 1).split('&');
        // default ym&bus
        characterType = "ym";
        episode = "bus";
        if(hashes.length == 2) episode = hashes[1];
        characterType = hashes[0];    
        
//        alert(characterType + " " +episode);
        
    }
    
    
    
    // @@@@@@@@@@@@@@@@@@@@@
    // Home
    // @@@@@@@@@@@@@@@@@@@@@
    
    
    
    // @@@@@@@@@@@@@@@@@@@@@
    // Home_c
    // @@@@@@@@@@@@@@@@@@@@@

    // 캐릭터 테두리 설정
    $('.home_c a.btn_wrapper').hover(function(){
        $(this).addClass("ch_hover");
    },function(){
        $(this).removeClass("ch_hover");
    })

    
    // @@@@@@@@@@@@@@@@@@@@@
    // Home_epi
    // @@@@@@@@@@@@@@@@@@@@@

    // 에피소드 테두리 설정 ( 캐릭터와 동일 )
    $('.home_epi a.btn_wrapper').hover(function(){
        $(this).addClass("ch_hover");
    },function(){
        $(this).removeClass("ch_hover");
    })
    
    $('.epi_btn').click(function(){
        $(".home_epi.outer").hide();
        var video_timer = 5000;
        var epi_name;
        if($(this).is("#epi_bus")){
            $(".mov.outer.bus").removeClass("hide");
            $(".mov.outer.bus video")[0].play();
            epi_name = "bus";
            video_timer = 5000;
        }else if($(this).is("#epi_school")){
            $(".mov.outer.school").removeClass("hide");
            $(".mov.outer.school video")[0].play();
            epi_name = "school";
            video_timer = 15000;
        } else if($(this).is("#epi_job")){
            $(".mov.outer.job").removeClass("hide");
            $(".mov.outer.job video")[0].play();
            epi_name = "job";
            video_timer = 5000;
        }
        
        
        setTimeout(function(){
            window.location.replace(afterhtml[0]+"/html/toon_"+
                                    characterType.replace("#","") +"_"+epi_name
                                    +".html");
            },video_timer);
        
    })
    
    // @@@@@@@@@@@@@@@@@@@@@
    // Toon _ Last
    // @@@@@@@@@@@@@@@@@@@@@
    var toon_epi , toon_ch;
    toon_ch = nowURL.split("_")[1];
    toon_epi = nowURL.split("_")[2];
    toon_epi = toon_epi.split(".html")[0];
    
    // toon 에서 이전으로 넘어갈때 
    $(".go_to_back").click(function(){
        window.location.replace(nowURL.split("toon_")[0] + "home_epi.html?" + toon_ch);
    })
    
    // toon 에서 마지막으로 넘어갈 때 
    $("a.toon_btn.go_to_next").click(function(){
        $(".toon.inner").toggleClass("_back");
        $(".last_hide").hide();
        $(".last_btn").toggleClass("hide");
    })

    
    
    var print_ori_x , print_ori_y , print_x , print_y;
    var offset_x , offset_y;
    
    switch(toon_epi){
        case "bus":
            offset_x = 250;
            offset_y = 90;
            break;
        case "job":
            offset_x = 290;
            offset_y = 90;
            break;
        case "school":
            offset_x = 265;
            offset_y = 90;
            break;
            
    }
    
    print_ori_x = $("#toon_bus_text").css("right");
    print_ori_y = $("#toon_bus_text").css("top");
    print_x = print_ori_x.split("px")[0] - offset_x + "px"; 
    print_y = print_ori_y.split("px")[0] - offset_y + "px"; 
    
    

    
    // 마지막 인쇄 버튼 눌렀을 때
    $("#last_print").click(function(){
        $('#toon_bus_text').css({"right" : print_x , "top" : print_y});
        $(".toon.inner").toggleClass("_back");
        $(".last_btn").toggleClass("hide");
        $("#toon_bus_text").show();
        window.print();
        
        setTimeout(function(){
            $('#toon_bus_text').css({"right" : print_ori_x , "top" : print_ori_y});
            $(".toon.inner").toggleClass("_back");
            $(".last_btn").toggleClass("hide");
            $("#toon_bus_text").hide();
        },500);
         
    })
    
    
        

    
})