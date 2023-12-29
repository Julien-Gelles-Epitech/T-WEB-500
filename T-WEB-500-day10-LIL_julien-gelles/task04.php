<?php
	//---SQL-INIT--
	$mysql_host = "localhost";
	$mysql_user = "root";
	$mysql_password = "password";
	$mysql_database = "db";

	$connection = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_database);
	if(!$connection) die('Unable to connect to database : '.mysqli_connect_error());
	mysqli_set_charset($connection,"utf8");

	$exist = mysqli_query($connection, "SHOW TABLES LIKE 'products';");
	if(mysqli_num_rows($exist) == 0) {
		echo "exists not\n";
		$query = file_get_contents("ajax_products.sql");
		mysqli_multi_query($connection, $query);
		while(mysqli_next_result($connection)){}
	}
	//--VERIF-TYPE-
	$type = $_POST["type"];
	if ($type == "") {
		echo json_encode(array("message" => "No type sent yet!"), header('Content-type: application/json'));
	}
	elseif (strlen($type) < 3) {
		echo json_encode(array("message" => "$type: this type does not have enough characters."), header('Content-type: application/json'));
	}elseif (strlen($type) > 10) {
		echo json_encode(array("message" => "$type: this type has too many characters."), header('Content-type: application/json'));
	}elseif (mysqli_num_rows(mysqli_query($connection, "SELECT * FROM products WHERE type = '$type';")) > 0) {
		echo json_encode(array("message" => "$type: this type exists in databases."), header('Content-type: application/json'));
	}else{
		echo json_encode(array("message" => "$type: this type doesn't exist in our shop."), header('Content-type: application/json'));
	}

	// echo $type."\n";
	// $regex = "[a-zA-Z]";
	// if (preg_match($regex, $type)) {
	// 	echo "match\n";
	// }else {
	// 	echo "don't match\n";
	// }
?>