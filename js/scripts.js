$(document).ready(function(){
  var height = parseInt(prompt("What is your height in feet?"));

  if (height >= 5) {
    $(".adult-ride-1, .adult-ride-2, .family-ride-1, .family-ride-2").show();
  }
  else {
    $(".kid-ride-1, .family-ride-1, .family-ride-2"). show();
  }
});
