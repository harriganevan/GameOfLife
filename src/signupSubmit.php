<?php
	/* Saving users data  */
	$username= $_POST["uname"];
	$password=$_POST["psw"];
	
	$file= fopen("accounts.txt", "a");
    fwrite($file, "$username|$password\n");
    fclose($file);




?>

<html>
	<h1>Thank you!</h1>
	<p>Welcome to the Game Of Life!</p>
	<p>Now <a href="https://codd.cs.gsu.edu/~trodriguez10/WebPro/GW3/login.html">log in to play the game!</a></p>
</html>
	
