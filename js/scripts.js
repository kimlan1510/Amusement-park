$(document).ready(function(){
  var height = parseInt(prompt("What is your height in feet?"));

  if (height >= 5) {
    $(".park-policies").show();

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

    $("#crazy-bus").click(function() {
      alert("Sorry, you are not short enough for this ride!");
    });


  }
  else {
    $(".park-policies"). show();

    $("#loop-di-loop").click(function() {
      alert("Sorry, you are not tall enough!");
    });

    $("#drop-of-death").click(function() {
      alert("Sorry, you are not tall enough!");
    });


    $("#park-policies").click(function() {
      $(".park-policies").siblings().hide();
      $(".park-policies").fadeIn();
    });

    $("#crazy-bus").click(function() {
      $(".kid-ride-1").siblings().hide();
      $(".kid-ride-1").fadeIn();
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


});
