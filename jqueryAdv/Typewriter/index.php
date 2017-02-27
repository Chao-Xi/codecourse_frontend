<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>
<body>
     <div id="box"></div>
     <script type="text/javascript">
     	  var text="";
     	  var count=0;
     	  var maxspeed=500;

     	  $(function(){
            
            function typeit(punch)
            {
               text=punch;
               type();
            }

            function character(start, end, text)
            {
            	return text.substring(start, end);
            }
         
            function type()
            {
              var random=Math.floor(Math.random() * maxspeed);
              setTimeout(type, random);
              $('#box').append(character(count, count+1, text));
              count++;	
            }
           
           //document.write(character(0, 1, 'php'));
           typeit("westworld - different world, new life!");
     	  });
     </script>
</body>
</html>