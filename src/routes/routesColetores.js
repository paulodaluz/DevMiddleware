const express = require("express");

const controllerColetor = require("../controller/controllerColetores");

const routes = express.Router();

/* 1) Método: Criar Coletor (acessar em: POST http://localhost:8000/api/coletores/cadastrarColetor)  */
routes.post("/coletores/cadastrarColetor", controllerColetor.deletarColetor);
x;
/* 2) Método: Selecionar Todos os Coletores (acessar em: GET http://localhost:8000/api/coletores/listarColetores)  */
routes.get("/coletores/listarColetores", controllerColetor.listarColetores);

/* 3) Método: Selecionar por Id: (acessar em: GET http://localhost:8000/api/coletores/buscarColetor/:coletor_id) */
routes.get(
  "/coletores/buscarColetor/:coletor_id",
  controllerColetor.buscarColetor
);

/* 4) Método: Atualizar por Id: (acessar em: PUT http://localhost:8000/api/coletores/alterarColetor/:coletor_id) */
routes.put(
  "/coletores/alterarColetor/:coletor_id",
  controllerColetor.cadastrarColetor
);

/* 5) Método: Excluir por Id (acessar: http://localhost:8000/api/coletores/deletarColetor/:coletor_id) */
routes.delete(
  "/coletores/deletarColetor/:coletor_id",
  controllerColetor.deletarColetor
);

module.exports = routes;