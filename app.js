const express = require("express");
const app = express();
const path = require("path");

var board = []; //title, author, content

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("Server is running!"));

app.get('/create', (req, res) => {
})

app.get('/read', (req, res) => {
})

app.get('/update', (req, res) => {
})

app.get('/delete', (req, res) => {
})