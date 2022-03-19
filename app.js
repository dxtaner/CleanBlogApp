const express = require("express");

const app = express();

app.get('/', (req,res) => {
    const blog = { id: 21, title: "Blog title", description: "Blog Description" }
    res.send(blog)
    // res.send("Hosgeldiniz..")
})

const port = 3030;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatildi..`)
})
