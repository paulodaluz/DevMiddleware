const { check } = require("express-validator");

exports.cadastrarProduto = [
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
    .isString()
];

exports.alterarProduto = [
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
    .isString()
];
