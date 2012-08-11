(function ($) {
  Drupal.behaviors.dragModule = function (){
    // the element with a class .draggable become draggable
    $('.draggable').draggable();
  
    // Make something when the drag stops 
    
    $('.draggable').bind('dragstop', function(event, ui){
        alert('the drag has stopped !');
     }); 
  };
}(jQuery));

