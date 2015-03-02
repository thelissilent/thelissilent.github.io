<?php

// variables
$host = "localhost";
$user_name = "thelissi_users";
$user_password = "user123";
$database = "thelissi_yeanay";

//$user_id = $_REQUEST["UserId"];
//$user_name = $_REQUEST["UserName"];

$user_id = 4;
$user_name = "Melissa Hill";


// check connection
$con=mysqli_connect($host, $user_name, $user_password, $database) or die ("Connection failed.");

// check for user id
$sql_search = mysqli_query($con, "SELECT * FROM User WHERE UserId = '$user_id'");

if ($sql_search) {
	
    mysqli_close($con);
} else {    
    $sql_insert = mysqli_query($con, "INSERT INTO User (UserId, UserName) VALUES ('$user_id', '$user_name')");
    
}

mysqli_close();

?>