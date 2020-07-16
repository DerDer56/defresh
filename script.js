var links = document.links;
var link;
function write() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.history.pushState({}, "", link);
      document.open();
      document.write(this.responseText);
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
      link = this.href;
      e.preventDefault();
    };
  }
}
window.onpopstate = function() {
  alert("popped!");
};
