1.canvas.getContext('2d')
  window.InnerWidth  window.InnerHeight

  random color:
  var rgb=[];
  for(var i=0; i<3;i++)
  {
    rgb.push(Math.floor(Math.random() * 255));
  }

  arr.push()

  beginPath() arr.join(',') arc() fill()

  canvas.addEventListener('mousedown', function(){});

2. fillStyle StrokeStyle
   lineTo() -> stroke() -> moveTo() 
   movedown mousemove mouseup

3. box-sizing: border-box; 
   user-select: none;
   background-color color=>text   
   display: inline-block;
   .radcontrol:hover
   {
 	cursor: pointer;
   }
   innerHTML

4. display: inline-block;
   var colors=['violet','magenta','cyan']  
   
   var swatch=document.createElement('div');
   swatch.className='swatch';
   swatch.style.backgroundColor=colors[i];
   swatch.addEventListener('click', setSwatch);
   document.getElementById('colors').appendChild(swatch);
   var swatch=e.target;