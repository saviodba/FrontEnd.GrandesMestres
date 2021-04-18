const express = require('express');
const ejs = require('ejs');

let app = express();

app.get("/", (req, res) => {
    res.send("Olá, mundooo...")
});

app.listen(4000);

