const express = require("express");
const mongoose = require('mongoose');
const app = express();

const ejs = require('ejs');

const methodOverride = require("method-override");
const blogController = require('./controllers/blogControllers');
const pageController = require('./controllers/pageControllers');

// connect db 
mongoose.connect('mongodb://localhost/blogPost-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Db Connected");
}).catch((err) => {
    console.log(err)
});;

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"));
app.use(methodOverride('_method', {
      methods: ['POST', 'GET'],
    })
);

// routes 
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);

app.post('/blogs', blogController.createBlog);
app.get("/blogs/:id", blogController.getBlog);
app.get('/', blogController.getAllBlogs);
app.put('/blogs/:id', blogController.updateBlog);
app.delete('/blogs/:id', blogController.deleteBlog)

app.get('/blogs/edit/:id', pageController.getEditPage);


const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatildi..`)
})
