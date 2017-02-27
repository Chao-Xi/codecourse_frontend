$('form.ajax').on('submit', function(){

      var self=$(this);
      var url=self.attr('action');
      var type=self.attr('method');
      var data={};
      
      //attribute=>[name]  find('[name]')  
      self.find('[name]').each(function(index, value){
          var that=$(this),
              name=that.attr('name'),
              value=that.val();

          data[name]=value;      
      });
     
     $.ajax({
        url: url,
        type: type,
        data: data,
        success: function(response)
        {
          console.log(response);	
        }
     }); 
     
     return false;  
});