document.getElementById("path").innerHTML = window.location.pathname
  .split("?")
  .pop()
  .split("#")[0];
