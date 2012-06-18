$(document).ready(function() { 

	var yValue = 1000;

    $("img, a").mouseup(function(){
        $(this).css("opacity", "1");
    }).mousedown(function(){
        $(this).css("opacity", "0.5");
    });

    $('#productDetailNavigation').click(function(){
    	setTimeout(function() {window.scrollTo(0,2000);},400);
    });

	//show and hide Login or Logoutoption
    var session = "<?php echo $_SESSION['USER']; ?>";

    if(session == "")
    {
        $('#loginEntrie').hide();
        $('#logoutEntrie').show();
    }
    else
    {
        $('#logoutEntrie').hide();
        $('#loginEntrie').show();
    }
    
    //hide and show more or less results
    $('.hiddenRes').hide();

	$('#showMore').click(function()
	{
		if($('.hiddenRes').is(':hidden'))
		{
			$('#showMore').html('zeige weniger');
			$('.hiddenRes').css('opacity', '1.0');
		}
		else
		{
			$('#showMore').html('zeige mehr');
			$('.hiddenRes').css('opacity', '0.0');
		}


		$('.hiddenRes').slideToggle('slow');
	})
});
