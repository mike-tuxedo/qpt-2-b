<?php
include 'header.php';

$name = $_POST['nickname'];
$pw = $_POST['password'];
$nameFieldLength = strlen($name);
$passwordLength = strlen($pw);
$nameRegEx = '/^[a-zA-Z0-9.üäöß._-]*$/';

//check RegEx rules
if(!preg_match($nameRegEx, $name) || $nameFieldLength < 3 || $passwordLength < 3)
	header("Location: settingsLogin.php?loginError=userNotFound");
else
{
	if ( strlen($name) )
	{
		if( check_login($name, $pw) )
		{
			$_SESSION[ 'USER' ] = $name;
			header("Location: index.php");
			exit;
		}
		else
			header("Location: settingsLogin.php?loginError=userNotFound");
	}
	else
		header("Location: settingsLogin.php?loginError=emptyUsername");
}

function check_login( $u, $p )
{
	include 'header.php';

	$sql = "SELECT COUNT(*)
			FROM fhs_members fmem
			WHERE fmem.nme=? AND fmem.pw=?";
	$stmt = $connect -> prepare($sql);
	$stmt -> bind_param('ss', $u, $p);
	$stmt -> execute();
	$stmt -> bind_result($locatedUsers);
	$stmt -> fetch();
	$stmt -> close();

	if($locatedUsers == 0 || $locatedUsers > 1)
		return false;
	else
		return true;
}
?>
