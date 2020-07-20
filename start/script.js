function copy() {
  const f = document.createElement("textarea");
  f.value =
    '<script src="https://defresh.glitch.me/defresh.js" async></script>';
  document.body.appendChild(f);
  f.select();
  document.execCommand("copy");
  document.body.removeChild(f);
}
