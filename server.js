const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>hello</h1>");
});

app.get("/contact", function(req, res){
  res.send("<h1>We want to hear from you</h1>");
});

app.get("/about", function(req, res){
  res.send("<h1>I am your daddy</h1>");
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
