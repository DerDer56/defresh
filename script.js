var links = document.links;
for (var num = 0; num < links.length; num++) {
  if (
    links[num].href.indexOf(location.pathname) >=
    0 /*&& links[num].onclick != null*/
  ) {
    links[num].onclick = function(e) {
      var link = this.href;
      e.preventDefault();
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          window.history.pushState({ path: link }, "", link);
          document.open();
          document.write(this.responseText);
        }
      };
      xhttp.open("GET", this.href, true);
      xhttp.send();
    };
  }
}
