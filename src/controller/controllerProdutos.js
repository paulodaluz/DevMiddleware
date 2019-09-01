module.exports = {
  //Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/api):
  async cadastrarProduto(req, res) {
    res.json({ message: "Tudo 100%!" });
  },

  async listarProdutos(req, res) {
    res.json({ response: "ok" });
    S;
  },

  async buscarProduto(req, res) {
    res.json({ response: "ok" });
  },

  async alterarProduto(req, res) {
    res.json({ response: "ok" });
  },

  async deletarProduto(req, res) {
    res.json({ response: "ok" });
  }
};
