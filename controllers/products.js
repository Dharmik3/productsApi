const Product=require('../models/products')
const getAllProducts = async (req, res) => {
    const products=await Product.find()
    
    res.status(201).json({products})
}

const getAllProductsTesting = async(req,res) => {
    res.status(201).json({msg:'all testing products are getting'})
}

module.exports = { getAllProducts, getAllProductsTesting };