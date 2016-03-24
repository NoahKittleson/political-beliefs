$(document).ready(function() {
  $("form").submit(function(event) {
    var totalScore = 0;
    event.preventDefault();
    var result = parseInt($("input:radio[name=mascot]:checked").val());
    totalScore += result;
    var result = parseInt($("input:radio[name=cashCrop]:checked").val());
    totalScore += result;

    if (totalScore >= 60) {
      $(".answer").text("You are conservative! " + totalScore)
    }
    else if (15 <= totalScore && totalScore <= 59) {
      $(".answer").text("You are nearly a conservative! " + totalScore)
    }
    else if (-19 <= totalScore && totalScore <= 14) {
      $(".answer").text("You may be Liberal " + totalScore)
    }
    else if (totalScore <= -20) {
      $(".answer").text("You Are A Liberal " + totalScore)
    }
  });
});
