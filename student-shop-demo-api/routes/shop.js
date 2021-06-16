const express = require("express")
const Shop = require("../models/shop")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

// desc
router.get("/", async (req, res, next) => {
  try {
    const box = await Shop.makeBox()
    res.status(200).json(box)
  } catch (err) {
    next(err)
  }
})

// desc
// router.post("/transactions", async (req, res, next) => {
//   try {
//     const transaction = req.body.transaction
//     const newTransaction = await Bank.recordTransaction(transaction)
//     res.status(201).json({ transaction: newTransaction })
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router
