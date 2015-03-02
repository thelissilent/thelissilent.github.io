<?php

// variables
$host = "localhost";
$user_name = "thelissi_users";
$user_password = "user123";
$database = "thelissi_yeanay";

$user_id = $_REQUEST["UserId"];

// check connection
$con=mysqli_connect($host, $user_name, $user_password, $database) or die ("Connection failed.");

// query database
$sql=mysqli_query($con, "SELECT * FROM Question WHERE QuestionUserId = '$user_id'");

$json_response = array();

while($row=mysqli_fetch_assoc($sql)){
    $json_response[] = $row;

}

mysqli_close();

echo json_encode($json_response);

?>