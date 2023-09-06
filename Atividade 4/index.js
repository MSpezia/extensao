const calc = require('./calculadora');
const express = require("express");

    const app = express();

    app.get("/hello", function(req,res){
        res.send("Olá, mundo web!");
    })
    app.get("/ola", function(req,res){
        res.send("Hello World");
    })

app.get("/somar/:n1/:n2", function(req,res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1} + ${n2} = ${calc.somar(n1,n2)}`);
})

app.get("/subtrair/:n1/:n2", function(req,res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1} - ${n2} = ${calc.subtrair(n1,n2)}`);
})

app.get("/multiplicar/:n1/:n2", function(req,res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1} * ${n2} = ${calc.multiplicar(n1,n2)}`);
})

app.get("/dividir/:n1/:n2", function(req,res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    res.send(`${n1} / ${n2} = ${calc.dividir(n1,n2)}`);
})

const PORT = 8080;
app.listen(PORT, function (){
    console.log("app rodando na porta " + PORT);
});