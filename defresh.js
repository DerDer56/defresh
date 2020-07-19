var d = document,
  l = d.links,
  p = {},
  w = window;
w.onkeyup = function(e) {
  p[e.key] = undefined;
};
w.onkeydown = function(e) {
  p[e.key] = true;
};
function defresh(l, a) {
  if (w.XMLHttpRequest) {
    var x = new XMLHttpRequest();
  } else {
    w.location.href = l;
  }
  x.onreadystatechange = function() {
    if (this.readyState == 4 && this.responseText.indexOf("defresh.js") >= 0) {
      if (a.toLowerCase() == "push") {
        w.history.pushState({ page: l }, "", l);
      }
      if (a.toLowerCase() == "replace") {
        w.history.replaceState({ page: l }, "", l);
      }
      d.open();
      d.write(this.responseText);
      d.close();
    }
    if (this.readyState == 4 && this.responseText.indexOf("defresh.js") < 0) {
      w.location.href = l;
    }
  };
  x.open("GET", l, true);
  x.send();
}
for (var i = 0; i < l.length; i++) {
  if (
    l[i].href.indexOf(w.location.hostname) >= 0 &&
    l[i].href != null &&
    l[i].onclick == null &&
    l[i].target != "_blank"
  ) {
    l[i].onclick = function(e) {
      if (p["Control"] != true && p["Shift"] != true) {
        e.preventDefault();
        defresh(this.href, "push");
      }
    };
  }
}
w.onpopstate = function() {
  defresh(w.location.pathname, "");
};
