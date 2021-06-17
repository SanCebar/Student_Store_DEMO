const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage")

class Shop {
  static async fetchProducts() {
    // desc
    const products = storage.get("products").value();
    // const products = [{[namie]: "happy"}]
    return products;
  }

  static async fetchProductById(productId) {
    // fetch a single transaction
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value();
    return product;
  }
}

module.exports = Shop;
