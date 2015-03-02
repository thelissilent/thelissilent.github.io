<?php

// variables
$host = "localhost";
$user_name = "thelissi_users";
$user_password = "user123";
$database = "thelissi_yeanay";

//$question_id = $_REQUEST["QuestionId"];
//$user_id = $_REQUEST["UserId"];

$question_id = 70;
$user_id = 1;

// check connection
$con=mysqli_connect($host, $user_name, $user_password, $database) or die ("Connection failed.");

// query database
$sql=mysqli_query($con, "INSERT INTO QuestionAnsweredByUser VALUES('$question_id', '$user_id')");

mysqli_close();
?>