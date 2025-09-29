const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("middleware one");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware two");
//   res.send(`<h1>hello world</h1>`);
// });

app.use("/user", (req, res) => {
  console.log("middleware two");
  res.send("<h1>/user page</h1>");
});

app.use("/", (req, res) => {
  console.log("middleware one");
  res.send("<h1>/ page</h1>");
  next();
});

app.listen(1235);
