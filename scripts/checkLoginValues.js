$(document).ready(function(){
	$('#loginForm').submit(function(){
		var nameFieldLength = $('#nickname').val().length;
		var passwordLength = $('#password').val().length;
		var name = $('#nickname').val();
		var nameRegEx = /^[a-zA-Z0-9.üäöß._-]*$/;

		if(nameFieldLength < 3 || !nameRegEx.test(name))
		{
			$('#nickname').css('background', '#f33');
			$('p#missingFieldMsg').text('Name muss min 3 Zeichen lang sein');
			return false;
		}
		else if(passwordLength < 3)
		{
			$('#password').css('background', '#f33');
			$('#missingFieldMsg').text('Passwort muss min 3 Zeichen lang sein');
			return false;
		}
	});

	$('input').click(function(){
		$(this).css('background', 'white');
	});
});