const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

$(".btn-hero").click(function(){
  const selectedColor = getRandomNumber();
  $(".color").text(colors[selectedColor].toString());
  $("main").css("background-color", colors[selectedColor].toString())
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
