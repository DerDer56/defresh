var defresh;
var input = document.getElementById("input");
input.onkeydown = function(e) {
  if (e.key == "Enter") {
    enter();
  }
};
function enter() {
  var x = input.value.toLowerCase();
  if (x == "pepperoni") {
    defresh("./pepperoni.html", "push");
  } else if (x == "cheese") {
    defresh("./cheese.html", "push");
  } else {
    defresh("/", "push");
  }
}
