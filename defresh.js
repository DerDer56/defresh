var links = document.links;
var pressed = {};
window.onkeyup = function(e) {
  pressed[e.key] = undefined;
};
window.onkeydown = function(e) {
  pressed[e.key] = true;
};
function defresh(link, action) {
  if (window.XMLHttpRequest) {
    var xhttp = new XMLHttpRequest();
  } else {
    window.location.href = link;
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && link != null) {
      if (action.toLowerCase() == "push") {
        window.history.pushState({ page: link }, "", link);
      }
      if (action.toLowerCase() == "replace") {
        window.history.replaceState({ page: link }, "", link);
      }
      document.open();
      document.write(this.responseText);
      document.close();
    }
  };
  xhttp.open("GET", link, true);
  xhttp.send();
}
for (var num = 0; num < links.length; num++) {
  if (
    links[num].href.indexOf(window.location.hostname) >= 0 &&
    links[num].href != null &&
    links[num].onclick == null &&
    links[num].target != "_blank"
  ) {
    links[num].onclick = function(e) {
      if (pressed["Control"] != true && pressed["Shift"] != true) {
        e.preventDefault();
        defresh(this.href, "push");
      }
    };
  }
}
window.onpopstate = function() {
  defresh(window.location.pathname);
};
