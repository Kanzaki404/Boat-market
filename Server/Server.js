const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const path = require("path");
// Middleware
app.use(express.static(__dirname + "/../build"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes

app.get("/a", (req, res) => {
  res.send("ok");
});
const boats = [
  {
    name: "Bismark MK2",
    price: 200000,
    Motorized: "yes",
    Sail: "no",
    manifactured_year: 1936,
  },
  {
    name: "Bismark MK3",
    price: 300000,
    Motorized: "no",
    Sail: "yes",
    manifactured_year: 1946,
  }
];
app.get("/boats", (req, res) => {
    console.log(typeof boats)
  res.send(boats);
});

app.listen(port, () => console.log("Server is listening on port " + port));
