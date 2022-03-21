const express = require("express");
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const ejs = require('ejs');
const Blog = require('./models/Blog');

// connect db 
mongoose.connect('mongodb://localhost/blogPost-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

// routes 
app.get('/', async (req, res) => {
    const blogs = await Blog.find({});
    res.render("index",{blogs});
});
app.get('/about', (req, res) => {
    res.render("about")
});
app.get('/add_post', (req, res) => {
    res.render("add_post")
});


// Post
app.post('/blogs', async (req, res) => { // async - await
    await Blog.create(req.body)
    // console.log(req.body);
    res.redirect('/')
});


const port = 3030;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatildi..`)
})
