<?php

// variables
$host = "localhost";
$user_name = "thelissi_users";
$user_password = "user123";
$database = "thelissi_yeanay";

$user_id = $_REQUEST["QuestionUserId"];
$question_str = $_REQUEST["QuestionStr"];

// check connection
$con=mysqli_connect($host, $user_name, $user_password, $database) or die ("Connection failed.");

// add Question
mysqli_query($con, "INSERT INTO Question (QuestionStr, QuestionUserId, QuestionAnswerCount, QuestionYesCount) VALUES ('$question_str', '$user_id', '0', '0')") or die ("Couldn't insert question into DB");

// update user question asked count
mysqli_query($con, "UPDATE User SET UserQuestionsAskedCount = UserQuestionsAskedCount + 1 WHERE UserId = '$user_id'") or die("Couldn't update user count");

echo "updated user count & added question";

mysql_close($con);
?>