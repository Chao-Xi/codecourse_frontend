<?php
   // header('Content-tye:text/html;charset=utf-8'); 
   $data=$_POST['img'];

   $data=str_replace('data:image/png;base64,','', $data);
   $data=str_replace(' ', '+', $data);

   $img=base64_decode($data);
   //print_r($img);
   
   $path='images/'.uniqid().'.png'; 
   // print $path;
   if(file_put_contents($path, $img))
   {
     print $path;
   }else
   {
   	header("HTTP/1.1 500 Internal Server Error");
   }
?>   

