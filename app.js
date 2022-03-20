const express = require("express");

const app = express();
const path = require('path');
const ejs = require('ejs');

// Template Engine
app.set("view engine", "ejs");

// routes 
app.get('/', (req, res) => {
    res.render("index")
});
app.get('/about', (req, res) => {
    res.render("about")
});
app.get('/add_post', (req, res) => {
    res.render("post")
});

app.use(express.static("public"))
const port = 3030;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatildi..`)
})
