var links = document.links;
function write(link) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.history.pushState({}, "", link);
      document.open();
      document.write(this.responseText);
    } else {
      location.href = link;
    }
  };
  xhttp.open("GET", this.href, true);
  xhttp.send();
}
for (var num = 0; num < links.length; num++) {
  if (
    links[num].href.indexOf(location.pathname) >=
    0 /*&& links[num].onclick != null*/
  ) {
    links[num].onclick = function(e) {
      e.preventDefault();
      write(this.href);
    };
  }
}
window.onpopstate = function() {
  write(location.pathname);
};
