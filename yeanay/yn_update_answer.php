<?php

// variables
$host = "localhost";
$user_name = "thelissi_users";
$user_password = "user123";
$database = "thelissi_yeanay";

$question_id = $_REQUEST["QuestionId"];
$answer = $_REQUEST["Answer"];
$user_id = $_REQUEST["UserId"];


// check connection
$con=mysqli_connect($host, $user_name, $user_password, $database) or die ("Connection failed.");

// Check to see if user has already answered that question

$sql=mysqli_query($con, "SELECT * FROM QuestionAnsweredByUser WHERE QuestionId = '$question_id' AND UserId = '$user_id'") or die("Couldn't find Answers");

if (mysqli_num_rows($sql)) {
 
    mysql_close($con);
    
} else {
    
    // add the user answer
    mysqli_query($con, "INSERT INTO QuestionAnsweredByUser VALUES('$question_id', '$user_id')");
    

    // update answer count
    mysqli_query($con, "UPDATE Question SET QuestionAnswerCount = QuestionAnswerCount + 1 WHERE QuestionId = '$question_id'" );
    
    // update answer choice
    if ($answer == yes) {
        mysqli_query($con, "UPDATE Question SET QuestionYesCount = QuestionYesCount + 1 WHERE QuestionId ='$question_id'");
    }
    
    // update user answer count
    mysqli_query($con, "UPDATE User SET UserQuestionsAnsweredCount = UserQuestionsAnsweredCount + 1 WHERE UserId = '$user_id'");
    
}

mysql_close($con);
?>