// Express.js Demo
const express = require("express");
const app = express();

app.use(express.json()); // parse JSON

app.get("/", (req, res) => res.send("Welcome to Express!"));
app.post("/user", (req, res) => res.json({ user: req.body }));

app.listen(4000, () => console.log("Express running at http://localhost:4000"));
