// Imports das bibliotecas usadas
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Importes das rotas
const routesProdutos = require("./src/routes/routesProdutos");
const routesColetores = require("./src/routes/routesColetores");

// Aplicação está rodando na porta 333
var port = process.env.port || 3333;

const app = express();

// Conexão com o banco de dados
mongoose.Promise = global.Promise;
var uri =
  "mongodb+srv://user:pla123@iot-api-waapt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, socketTimeoutMS: 300000 });

// usando bibliotecas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// rota teste pra ver se a api está funcionando
app.get("/", (req, res) => {
  res.json({ message: "Tudo 100%!" });
});

// rotas disponiveis na api que executam os métodos CRUDs
app.use("/api", routesProdutos, routesColetores);

// Biblioteca do Express vai rodar na porta tal... e vai printar no console(terminal)
app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});

// caso uma página não seja encontrada vai retornar um erro
app.use((req, res) => {
  res.status(404).json({ response: "Pagina não encontrada!" });
});
