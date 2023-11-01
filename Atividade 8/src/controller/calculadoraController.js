const calculadora = require('../calculadora/calculadora');

function indexCalculadora(req, res) {
    res.render('index.html');
}

function calcular(req, res) {
    res.send(calculadora.somar());
    res.render('calcular.html');
}

module.exports = {
    indexCalculadora,
    calcular
};
