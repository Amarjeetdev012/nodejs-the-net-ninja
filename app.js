const express = require("express")
const app = express()

app.set("view engine", "ejs");

app.get("/", function(req,res) {
    console.log(req.url)
    res.sendFile(__dirname, "/index.html")
})

app.get("/contact", function(req,res){
    res.sendFile(__dirname, "/contact.html")
})

app.get("/profile/:name", function(req,res){
    let data = {name:"jadoo", age:34}
    res.render("profile" ,{person:req.params.name, data:data})
})

app.listen(3000)
console.log("app is listening on port 3000")