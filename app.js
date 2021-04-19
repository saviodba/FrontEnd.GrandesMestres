const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

let dir = path.join(__dirname, '/src/');

app.use(express.static(dir + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set("views", "./src/views");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/Cadastro", (req, res) => {
    res.render("pages/cad-artigo");
});

app.post("/Cadastro", (req, res) => {
    console.log(req.body);

    res.render("pages/cad-artigo");
});

app.listen(4000);

