var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');

var radius;
var dragging=false;

canvas.width=window.innerWidth;//=>page width and height
canvas.height=window.innerHeight;

var rgb=[];
for(var i=0; i<3;i++)
{
  rgb.push(Math.floor(Math.random() * 255));
}

var color='rgb('+rgb.join(',')+')'
context.fillStyle=color;
context.strokeStyle=color;
context.lineWidth=radius*2;

var putPoint=function(e)
{  
  if(dragging)
  {  
  	 context.lineTo(e.clientX, e.clientY);
  	 context.stroke();
     context.beginPath();
     context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
     context.fill();
     context.beginPath();
     context.moveTo(e.clientX, e.clientY);
    }
}
 
var engage=function(e)
{
   dragging=true;
   putPoint(e);
}

var disengage=function()
{
   dragging=false;
   context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);
//The addEventListener() method attaches an event handler to the specified element.