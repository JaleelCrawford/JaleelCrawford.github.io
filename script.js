// The data/time we want to countdown from
const timeInMinutes = 10;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInMinutes * 60 * 1000);

//Run myfunc every second
var myfunc = setInterval(function () {

  var now = new Date().getTime();
  var timeleft = deadline - now;

  // Calculating the days, hours, minutes and seconds left
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
    document.getElementById("end").innerHTML = "GAME OVER";
    $("#lose").show();
  }
}, 1000);
/*

var displayTime = 10;
if($('NextButton'))$('NextButton').hide();
 new PeriodicalExecuter(function(){
 if($('NextButton')){$('NextButton').show();$('NextButton');}
 },displayTime);

*/

$(document).ready(function () {
  $("#textarea1").focusout(function () {
    let ans1 = $(this).val().trim().toLowerCase();
    let a1 = "nine";
    let a1c2 = 9;
    if (a1 == ans1) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint1").hide();
      $("#hint2").hide();
      $("#2").show();
      $("#textarea1").addClass("yellow");
      $("#span").text("Validated").show(1);
      return;
      
    } else if (a1c2 == ans1) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint1").hide();
      $("#hint2").hide();
      $("#2").show();
      $("#textarea1").addClass("yellow");
      $("#span").text("Validated").show(1);
      return;
    } else {
      $("#textarea1").addClass("red");
      $("#textarea1").effect("shake");
      $("#hintButton").show();
      $("#span").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea2").focusout(function () {
    let ans2 = $(this).val().trim().toLowerCase();
    let a2 = "secret";
    let a2c2 = "a secret";
    if (a2 == ans2) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint2").hide();
      $("#hint3").hide();
      $("#3").show();
      $("#textarea2").addClass("yellow");
      $("#span2").text("Validated").show(1);
      return;
    } else if (a2c2 == ans2) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint2").hide();
      $("#hint3").hide();
      $("#3").show();
      $("#textarea2").addClass("yellow");
      $("#span2").text("Validated").show(1);
      return;
    } else {
      $("#textarea2").addClass("red");
      $("#textarea2").effect("shake");
      $("#hintButton").show();
      $("#span2").text("Try Again").show().fadeOut(2500);
      
    }
  })

  $("#textarea3").focusout(function () {
    let ans3 = $(this).val().trim().toLowerCase();
    let a3 = "darkness";
    let a3c2 = "the dark";
    let a3c3 = "the darkness";
    if (a3 == ans3) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint3").hide();
      $("#hint4").hide();
      $("#4").show();
      $("#textarea3").addClass("yellow");
      $("#span3").text("Validated").show(1);
      return;
    } else if (a3c2 == ans3) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint3").hide();
      $("#hint4").hide();
      $("#4").show();
      $("#textarea3").addClass("yellow");
      $("#span3").text("Validated").show(1);
    } else if (a3c3 == ans3) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint3").hide();
      $("#hint4").hide();
      $("#4").show();
      $("#textarea3").addClass("yellow");
      $("#span3").text("Validated").show(1);
    } else {
      $("#textarea3").addClass("red");
      $("#textarea3").effect("shake");
      $("#hintButton").show();
      $("#span3").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea4").focusout(function () {
    let ans4 = $(this).val().trim().toLowerCase();
    let a4 = "glove";
    let a4c2 = "a glove";
    if (a4 == ans4) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint4").hide();
      $("#hint5").hide();
      $("#5").show();
      $("#textarea4").addClass("yellow");
      $("#span4").text("Validated").show(1);
      return;
    } else if (a4c2 == ans4) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint4").hide();
      $("#hint5").hide();
      $("#5").show();
      $("#textarea4").addClass("yellow");
      $("#span4").text("Validated").show(1);
      return;
    } else {
      $("#textarea4").addClass("red");
      $("#textarea4").effect("shake");
      $("#hintButton").show();
      $("#span4").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea5").focusout(function () {
    let ans5 = $(this).val().trim().toLowerCase();
    let a5 = "shirt";
    let a5c2 = "a shirt";
    if (a5 == ans5) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint5").hide();
      $("#hint6").hide();
      $("#6").show();
      $("#textarea5").addClass("yellow");
      $("#span5").text("Validated").show(1);
      return;
    } else if (a5c2 == ans5) {
      alert("next question");
      $("#hintButton").hide();
      $("#hint5").hide();
      $("#hint6").hide();
      $("#6").show();
      console.log("correct");
      $("#textarea5").addClass("yellow");
      $("#span5").text("Validated").show(1);
      return;
    } else {
      $("#textarea5").addClass("red");
      $("#textarea5").effect("shake");
      $("#hintButton").show();
      $("#span5").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea6").focusout(function () {
    let ans6 = $(this).val().trim().toLowerCase();
    let a6 = "shadow";
    let a6c2 = "a shadow";
    let a6c3 = "my shadow";
    if (a6 == ans6) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint6").hide();
      $("#hint7").hide();
      $("#7").show();
      $("#textarea6").addClass("yellow");
      $("#span6").text("Validated").show(1);
      return;
    } else if (a6c2 == ans6) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint6").hide();
      $("#hint7").hide();
      $("#7").show();
      $("#textarea6").addClass("yellow");
      $("#span6").text("Validated").show(1);
      return;
    } else if (a6c3 == ans6) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint6").hide();
      $("#hint7").hide();
      $("#7").show();
      $("#textarea6").addClass("yellow");
      $("#span6").text("Validated").show(1);
      return;
    } else {
      $("#textarea6").addClass("red");
      $("#textarea6").effect("shake");
      $("#hintButton").show();
      $("#span6").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea7").focusout(function () {
    let ans7 = $(this).val().trim().toLowerCase();
    let a7 = "stamp";
    let a7c2 = " a stamp";
    if (a7 == ans7) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint7").hide();
      $("#hint8").hide();
      $("#8").show();
      $("#textarea7").addClass("yellow");
      $("#span7").text("Validated").show(1);
      return;
    } else if (a7c2 == ans7) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint7").hide();
      $("#hint8").hide();
      $("#8").show();
      $("#textarea7").addClass("yellow");
      $("#span7").text("Validated").show(1);
      return;
    } else {
      $("#textarea7").addClass("red");
      $("#textarea7").effect("shake");
      $("#hintButton").show();
      $("#span7").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea8").focusout(function () {
    let ans8 = $(this).val().trim().toLowerCase();
    let a8 = "queue";
    if (a8 == ans8) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint8").hide();
      $("#hint9").hide();
      $("#9").show();
      $("#textarea8").addClass("yellow");
      $("#span8").text("Validated").show(1);
      return;
    } else {
      $("#textarea8").addClass("red");
      $("#textarea8").effect("shake");
      $("#hintButton").show();
      $("#span8").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea9").focusout(function () {
    let ans9 = $(this).val().trim().toLowerCase();
    let a9 = "boxing";
    let a9c2 = "ufc";
    let a9c3 = "mma";
    if (a9 == ans9) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint9").hide();
      $("#hint10").hide();
      $("#10").show();
      $("#textarea9").addClass("yellow");
      $("#span9").text("Validated").show(1);
      return;
    } else if (a9c2 == ans9) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint9").hide();
      $("#hint10").hide();
      $("#10").show();
      $("#textarea9").addClass("yellow");
      $("#span9").text("Validated").show(1);
      return;
    } else if (a9c3 == ans9) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint9").hide();
      $("#hint10").hide();
      $("#10").show();
      $("#textarea9").addClass("yellow");
      $("#span9").text("Validated").show(1);
      return;
    } else {
      $("#textarea9").addClass("red");
      $("#textarea9").effect("shake");
      $("#hintButton").show();
      $("#span9").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea10").focusout(function () {
    let ans10 = $(this).val().trim().toLowerCase();
    let a10 = "name";
    let a10c2 = "my name";
    let a10c3 = "a name";
    if (a10 == ans10) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint10").hide();
      $("#hint11").hide();
      $("#11").show();
      $("#textarea10").addClass("yellow");
      $("#span10").text("Validated").show(1);
      return;
    } else if (a10c2 == ans10) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint10").hide();
      $("#hint11").hide();
      $("#11").show();
      $("#textarea10").addClass("yellow");
      $("#span10").text("Validated").show(1);
      return;
    } else if (a10c3 == ans10) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint10").hide();
      $("#hint11").hide();
      $("#11").show();
      $("#textarea10").addClass("yellow");
      $("#span10").text("Validated").show(1);
      return;
    } else {
      $("#textarea10").addClass("red");
      $("#textarea10").effect("shake");
      $("#hintButton").show();
      $("#span10").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea11").focusout(function () {
    let ans11 = $(this).val().trim().toLowerCase();
    let a11 = "two";
    let a11c2 = 2;
    if (a11 == ans11) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint11").hide();
      $("#hint12").hide();
      $("#12").show();
      $("#textarea11").addClass("yellow");
      $("#span11").text("Validated").show(1);
      return;
    } else if (a11c2 == ans11) {
      console.log("correct");
      alert("next question");
      $("#hintButton").hide();
      $("#hint11").hide();
      $("#hint12").hide();
      $("#12").show();
      $("#textarea11").addClass("yellow");
      $("#span11").text("Validated").show(1);
      return;
    } else {
      $("#textarea11").addClass("red");
      $("#textarea11").effect("shake");
      $("#hintButton").show();
      $("#span11").text("Try Again").show().fadeOut(2500);
    }
  })

  $("#textarea12").focusout(function () {
    let ans12 = $(this).val().trim().toLowerCase();
    let a12 = 410;
    let a12c2 = "four hundred ten";
    let a12c3 = "four hundred and ten";
    if (a12 == ans12) {
      console.log("correct");
      clearInterval(myfunc);
      $("#hintButton").hide();
      $("#hint12").hide();
      $("#textarea12").addClass("yellow");
      alert("room completed");
      win.classList.remove("hide");
    } else if (a12c2 == ans12) {
      console.log("correct");
      clearInterval(myfunc);
      $("#hintButton").hide();
      $("#hint12").hide();
      $("#textarea12").addClass("yellow");
      alert("room completed");
      win.classList.remove("hide");
    } else if (a12c3 == ans12) {
      console.log("correct");
      clearInterval(myfunc);
      $("#hintButton").hide();
      $("#hint12").hide();
      $("#textarea12").addClass("yellow");
      alert("room completed");
      win.classList.remove("hide");
    } else {
      $("#textarea12").addClass("red");
      $("#textarea12").effect("shake");
      $("#hintButton").show();
      $("#span12").text("Try Again").show().fadeOut(2500);
    }
  })

  console.log("hello");

 $("#hintButton").hide();
  
});

//hint
$(document).ready(function () {

  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $("#hint1").hide();
  $("#hint2").hide();
  $("#hint3").hide();
  $("#hint4").hide();
  $("#hint5").hide();
  $("#hint6").hide();
  $("#hint7").hide();
  $("#hint8").hide();
  $("#hint9").hide();
  $("#hint10").hide();
  $("#hint11").hide();
  $("#hint12").hide();

  $("#2").hide();
  $("#3").hide();
  $("#4").hide();
  $("#5").hide();
  $("#6").hide();
  $("#7").hide();
  $("#8").hide();
  $("#9").hide();
  $("#10").hide();
  $("#11").hide();
  $("#12").hide();
  
  $("#hintButton").click(function () {
    $("#hint1").toggle();
    $("#hint2").toggle();
    $("#hint3").toggle();
    $("#hint4").toggle();
    $("#hint5").toggle();
    $("#hint6").toggle();
    $("#hint7").toggle();
    $("#hint8").toggle();
    $("#hint9").toggle();
    $("#hint10").toggle();
    $("#hint11").toggle();
    $("#hint12").toggle();
  });
});
