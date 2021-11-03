const express = require('express')
const router = express.Router()
const Product = require('../models/product')


router.get('/', async(req,res) => {
    try{
           const product = await Product.find()
           res.json(product)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const product = await Product.findById(req.params.id)
           res.json(product)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const product = new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        qtyPerUnit: req.body.qtyPerUnit,
        unitPrice: req.body.unitPrice,
        unitInStock: req.body.unitInStock,
        discontinued: req.body.discontinued,
        categoryId: req.body.categoryId,
    })

    try{
        const a1 =  await product.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const product = await Product.findById(req.params.id) 
        product.productId = req.body.productId
        const a1 = await product.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router;