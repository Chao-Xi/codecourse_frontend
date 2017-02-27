var res={
	loader: $('<div />', {class: 'loader'}),  //jquery object <div class="loader"></div>
	container: $('.container')
}

$('a.load').on('click', function(){

     $.ajax({
     	url:'delay.php',
     	beforeSend:function()
     	{
     	  res.container.append(res.loader);
     	},
     	success:function(data)
     	{
     	//proccessing
     	res.container.html(data);
     	res.container.find(res.loader).remove();	
        }
     });

});