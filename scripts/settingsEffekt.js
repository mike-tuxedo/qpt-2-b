$(document).ready(function() { 
    $("#settings").hide();

    $(".showSettings").click(function() {
        var opacity = $("#contentArea").css('opacity');
        if(opacity == 1) {
            $("#contentArea").fadeTo("slow", 0.2);

            $("#contentArea a").css("cursor", "default");

            // disable click on links  
            $("#contentArea a").bind('click', function(){ 
                return false; 
            });
        }    
        else {
            $("#contentArea").fadeTo("slow", 1);

            $("#contentArea a").css("cursor", "auto");

            // enable click on links
            $("#contentArea a").unbind();
        }    

        $("#settings").slideToggle(300);
        
    });    

    $('#contentArea').click(function() {
        var opacity = $("#contentArea").css('opacity');
        if(opacity < 0.3) {
            $("#contentArea").fadeTo("slow", 1);
            $("#settings").slideToggle(300);
            $("#contentArea a").unbind();
        }   
    });
});