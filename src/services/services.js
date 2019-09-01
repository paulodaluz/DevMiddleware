const ProdutoSchema = require("../models/productSchema");

class ProductService {
  get() {
    return ProdutoSchema.find({});
  }

  getById(_id) {
    return ProdutoSchema.findById(_id);
  }

  create(produto) {
    return ProdutoSchema.create(produto);
  }

  update(_id, produto) {
    return ProdutoSchema.findByIdAndUpdate(_id, produto);
  }

  delete(_id) {
    return ProdutoSchema.findOneAndRemove(_id);
  }
}

export default new ProductService();
