const Product=require('../models/products')
const getAllProducts = async (req, res) => {

    const { name, company, featured } = req.query;
    const queryObject = {};
    
    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    
    const products=await Product.find(queryObject)
    res.status(201).json({products})
}

const getAllProductsTesting = async(req,res) => {
    const products = await Product.find()
    res.status(201).json({ products })
}

module.exports = { getAllProducts, getAllProductsTesting };