// <%= Outputs the value into the template (HTML escaped)

const express = require('express'); // internally requires ejs too
const app = express();

const path = require('path');

const port = 3000;

app.listen(port, () => {
      console.log(`listening on port ${port}`);   
});

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));// to make path cwd/views so that server knows where to find views

app.get("/", (req, res) => {
      res.render("home.ejs");
});

app.get("/randomno", (req, res) => {
      let diceVal = Math.floor(Math.random() * 6) + 1;
      res.render("rolldice", {diceVal});
})

app.get("/ig/:username", (req,res) => {
      // const followers = ["adam", "bob", "steve", "abc"];
      // let {username} = req.params;
      // res.render("insta.ejs", {username, followers})
      // using database
      let {username} = req.params;
      const instaData = require("./data.json");
      const data = instaData[username]
      if (data) {
            res.render("insta.ejs",{data});
      } else {
            res.render("err.ejs")
      }
});
