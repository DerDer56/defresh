var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.open();
    document.write(this.responseText);
  }
};
xhttp.open("GET", , true);
xhttp.send();
