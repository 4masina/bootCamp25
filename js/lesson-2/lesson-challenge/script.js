// script.js

const express = require("express");
const app = express();
const PORT = 3000;

// Import custom module
const greetUser = require("./modulePractice");

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Homepage!");
});

// About route
app.get("/about", (req, res) => {
  res.send("About Page: This is a sample Express.js application.");
});

// Dynamic user route
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID requested: ${userId}`);
});

// Route using custom module
app.get("/greet/:username", (req, res) => {
  const username = req.params.username;
  const message = greetUser(username);
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
