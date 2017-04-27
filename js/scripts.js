$(document).ready(function(){
  var height = parseInt(prompt("What is your height in feet?"));

  if (height >= 5) {
    $(".park-policies").show();
    $("#park-policies, #loop-di-loop, #drop-of-death, #fun-wheel, #teacup-twirl").show();

    $("#park-policies").click(function() {
      $(".park-policies").fadeIn();
    });

    $("#loop-di-loop").click(function() {
      $(".adult-ride-1").fadeIn();
      $(".adult-ride-1").siblings().hide();

    });

    $("#drop-of-death").click(function() {
      $(".adult-ride-2").siblings().hide();
      $(".adult-ride-2").fadeIn();
    });

    $("#fun-wheel").click(function() {
      $(".family-ride-1").siblings().hide();
      $(".family-ride-1").fadeIn();
    });

    $("#teacup-twirl").click(function() {
      $(".family-ride-2").siblings().hide();
      $(".family-ride-2").fadeIn();
    });

  }
  else {
    $(".park-policies"). show();

    $("#park-policies").click(function() {
      $(".park-policies").fadeIn();
    });
    $("#crazy-bus").click(function() {
      $(".kid-ride-1").fadeIn();
    });
    $("#fun-wheel").click(function() {
      $(".family-ride-1").fadeIn();
    });
    $("#teacup-twirl").click(function() {
      $(".family-ride-2").fadeIn();
    });
  }


});
