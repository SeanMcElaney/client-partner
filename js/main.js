$("#nav_icon").on("click",function(){
$("#nav_main").toggleClass("expanded ");
$(".expanded").slideToggle("slow");

});



$(document).ready(function(){
 if (jQuery) {
  // jQuery is loaded
 alert("Yeah!");
 } else {
 // jQuery is not loaded
 alert("Doesn't Work");
     }
 });
