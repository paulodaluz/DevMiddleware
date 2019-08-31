const express = require("express");

const leitorController = require("../controller/controllerLeitor");

const routes = express.Router();

routes.post("/produto/cadastrarProduto", leitorController.cadastraProduto);

module.exports = routes;
