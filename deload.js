(function() {
  "use strict";
  var xhttp;
  var links = document.links;
  function write(link) {
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } else {
      location.href = link;
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
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
      links[num].href.indexOf(location.pathname) >= 0 &&
      links[num].href != null &&
      links[num].onclick == null
    ) {
      links[num].onclick = function(e) {
        e.preventDefault();
        window.history.pushState({ path: this.href }, "", this.href);
        write(this.href);
      };
    }
  }
  window.onpopstate = function() {
    write(location.pathname);
  };
});
