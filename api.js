const PORT = process.env.PORT || 3001;

const express = require("express");
const fetch = require("node-fetch");
const imageToBase64 = require("image-to-base64");
const app = express();
const cors = require("cors");

app.options("/", cors());
app.use(cors());

app.listen();

app.get("/", async (req, res) => {
  var data = await fetch(req.query.url);
  var b = await data.blob();
  var response = await imageToBase64(req.query.url);
  res.send("data:" + b.type + ";base64," + response);
});
