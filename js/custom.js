$(function() {

   setTimeout(function(){
        $('.elgg-page-topbar').css({bottom: '-50px'});
   }, 3000);

   $(".elgg-page-topbar").hover(function(){
        $(".elgg-page-topbar").css("bottom","0");
   },function(){
        $(".elgg-page-topbar").css("bottom","-50px");
   });

});
