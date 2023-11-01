const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({extended: true}));

app.use("/", require('./src/routes/calculadoraRoutes.js'));
app.use("/calcular", require('./src/routes/calculadoraRoutes.js'));

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
})