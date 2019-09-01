const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const routeTest = require("./src/routes/routeTest");
const routesProdutos = require("./src/routes/routesUsers");
const routesColetores = require("./src/routes/routesProdutos");

const app = express();

const port = 3333;

app.use("/", routeTest);
app.use("/api", routesProdutos, routesColetores);

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MarketData", {
  useNewUrlParser: true
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});

app.use((req, res) => {
  res.status(404).json({ response: "Pagina não encontrada!" });
});
