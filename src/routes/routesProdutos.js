const express = require("express");

const controller = require("../controller/controllerProdutos");

const routes = express.Router();

/* 1) Método: Criar Produto (acessar em: POST http://localhost:8000/api/produtos/cadastrarProduto)  */
routes.post("/produtos/cadastrarProduto", controller.cadastrarProduto);

/* 2) Método: Selecionar Todos Produtos (acessar em: GET http://localhost:8000/api/produtos/listarProdutos)  */
routes.get("/produtos/listarProdutos", controller.listarProdutos);

/* 3) Método: Selecionar por Id: (acessar em: GET http://localhost:8000/api/produtos/buscarProduto/:produto_id) */
routes.get("/produtos/buscarProduto/:produto_id", controller.buscarProduto);

/* 4) Método: Atualizar por Id: (acessar em: PUT http://localhost:8000/api/produtos/alterarProduto/:produto_id) */
routes.put("/produtos/alterarProduto/:produto_id", controller.alterarProduto);

/* 5) Método: Excluir por Id (acessar: http://localhost:8000/api/produto/deletarProduto/:produto_id) */
routes.delete("/produto/deletarProduto/:produto_id", controller.deletarProduto);

module.exports = routes;
