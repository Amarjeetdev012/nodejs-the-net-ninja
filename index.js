const express = require("express");
const app = express();
const path = require("path")

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname+ "/contact.html");
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
