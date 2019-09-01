const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const routeTest = require("./src/routes/routeTest");
const routesProdutos = require("./src/routes/routesProdutos");
const routesColetores = require("./src/routes/routesColetores");

var port = process.env.port || 3333;

const app = express();

mongoose.Promise = global.Promise;
var uri =
  "mongodb+srv://user:pla123@iot-api-waapt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, socketTimeoutMS: 300000 });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* app.use("/", routeTest); */
app.use("/api", routesProdutos, routesColetores);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});

app.use((req, res) => {
  res.status(404).json({ response: "Pagina não encontrada!" });
});
