<!--

login.php

asks for an email
checks to see if email is in database
if not, it adds it
else it lets you know it's already in the database

-->

<html>

<head>
  
  <link rel="stylesheet" type="text/css" href="../css/login-style.css">
  
  <title>Login</title>

</head>

<body>

  <header id="header">
  
    <h1>Logo</h1>
  
  </header>
  
  
  <form name="login" id="form-login" action="emails.php" method="post">
    
    <input type="text" name="form-email" id="form-email" autocomplete="on" autofocus="on" placeholder="email address"></input>
    
    <input type="submit" name="login-submit" class="submit" value="">
  
  </form>


</body>
</html