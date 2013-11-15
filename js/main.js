$(function() {

   $('html, body, .elgg-page-default, .elgg-page-body, .elgg-inner, .elgg-layout').mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 60);

      event.preventDefault();

   });

   setTimeout(function(){
        $('.elgg-page-topbar').css({bottom: '-50px'});
   }, 3000);

   $(".elgg-page-topbar").hover(function(){
        $(".elgg-page-topbar").css("bottom","0");
   },function(){
        $(".elgg-page-topbar").css("bottom","-50px");
   });

});
