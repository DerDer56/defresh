var xhttp;
var links = document.links;
var pressedKeys = {};
window.onkeyup = function(e) {
  pressedKeys[e.key] = undefined;
};
window.onkeydown = function(e) {
  pressedKeys[e.key] = true;
};
function write(link) {
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    window.location.href = link;
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
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
      if (pressedKeys["Control"] != true) {
        e.preventDefault();
        window.history.pushState({ page: this.href }, "", this.href);
        write(this.href);
      }
    };
  }
}
window.onpopstate = function() {
  write(window.location.pathname);
};
