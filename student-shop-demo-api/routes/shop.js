const express = require("express")
const { createNewOrder } = require("../models/shop")
const Shop = require("../models/shop")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

// get all products in db
router.get("/", async (req, res, next) => {
  try {
    const products = await Shop.fetchProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})

//get a single product by the Id
router.get("/products/:productId", async (req, res, next) => {
    try {
      const productId = req.params.productId
      const product = await Shop.fetchProductById(productId)
      if (!product) {
        throw new NotFoundError("Product not found")
      }
      res.status(200).json({ product })
    } catch (err) {
      next(err)
    }
  })
  
//create a new order
router.post("/", async (req, res, next) => {
  try {
    const order = req.body
    const receipt = await Shop.createNewOrder(order)
    res.status(200).json({ receipt })
  } catch(err) {
    next(err)
  }
})
  
module.exports = router
