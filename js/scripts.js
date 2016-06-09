// Back End Logic


// Front End Logic
$(document).ready(function() {
  $("form#triangleform").submit(function() {
    event.preventDefault();
    var side1Input = parseInt($("#side1").val());
    var side2Input = parseInt($("#side2").val());
    var side3Input = parseInt($("#side3").val());
    var result;

    if (side1Input === side2Input && side2Input === side3Input) {
      result = ("Equilateral")
    } else if (side1Input === side2Input || side1Input === side3Input || side2Input === side3Input) {
      result = ("Isosceles")
    } else if (side1Input != side2Input || side1Input != side3Input || side2Input != side3Input) {
      result = ("Scalene")
    } else if

    $("#answer").text(result);


  });
});
