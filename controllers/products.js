const Product=require('../models/products')
const getAllProducts = async (req, res) => {

    const { name, company, featured,sort } = req.query;
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
    let sortObject={}
    if (sort) {
        sortObject = sort.split(',').join(' ');
    }
   
console.log(sortObject);
    const products=await Product.find(queryObject).sort(sortObject)
    res.status(201).json({products})
}

const getAllProductsTesting = async(req,res) => {
    const products = await Product.find()
    res.status(201).json({ products })
}

module.exports = { getAllProducts, getAllProductsTesting };