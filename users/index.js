const express = require("express");
const app = express();
app.use(express.json());

let users = {
  1: {
    fullname: "John",
    username: "John444",
    address: "123 Main Street",
  },

  2: {
    fullname: "Jane",
    username: "Jane555",
    address: "123 Village Street",
  },
};

app.get("/users", function (req, res) {
  res.send(users);
});
app.post("/users", function (req, res) {
  const id = Math.floor(Math.random() * 100);
  if (
    Object.entries(users).length == 2 &&
    "fullname" in req.body &&
    "username" in req.body &&
    "address" in req.body
  ) {
    users[id] = req.body;
    res.send(users);
  } else {
    res.status(404);
    res.send("Invalid input");
  }
});

app.listen(3000);
