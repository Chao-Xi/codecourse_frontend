<!DOCTYPE html>
<html>
<head>
	<title>Ajax Form</title>
</head>
<body>
    <form action="contact.php" method="post" class="ajax">
    	 <div>
    	 	<input type="text" name="name" placeholder="Your name">
    	 </div>
         
         <div>
    	 	<input type="email" name="email" placeholder="Your email" style="margin-top:10px;">
    	 </div>
         
         <div>
    	 	<textarea name="message" placeholder="Your messsage" style="margin-top:10px;"></textarea>
    	 </div>
    	 <input type="submit" value="submit" style="margin-top:10px;">
    </form>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>