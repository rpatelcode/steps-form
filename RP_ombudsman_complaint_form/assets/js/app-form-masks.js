var App = (function () {
  'use strict';
  
  App.masks = function( ){

    $("[data-mask='postalCode']").mask("a9a 9a9");
    $("[data-mask='date']").mask("99/99/9999");
    $("[data-mask='phone']").mask("(999) 999-9999");
    $("[data-mask='phone-ext']").mask("(999) 999-9999? x99999");
    $("[data-mask='phone-int']").mask("+33 999 999 999");
    $("[data-mask='taxid']").mask("99-9999999");
    $("[data-mask='ssn']").mask("999-99-9999");
    
  };

  return App;
})(App || {});
