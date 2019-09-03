const { validationResult } = require("express-validator");
var Coletor = require("../models/coletorSchema");

module.exports = {
  async cadastrarColetor(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(412).json({ errors: errors.array() });
    }

    var coletor = new Coletor();
    console.log(coletor.leitura);
    let dados = {
      produtoName: req.body.leitura[0].produtoName,
      id: req.body.leitura[0].id,
      preco: req.body.leitura[0].preco,
      quantidade: req.body.leitura[0].quantidade,
      unidade: req.body.leitura[0].unidade
    };

    coletor.leitura.push(dados);
    coletor.usuario = req.body.usuario;
    coletor.coletorNome = req.body.coletorNome;
    coletor.idDispositivo = req.headers.idDispositivo;

    coletor.save(function(error) {
      if (error) res.send("Erro ao tentar cadastrar o Coletor....: " + error);

      res.json({ message: "Coletor Cadastrado com Sucesso!" });
    });
  },

  async alterarColetor(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(412).json({ errors: errors.array() });
    }

    //Primeiro: para atualizarmos, precisamos primeiro achar 'Id' do 'Produto':
    Coletor.findById(req.params.coletor_id, function(error, coletor) {
      if (error) res.send("Id do Coletor não encontrado....: " + error);
      //Segundo:
      coletor.idDispositivo = req.headers.idDispositivo;
      coletor.coletorNome = req.body.coletorNome;
      coletor.usuario = req.body.usuario;
      coletor.leitura.produtoName = req.body.leitura.produtoName;
      coletor.leitura.id = req.body.leitura.id;
      coletor.leitura.preco = req.body.leitura.preco;
      coletor.leitura.quantidade = req.body.leitura.quantidade;
      coletor.leitura.unidade = req.body.leitura.unidade;

      //Terceiro: Agora que já atualizamos os dados, vamos salvar as propriedades:
      coletor.save(function(error) {
        if (error) res.send("Erro ao atualizar o coletor....: " + error);

        res.json({ message: "Coletor atualizado com sucesso!" });
      });
    });
  },

  async buscarColetor(req, res) {
    //Função para poder Selecionar um determinado produto por ID - irá verificar se caso não encontrar um detemrinado
    //produto pelo id... retorna uma mensagem de error:
    Coletor.findById(req.params.produto_id, function(error, coletor) {
      if (error) res.send("Id do Produto não encontrado....: " + error);

      res.json(coletor);
    });
  },

  async listarColetores(req, res) {
    Coletor.find(function(error, coletores) {
      if (error)
        res.send("Erro ao tentar Selecionar Todos os produtos...: " + error);

      res.json(coletores);
    });
  },

  async deletarColetor(req, res) {
    Coletor.remove(
      {
        _id: req.params.coletor_id
      },
      function(error) {
        if (error) res.send("Id do Coletor não encontrado....: " + error);

        res.json({ message: "Produto Excluído com Sucesso!" });
      }
    );
  }
};
