
const express = require('express');

const app = express();
var http  = require('http');

var server = http.createServer(app);

app.listen(4000)

app.get("/",(req, res)=>{
    console.log("aaaaaaaaaaaaa")
});
app.get("/teste",(req, res)=>{
    console.log("bbbbbbbbbb")
});
app.get("/teste2",(req, res)=>{
    console.log("cccccccc")
});
app.post("/teste3",(req,res)=>{
    const {username} = req.body;
    console.log("dddddddddd");
    console.log('username: ${username}');
});






