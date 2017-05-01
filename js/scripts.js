$(document).ready(function() {
  $("#form1").submit(function(event) {
    var blanks = ["person1", "person2", "travel", "animal", "mythical"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    //
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var travelInput = $("input#travel").val();
    // var animalInput = $("input#animal").val();
    // var mythicalInput = $("input#mythical").val();
    //
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".travel").text(travelInput);
    // $(".animal").text(animalInput);
    // $(".mythical").text(mythicalInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#form2").submit(function(event) {
    var shoutInput = $("input#shout").val();
    var res = shoutInput.toUpperCase();
    $(".shout").text(res);

    $("#yell").show();

    event.preventDefault();
  });
});
