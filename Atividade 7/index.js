const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render("index.html");
});

app.post("/dados", function (req, res) {
    let agendamento = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        data_nascimento: req.body.data_nascimento,
        endereco: req.body.endereco,
        uf: req.body.uf,
        cep: req.body.cep,
        email: req.body.email,
        telefone: req.body.telefone
    };

    let erro_form = false;

    if (agendamento.nome == "") {
        erro_form = true;
    }
    if (agendamento.cpf == "") {
        erro_form = true;
    }
    if (agendamento.data_nascimento == "") {
        erro_form = true;
    }
    if (agendamento.endereco == "") {
        erro_form = true;
    }
    if (agendamento.uf == "") {
        erro_form = true;
    }
    if (agendamento.cep == "") {
        erro_form = true;
    }
    if (agendamento.email == "") {
        erro_form = true;
    }
    if (agendamento.telefone == "") {
        erro_form = true;
    }

    res.render("dados.html", (agendamento, erro_form));
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
})