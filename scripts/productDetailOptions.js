$(document).ready(function() { 
    $('#productDetailNavigation a').live( 'click' , function () {

        $(this).next().slideToggle('slow', function(){

            $(this).prev().text(function(){
                if ($(this).next().is(":visible")) 
                {
                    $(this).css("background-image", "url(images/productDetailNavigationBackgroundClose.png), url(images/productDetailNavigationBackground.png)"); 
                }    
                else 
                { 
                    $(this).css("background-image", "url(images/productDetailNavigationBackgroundOpen.png), url(images/productDetailNavigationBackground.png)");
                }    
            });  
        
        });
        
        return false;
    
    }).next().hide(); 
});