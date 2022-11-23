const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));

// for using ejs file we have to set view engine ejs using app.set
app.set("view engine", "ejs");

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use("/stuff", express.static("stuff"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/contact", function (req, res) {
  res.render("contact", { qs: req.query });
});

app.post("/contact", function (req, res) {
  console.log(req.body);
  res.render("contact-response", { data: req.body });
});

app.get("/profile/:name", function (req, res) {
  let data = {
    name: "ryu",
    job: "developer",
    hobbies: ["football", "chess", "badminton"],
  };
  res.render("profile", { person: req.params.name, data: data });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
