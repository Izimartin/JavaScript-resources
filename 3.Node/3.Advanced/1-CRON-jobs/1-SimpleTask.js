const cron = require("node-cron");
const express = require("express");

const app = express();

cron.schedule("*/15 * * * * *", function () {
  console.log("---------------------");
  console.log("running a task every 10 second");
  //replace with any task
});

app.listen(3000);