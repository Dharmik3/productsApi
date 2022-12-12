const Product=require('../models/products')
const getAllProducts = async (req, res) => {
    const products=await Product.find(req.query)
    
    res.status(201).json({products})
}

const getAllProductsTesting = async(req,res) => {
    const products = await Product.find()
    res.status(201).json({ products })
}

module.exports = { getAllProducts, getAllProductsTesting };