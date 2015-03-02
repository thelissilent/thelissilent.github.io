<?php

// variables
$host = "localhost";
$user_name = "thelissi_users";
$user_password = "user123";
$database = "thelissi_yeanay";

$user_id = $_REQUEST["UserId"];
$user_fl_name = $_REQUEST["UserName"];

// check connection
$con=mysqli_connect($host, $user_name, $user_password, $database) or die("Connection failed.");

// check for user id

$sql_search = mysqli_query($con, "SELECT * FROM User WHERE UserId = '$user_id'");

if (mysqli_num_rows($sql_search)) {
    echo "found user!";
    mysqli_close($con);
} else {    
    mysqli_query($con, "INSERT INTO User VALUES ('$user_id', '$user_fl_name', 0, 0)");
    echo "couldn't find user! adding now...";
}

mysqli_close();

?>