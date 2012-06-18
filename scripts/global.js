$(document).ready(function() { 
	
	// show all results in categorylist
	var cntResults = 0;
	$('.searchResultListNavigation').each(function(){
		cntResults++;
		if(cntResults > 10)
			$(this).hide();
	});	
	
	$("#showMoreResults").click(function() {
		  $('.searchResultListNavigation').show();
		  $('.searchResultListNavigationLast').hide();
	});
	
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
    
});
