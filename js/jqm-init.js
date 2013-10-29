"use strict";

// override some jqm defaults, need to be done before jqm is loaded
$(document).bind("mobileinit", function(){
  $.mobile.page.prototype.options.domCache = false;
  $.mobile.pushStateEnabled = false;
  $.mobile.defaultPageTransition = "none";

  $.event.special.swipe.horizontalDistanceThreshold = 90;
  $.event.special.swipe.scrollSupressionThreshold = 120;
  $.mobile.buttonMarkup.hoverDelay = 20;

  // page loading widget (when checking the card on the server)
  $.mobile.loader.prototype.options.text = "Momentje..";
  $.mobile.loader.prototype.options.textVisible = true;
  $.mobile.loader.prototype.options.theme = "b";
//  $.mobile.loader.prototype.options.html = "";
});