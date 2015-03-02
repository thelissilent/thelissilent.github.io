<?php
$con=mysqli_connect("localhost","thelissi_users", "user123", "thelissi_yeanay");
// Check connection
if (mysqli_connect_errno()) {
  echo "<h1>Failed to connect to MySQL: " . mysqli_connect_error() . "</h1>";
}

// add a user
$sql = mysqli_query($con, "INSERT INTO User (UserName, UserEmail, UserQuestionsAskedCount, UserQuestionsAnsweredCount) VALUES ('Emily Scholl', 'e@s', 0, 0)");

$sql = mysqli_query($con, "INSERT INTO User (UserName, UserEmail, UserQuestionsAskedCount, UserQuestionsAnsweredCount) VALUES ('Martha Stewart', 'm@s', 0, 0)");

// ask two questions for user 10
$sql = mysqli_query($con, "INSERT INTO Question (QuestionStr, QuestionUserId, QuestionAnswerCount, QuestionYesCount) VALUES ('Should I get a haircut?', 20, 0, 0)");

$sql = mysqli_query($con, "INSERT INTO Question (QuestionStr, QuestionUserId, QuestionAnswerCount, QuestionYesCount) VALUES ('Virgin?', 20, 0, 0)");

$sql = mysqli_query($con, "INSERT INTO Question (QuestionStr, QuestionUserId, QuestionAnswerCount, QuestionYesCount) VALUES ('Are you a man?', 21, 0, 0)");

$sql = mysqli_query($con, "INSERT INTO Question (QuestionStr, QuestionUserId, QuestionAnswerCount, QuestionYesCount) VALUES ('Should I see the Giver?', 1, 0, 0)");

// export all questions for user 10
$sql=mysqli_query($con, "SELECT * FROM Question WHERE Question.QuestionUserId = 10");
$json_response = array();

while($row=mysqli_fetch_assoc($sql)){
    $json_response[] = $row;
}

mysqli_close();
echo json_encode($json_response);
?>