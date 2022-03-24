const express = require("express");
const path = require("path");
const app = express();
const phones = require("./phones.json");
const cors = require("cors");

app.use(cors());

// statics assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.get("/phones", (req, res) => {
  res.header("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(phones));
});

app.get("/search/:id", (req, res) => {
  const param = req.params.id;
  const products = phones.filter((p) => p.name.toLowerCase().includes(param));
  res.header("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(products));
});

const port = process.env.PORT || 3001;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
