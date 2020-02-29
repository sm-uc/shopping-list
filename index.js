$(function(){
    
    $("#js-shopping-list-form").on('submit',function(event){
 event.preventDefault();

 let newItem = $(this).find('input[name="shopping-list-entry"]').val();
 console.log(newItem);
 let itemHtml = `<li>
 <span class="shopping-item">${newItem}</span>
 <div class="shopping-item-controls">
   <button class="shopping-item-toggle">
     <span class="button-label">check</span>
   </button>
   <button class="shopping-item-delete">
     <span class="button-label">delete</span>
   </button>
 </div>
</li>`
  $('.shopping-list').append(itemHtml);


  

});

// On check button click
$('.shopping-list').on('click','.shopping-item-toggle',function(event){
   
    $(this).closest('li').children('span').hasClass('shopping-item__checked')?
    $(this).closest('li').children('span').removeClass('shopping-item__checked'):
    $(this).closest('li').children('span').addClass('shopping-item__checked')
});


//on click of delete
  $('.shopping-list').on('click','.shopping-item-delete',function(event){
     
     $(event.currentTarget).closest('li').remove();
     
  });
})