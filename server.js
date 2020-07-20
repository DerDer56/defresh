const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/index.html");
});
app.listen(8080);
