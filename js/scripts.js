$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing .text").toggle();
    $("#walrus-showing").fadeToggle();
    // $("#walrus-showing").toggle();
    $("#walrus-hidden .text").toggle();
    $("#walrus-hidden").fadeToggle();
  });
});
