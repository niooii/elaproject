
const hostname = 'yoooo';
var http = require('http');
var fs = require('fs');

const express = require("express");
const app = express();

const PORT=3000;

app.listen(PORT, () => {
    console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static("styles/main.css"));
app.use(express.static("styles/home.css"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html");
});