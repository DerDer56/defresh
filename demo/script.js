var defresh;
var input = document.getElementById("input");
var select = document.getElementById("select");
input.onkeydown = function(e) {
  if (e.key == "Enter") {
    enter();
  }
};
function enter() {
  var x = input.value.toLowerCase();
  var y = select.value;
  if (x == "pepperoni") {
    defresh("./pepperoni.html", y);
  } else if (x == "cheese") {
    defresh("./cheese.html", y);
  } else {
    defresh("/demo/", y);
  }
}
