const express = require('express');
const app = express();
// console.dir(app);

let port = 3000;
app.listen(port, () => { // listen makes a webserver which listens incoming api requests
      console.log(`app is listening on port ${port}`);   
});

// req (Request Object) Contains all data sent from the client to the server. Important properties here:
// req.query → Query string parameters
// req.params → URL parameters
// req.body → Data sent in POST/PUT requests
// req.headers → Request metadata

// res (Response Object) Used to send data back to the client. Controls:
// What is sent
// Status code
// Headers
// Content type

// app.use((req, res) => {
//       console.log("Request received");
//       res.send({
//             name: "army",
//             colour : "purple" 
//       });
// });


// app.get(("/search", (req, res) => { // Defines a route handler for HTTP GET requests
//       res.send("search path")
// }))

// app.get(("*", (req, res) => {
//       res.send("wrong path")
// }))

// app.post(("/", (req, res) => {
//       res.send("post request to root path")
// }))
      
// app.post(("/search", (req, res) => {
//       res.send("post request to search path")
// }))

// app.post(("*", (req, res) => {
//       res.send("post request to wrong path")
// }))
app.get("/", (req, res) => {
      res.send("root path")
})

app.get("/:user/:id", (req, res) => {
      let {user, id} = req.params;
      let htmlStr = `<h1>Welcome to page of @${user}</h1>`
      res.send(htmlStr+htmlStr);
      // console.log(req.params);
      // res.send("parameter used");
});

// localhost:3000/search?q=var1&var2
app.get("/search", (req, res) => {
      let {q} = (req.query);
      if (!q) res.send("No query")
      res.send(`Search results for ${q}`);
});