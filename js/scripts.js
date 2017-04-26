$(document).ready(function() {
  $("#form1").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var travelInput = $("input#travel").val();
    var animalInput = $("input#animal").val();
    var mythicalInput = $("input#mythical").val();


    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".travel").text(travelInput);
    $(".animal").text(animalInput);
    $(".mythical").text(mythicalInput);

    $("#story").show();

    event.preventDefault();
  });
});
