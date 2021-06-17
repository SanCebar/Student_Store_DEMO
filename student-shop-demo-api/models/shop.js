const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage")

class Shop {
  static async fetchProducts() {
    // fetch entire list of products
    const products = storage.get("products").value()
    return products
  }

  static async fetchProductById(productId) {
    // fetch a single transaction
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value()
    return product
  }

  static async createNewOrder(order) {
    //create new order
    /* Error Handling */
    if (!order) {
      throw new BadRequestError(`No order sent.`)
    }
    let requiredFields = ["cart", "userInfo"]
    requiredFields.forEach((field) => {
      if (!order[field] && order[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in order`)
      }
    })
    /* Error handling for userInfo */
    requiredFields = ["name", "email"]
    requiredFields.forEach((field) => {
      if (!order["userInfo"][field] && order["userInfo"][field] !== 0) {
        throw new BadRequestError(`userInfo Field: "${field}" is required in order`)
      }
    })

    const postedAt = new Date().toISOString()

    const receipt = { postedAt, ...order["userInfo"] }

    return receipt
  }
}

module.exports = Shop;
