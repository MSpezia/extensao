const calc = require('./calculadora');
const express = require("express");

    const app = express();

    app.get("/hello", function(req,res){
        res.send("Olá, mundo web!");
    })
    app.get("/ola", function(req,res){
        res.send("Hello World");
    })

const PORT = 8080;
app.listen(PORT), function (){
    console.log("app rodando na porta " + PORT)
}