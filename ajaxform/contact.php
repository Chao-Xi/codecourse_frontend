<?php
  if(isset($_POST['name'], $_POST['email'], $_POST['message']))
  {
  	echo "Your name is ".$_POST['name'].' ';
  	echo "Your email is ".$_POST['email'].' ';
  	echo "Your message is ".$_POST['message'].' ';
  }