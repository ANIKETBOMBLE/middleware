// index.js
const express = require("express");
const logger = require("./logger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger); // Use logging middleware

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});