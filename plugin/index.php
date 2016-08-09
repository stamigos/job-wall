<?php 
	
	header('Content-Type: text/javascript');
	$company = $_GET['company'];
	
	echo "const jobufo_company = " .$company. ";\n\n";
	include("core.js");

?>

