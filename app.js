const express = require("express");
const expresslayouts = require("express-ejs-layouts");

const app = express();
const port = 5000;

const myFunction = function (req, res, next) {
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  if (day != 6 && day != 0 && hours > 8 && hours < 17) {
    console.log("A new request received at " + Date.now());
    next();
  } else {
    next(res.send("<h1>ghgjhghghk;</h1>"));
  }
};

app.use(expresslayouts, myFunction);
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("Home", { title: "Home" });
});

app.get("/contact-us", (req, res) => {
  res.render("ContactUs", { title: "Contact Us" });
});

app.get("/our-services", (req, res) => {
  res.render("OurService", { title: "Our Services" });
});

app.listen(port, () => console.info(`app listening on port ${port}`));
