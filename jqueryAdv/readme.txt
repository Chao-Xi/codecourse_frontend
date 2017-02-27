1.scrolling header
  css:
  background: rgba(255,255,255,0.8);
  //keep the color, just change the opacity
  text:
  font-size:16px;       font-weight: bold;
  font-family: Georgia;  line-height: 0px;   text-align: center

  js:
  speed==undefined(predefined value)
  html("<div id='text'>"+text+"</div>");=>set html()
  slideToggle() delay()


2.countdown
  
             function type()
            {
              var random=Math.floor(Math.random() * maxspeed);
              setTimeout(type, random);  
              //1.setTimeOut() //only carry this code once
              //2.js function can call itself directly

              $('#box').append(character(count, count+1, text));
              count++;	
            }
            //append()=>add text 
          
            text.substring(start, end); =>  str.substring(start, end)
            
            function typeit(punch)
            {
               text=punch;
               type();  =>can pass the parameter into function
            }

3.ajax page loading
  
  css: list-style: none;
  display: inline;

  $('#content').load('content/'+page+'.php');
  $('ul#nav li a').click(function(){     
     var page=$(this).attr('href');
     { (li a)=>$(this) }
     attr()  prop()

4. Ajax_wait_loading
  
  css.
  background:rgba(255, 255, 255 ,0.8) => opacity
  url('animal.gif')                   => url('')
  no-repeat                           => no repeat 
  50%;                                => position
 
  php.
  sleep(5)  => delay

  json: var res={
	            loader: $('<div />', {class: 'loader'}), 
	           //jquery object <div class="loader"></div>      
	            container: $('.container')
	           //$('.container')
               }

         beforeSend:function()
     	{
     	  res.container.append(res.loader);
     	  //ajax res.container.append()
     	} 
       
        success:function(data)
     	{
     	res.container.html(data);
     	res.container.find(res.loader).remove();	
        }

        find(res.loader).remove()

5.  jQuery XML 
    $.ajax({ }); 
    
    url: 'books.xml',
	dataType:'xml',
    
    success:function(data)
	{   
        $(data).find('catalog book').each(function(){});
        
        var book=$(this).find('description').text();
        var id=$(this).attr('id');

        $('.books ul').append(
             $('<li/>', {
                   text: '('+id+')'+book+'--&'+author 
               })
         );
     
     error: function()





