var links = document.links;
var pressed = {};
window.onkeyup = function(e) {
  pressed[e.key] = undefined;
};
window.onkeydown = function(e) {
  pressed[e.key] = true;
};
function push(link) {
  window.history.pushState({ page: link }, "", link);
}
function write(link) {
  if (window.XMLHttpRequest) {
    var xhttp = new XMLHttpRequest();
  } else {
    window.location.href = link;
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.responseText.indexOf("defresh.js") >= 0) {
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
        push(this.href);
        write(this.href);
      }
    };
  }
}
window.onpopstate = function() {
  write(window.location.pathname);
};
