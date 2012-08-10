alert('je suis chargé');


(function ($) {
  Drupal.behaviors.dragModule = function (){
    $('.draggable').draggable(); 
  };
}(jQuery));

