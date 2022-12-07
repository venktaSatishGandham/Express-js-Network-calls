// const addDays = require("date-fns/addDays");

// const date = addDays(new Date(2021, 0, 25), 3);
// console.log(date);
// -------------------------------------
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.get("/date", (req, res) => {
  const date = new Date();
  res.send(`this is today date : ${date}`);
});

app.get("/content", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.listen(3008);
