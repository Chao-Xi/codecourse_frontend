$.ajax({
	url: 'books.xml',
	dataType:'xml',
	success:function(data)
	{
	   $(data).find('catalog book').each(function(){
           var book=$(this).find('description').text();
           var id=$(this).attr('id');
           var author=$(this).find('author').text();

            $('.books ul').append(
               $('<li/>', {
                   text: '('+id+')'+book+'--&'+author 
               })
           );
	   });
	},
	error: function()
	{
		$('.books').txt('failed to get feed');
	}
})