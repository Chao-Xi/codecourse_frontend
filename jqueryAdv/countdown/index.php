<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>
<body>
 <div id="box"></div>
     <script type="text/javascript">
     	 $(function(){
            var number;
            var url;

            function redirect(num, go)
            {
            	number=num;
            	url= go;
            	countdown();
            }


     	    function countdown()
     	    {
              setTimeout(countdown, 1000);
              $('#box').html("Redirecting in "+ number + " seconds.");
              number--;              
     	   
     	      if(number<0)
     	      {
     	    	window.location=url;
     	    	number=0;
     	      }       
             }
           
           redirect(15, "http://www.thexichao.com");
     	 });
     </script>
</body>
</html>