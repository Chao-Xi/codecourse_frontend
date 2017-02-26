var countdown=function(end, elements, callback)
{
    var _second=1000,
        _minute=_second*60,
        _hour=_minute*60,
        _day=_hour*24,

        end=new Date(end),
        timer,
    
        calculate =function()
       {
         //console.log(end);
         var now=new Date(),
             remaining=end.getTime()-now.getTime(),
             data;
         
         if(isNaN(end)) //NAN not a number
         {
            console.log('Invalid date/time');
            return;
         } 

         if(remaining <= 0)
        {
             //clear our timer
             //callback
              clearInterval(timer);
              if(typeof callback==='function')
              {
                callback();
              }  
        } else {
          if(!timer)
          {
            timer=setInterval(calculate, _second); 
          } 
         
          data={
            'days' : Math.floor(remaining / _day),
            'hours' : Math.floor((remaining % _day) / _hour ),
            'minutes' : Math.floor((remaining % _hour) / _minute ),
            'seconds' : Math.floor((remaining % _minute) / _second ),
          }
       
         if(elements.length)
         {
         for(x in elements)
         {
            var x=elements[x];
            data[x]=('00'+ data[x]).slice(-2);
            document.getElementById(x).innerHTML=data[x];
         }   
         }  
        } 
        
       };
     
     calculate();
}