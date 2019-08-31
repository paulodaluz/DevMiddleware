const express = require("express");

const ProdutoController = require("../controller/controllerUser");

const routes = express.Router();

routes.get("/produto/listaProdutos", ProdutoController.listaProdutos);

routes.get("/produto/produtoMaisBarato", ProdutoController.produtoMaisBarato);

routes.get("/produto/produtoMaisCaro", ProdutoController.produtoMaisCaro);

routes.get(
  "/produto/ultimoProdutoAdicionado",
  ProdutoController.ultimoAdicionado
);

module.exports = routes;
