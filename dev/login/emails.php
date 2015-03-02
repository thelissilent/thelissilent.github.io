<!--

emails.php

tells you have have successfully submitted this email
-->

<html>

<head>
  
  <link rel="stylesheet" type="text/css" href="../css/login-style.css">
  
  <title>Login Email</title>

</head>

<body>

  <header id="header">
  
    <h1>Login</h1>
  
  </header>
  
  
	<p>Thanks for joining! We've aded <?php $username = $_POST['form-email']; echo "<b>{$username}</b>"; ?> to our email list.</p>


</body>
</html>