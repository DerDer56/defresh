var start = Date.now();
var end = start + 10000;
var timer =setInterval(function() {
  var now = Date.now();
  document.getElementById("time").innerHTML = ((end - now) / 1000).toFixed(2);
  if (now>end) {
    clearInterval(timer);
    document.getElementById("dynamic").innerHTML ='<a href="/" class="btn btn-block btn-primary p-2">Home</a>'
  }
 }, 10);
