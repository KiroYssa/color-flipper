const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

$(".btn-hero").click(function(){
  const colorValues = new Array(6);
  var colorSelected = "";
  colorSelected += "#";
  for(var i = 0; i < 6; i++){
    colorValues[i] = hex[getRandomNumber()];
    colorSelected += colorValues[i];
  }

  $(".color").text(colorSelected);
  $("main").css("background-color", colorSelected)
})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}
