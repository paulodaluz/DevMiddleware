const express = require("express");
const mongoose = require("mongoose");

const routesLeitores = require("./src/routes/routesLeitor");
const routesUsers = require("./src/routes/routesUsers");

const app = express();

const port = 3333;

app.use(routesLeitores);
app.use(routesUsers);

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MarketData", {
  useNewUrlParser: true
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
