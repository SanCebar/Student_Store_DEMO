const { BadRequestError } = require("../utils/errors");
// const { storage } = require("../data/storage")

class Shop {
  static async makeBox() {
    // desc
    // const transactions = storage.get("transactions").value();
    const newBox = ["hello world!", 10]
    return newBox;
  }
}

module.exports = Shop;
