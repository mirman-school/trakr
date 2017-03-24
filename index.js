const express = require("express");

const app = express();

app.route("/api")
.get((req, res) => {
  res.send("API not implemented yet!");
});
