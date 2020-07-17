var xhttp;
var links = document.links;
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
    links[num].onclick == null
  ) {
    links[num].onclick = function(e) {
      e.preventDefault();
      window.history.pushState({ page: this.href }, "", this.href);
      write(this.href);
    };
  }
}
window.onpopstate = function() {
  write(window.location.pathname);
};
const is_key_down = (() => {
    const state = {};

    window.addEventListener('keyup', (e) => state[e.w] = false);
    window.addEventListener('keydown', (e) => state[e.key] = true);

    return (key) => state.hasOwnProperty(key) && state[key] || false;
})();
setInterval(function() {
  alert(is_key_down["Control"]);
}, 1000);
