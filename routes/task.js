const express = require("express");
const router = express.Router();
const Product = require("../models/product"); //model of product

//To get all data
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.send("Error " + err);
  }
});
//get single data
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.send("Error " + err);
  }
});

//this is for inserting data in database
router.post("/", async (req, res) => {
  const product = new Product({
    productId: req.body.productId,
    productName: req.body.productName,
    qtyPerUnit: req.body.qtyPerUnit,
    unitPrice: req.body.unitPrice,
    unitInStock: req.body.unitInStock,
    discontinued: req.body.discontinued,
    categoryId: req.body.categoryId,
  });

  try {
    const a1 = await product.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});
//for updating particular data
router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.productId = req.body.productId;
    const a1 = await product.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

//for deleting particular data
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    product.productId = req.body.productId;
    const a1 = await product.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
