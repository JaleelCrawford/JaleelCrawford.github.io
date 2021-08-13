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
      $("#textarea1").addClass("yellow");
      alert("next question");
    } else if (a1c2 == ans1) {
      console.log("correct");
      $("#textarea1").addClass("yellow");
      alert("next question");
    } else {
      $("#textarea1").addClass("red");
      $("#textarea1").effect("shake");
      alert("try again")
    }
  })

  $("#textarea2").focusout(function () {
    let ans2 = $(this).val().trim().toLowerCase();
    let a2 = "secret";
    let a2c2 = "a secret";
    if (a2 == ans2) {
      console.log("correct");
      alert("next question");
    } else if (a2c2 == ans2) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea2").addClass("red");
      $("#textarea2").effect("shake");
      alert("try again")
    }
  })

  $("#textarea3").focusout(function () {
    let ans3 = $(this).val().trim().toLowerCase();
    let a3 = "darkness";
    if (a3 == ans3) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea3").addClass("red");
      $("#textarea3").effect("shake");
      alert("try again")
    }
  })

  $("#textarea4").focusout(function () {
    let ans4 = $(this).val().trim().toLowerCase();
    let a4 = "glove";
    let a4c2 = "a glove";
    if (a4 == ans4) {
      console.log("correct");
      alert("next question");
    } else if (a4c2 == ans4) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea4").addClass("red");
      $("#textarea4").effect("shake");
      alert("try again")
    }
  })

  $("#textarea5").focusout(function () {
    let ans5 = $(this).val().trim().toLowerCase();
    let a5 = "shirt";
    let a5c2 = "a shirt";
    if (a5 == ans5) {
      console.log("correct");
      alert("next question");
    } else if (a5c2 == ans5) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea5").addClass("red");
      $("#textarea5").effect("shake");
      alert("try again")
    }
  })

  $("#textarea6").focusout(function () {
    let ans6 = $(this).val().trim().toLowerCase();
    let a6 = "shadow";
    let a6c2 = "a shadow";
    if (a6 == ans6) {
      console.log("correct");
      alert("next question");
    } else if (a6c2 == ans6) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea6").addClass("red");
      $("#textarea6").effect("shake");
      alert("try again")
    }
  })

  $("#textarea7").focusout(function () {
    let ans7 = $(this).val().trim().toLowerCase();
    let a7 = "stamp";
    let a7c2 = " a stamp";
    if (a7 == ans7) {
      console.log("correct");
      alert("next question");
    } else if (a7c2 == ans7) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea7").addClass("red");
      $("#textarea7").effect("shake");
      alert("try again")
    }
  })

  $("#textarea8").focusout(function () {
    let ans8 = $(this).val().trim().toLowerCase();
    let a8 = "queue";
    if (a8 == ans8) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea8").addClass("red");
      $("#textarea8").effect("shake");
      alert("try again")
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
    } else if(a9c2==ans9){
       console.log("correct");
       alert("next question");
     } else if(a9c3==ans9){
       console.log("correct");
       alert("next question");
     }  else {
      $("#textarea9").addClass("red");
      $("#textarea9").effect("shake");
      alert("try again")
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
    } else if (a10c2 == ans10) {
      console.log("correct");
      alert("next question");
    } else if (a10c3 == ans10) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea10").addClass("red");
      $("#textarea10").effect("shake");
      alert("try again")
    }
  })

  $("#textarea11").focusout(function () {
    let ans11 = $(this).val().trim().toLowerCase();
    let a11 = "two";
    let a11c2 = 2;
    if (a11 == ans11) {
      console.log("correct");
      alert("next question");
    } else if (a11c2 == ans11) {
      console.log("correct");
      alert("next question");
    } else {
      $("#textarea11").addClass("red");
      $("#textarea11").effect("shake");
      alert("try again")
    }
  })
  
    $("#textarea12").focusout(function(){
     let ans12 = $(this).val().trim().toLowerCase();
     let a12 = 410;
     let a12c2 = "four hundred ten";
     let a12c3 = "four hundred and ten";
     if(a12==ans12){
      console.log("correct");
      alert("next question");
     } else if(a12c2==ans12){
       console.log("correct");
       alert("next question");
     } else if(a12c3==ans12){
       console.log("correct");
       alert("next question");
     } else{
       $("#textarea12").addClass("red");
       $("#textarea12").effect("shake");
       alert("try again")
     }
    })
  
  console.log("hello");

  

  $("#hintButton").hide();
  $("#hintButton").delay(45000).fadeIn();
/*
  $("#hintButton2").hide();
  $("#hintButton2").delay(90000).fadeIn();

  $("#hintButton3").hide();
  $("#hintButton3").delay(135000).fadeIn();

  $("#hintButton4").hide();
  $("#hintButton4").delay(180000).fadeIn();

  $("#hintButton5").hide();
  $("#hintButton5").delay(225000).fadeIn();

  $("#hintButton6").hide();
  $("#hintButton6").delay(270000).fadeIn();

  $("#hintButton7").hide();
  $("#hintButton7").delay(315000).fadeIn();

  $("#hintButton8").hide();
  $("#hintButton8").delay(360000).fadeIn();

  $("#hintButton9").hide();
  $("#hintButton9").delay(405000).fadeIn();

  $("#hintButton10").hide();
  $("#hintButton10").delay(450000).fadeIn();

  $("#hintButton11").hide();
  $("#hintButton11").delay(495000).fadeIn();

  $("#hintButton12").hide();
  $("#hintButton12").delay(540000).fadeIn();
  */
});
//hint
$(document).ready(function(){
  $("#hint1").hide();
  $("#hintButton1").click(function(){
    $("#hint1").toggle();
  });

  $("#hint2").hide();
  $("#hintButton2").click(function(){
    $("#hint2").toggle();
  });

  $("#hint3").hide();
  $("#hintButton3").click(function(){
    $("#hint3").toggle();
  });

  $("#hint3").hide();
  $("#hintButton3").click(function(){
    $("#hint3").toggle();
  });

  $("#hint4").hide();
  $("#hintButton4").click(function(){
    $("#hint4").toggle();
  });

  $("#hint5").hide();
  $("#hintButton5").click(function(){
    $("#hint5").toggle();
  });

  $("#hint6").hide();
  $("#hintButton6").click(function(){
    $("#hint6").toggle();
  });

  $("#hint7").hide();
  $("#hintButton7").click(function(){
    $("#hint7").toggle();
  });

  $("#hint8").hide();
  $("#hintButton8").click(function(){
    $("#hint8").toggle();
  });

  $("#hint9").hide();
  $("#hintButton9").click(function(){
    $("#hint9").toggle();
  });

  $("#hint10").hide();
  $("#hintButton10").click(function(){
    $("#hint10").toggle();
  });

  $("#hint11").hide();
  $("#hintButton11").click(function(){
    $("#hint11").toggle();
  });

  $("#hint12").hide();
  $("#hintButton12").click(function(){
    $("#hint12").toggle();
  });
});