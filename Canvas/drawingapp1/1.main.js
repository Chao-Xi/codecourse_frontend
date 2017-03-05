var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');

var radius=10;

canvas.width=window.innerWidth;//=>page width and height
canvas.height=window.innerHeight;

var rgb=[];
for(var i=0; i<3;i++)
{
  rgb.push(Math.floor(Math.random() * 255));
}

var putPoint=function(e)
{
   context.beginPath();
   context.fillStyle='rgb('+rgb.join(',')+')';
   context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
   context.fill();
}

canvas.addEventListener('mousedown', putPoint);
//The addEventListener() method attaches an event handler to the specified element.