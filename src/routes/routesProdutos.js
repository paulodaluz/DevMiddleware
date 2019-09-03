const express = require("express");
const { check } = require("express-validator");

const controller = require("../controller/controllerProdutos");

const routes = express.Router();

/* 1) Método: Criar Produto (acessar em: POST http://localhost:3333/api/produtos/cadastrarProduto)  */
routes.post(
  "/produtos/cadastrarProduto",
  [
    check("nome")
      .not()
      .isEmpty()
      .isString()
      .isLength({ min: 2 }),

    check("preco")
      .not()
      .isEmpty()
      .isNumeric(),

    check("descricao")
      .not()
      .isEmpty()
      .isString(),

    check("idDispositivo")
      .not()
      .isEmpty()
      .isNumeric()
  ],
  controller.cadastrarProduto
);

/* 4) Método: Atualizar por Id: (acessar em: PUT http://localhost:3333/api/produtos/alterarProduto/:produto_id) */
routes.put(
  "/produtos/alterarProduto/:produto_id",
  [
    check("nome")
      .not()
      .isEmpty()
      .isString()
      .isLength({ min: 2 }),

    check("preco")
      .not()
      .isEmpty()
      .isNumeric(),

    check("descricao")
      .not()
      .isEmpty()
      .isString(),

    check("idDispositivo")
      .not()
      .isEmpty()
      .isNumeric()
  ],
  controller.alterarProduto
);

/* 3) Método: Selecionar por Id: (acessar em: GET http://localhost:3333/api/produtos/buscarProduto/:produto_id) */
routes.get("/produtos/buscarProduto/:produto_id", controller.buscarProduto);

/* 2) Método: Selecionar Todos Produtos (acessar em: GET http://localhost:3333/api/produtos/listarProdutos)  */
routes.get("/produtos/listarProdutos", controller.listarProdutos);

/* 5) Método: Excluir por Id (acessar: http://localhost:3333/api/produto/deletarProduto/:produto_id) */
routes.delete("/produto/deletarProduto/:produto_id", controller.deletarProduto);

module.exports = routes;
