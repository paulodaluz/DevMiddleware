const { validationResult } = require("express-validator");

var Produto = require("../models/produtoSchema");

module.exports = {
  //Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/api):
  async cadastrarProduto(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(412).json({ errors: errors.array() });
    }

    var produto = new Produto();

    //Aqui vamos setar os campos do produto (via request):
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.descricao = req.body.descricao;

    produto.save(function(error) {
      if (error) res.send("Erro ao tentar salvar o Produto....: " + error);

      res.json({ message: "Produto Cadastrado com Sucesso!" });
    });
  },

  async alterarProduto(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(412).json({ errors: errors.array() });
    }

    //Primeiro: para atualizarmos, precisamos primeiro achar 'Id' do 'Produto':
    Produto.findById(req.params.produto_id, function(error, produto) {
      if (error) res.send("Id do Produto não encontrado....: " + error);

      //Segundo:
      produto.nome = req.body.nome;
      produto.preco = req.body.preco;
      produto.descricao = req.body.descricao;

      //Terceiro: Agora que já atualizamos os dados, vamos salvar as propriedades:
      produto.save(function(error) {
        if (error) res.send("Erro ao atualizar o produto....: " + error);

        res.json({ message: "Produto atualizado com sucesso!" });
      });
    });
  },

  async buscarProduto(req, res) {
    //Função para poder Selecionar um determinado produto por ID - irá verificar se caso não encontrar um detemrinado
    //produto pelo id... retorna uma mensagem de error:
    Produto.findById(req.params.produto_id, function(error, produto) {
      if (error) res.send("Id do Produto não encontrado....: " + error);

      res.json(produto);
    });
  },

  async listarProdutos(req, res) {
    Produto.find(function(error, produtos) {
      if (error)
        res.send("Erro ao tentar Selecionar Todos os produtos...: " + error);

      res.json(produtos);
    });
  },

  async deletarProduto(req, res) {
    Produto.remove(
      {
        _id: req.params.produto_id
      },
      function(error) {
        if (error) res.send("Id do Produto não encontrado....: " + error);

        res.json({ message: "Produto Excluído com Sucesso!" });
      }
    );
  }
};
