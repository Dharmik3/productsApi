const Product = require('../models/products')

const getAllProducts = async (req, res) => {

    const { name, company, featured,sort, select ,page=1,limit=10} = req.query;
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
   
    let selectObject = {}
    if (select) {
        selectObject=select.split(',').join(' ')
    }
    
    const count = await Product.countDocuments();

    
    const products = await Product.find(queryObject).sort(sortObject).select(selectObject).limit(limit * 1)
        .skip((page - 1) * limit)
    res.status(201).json({
        products,
        totalPages: Math.ceil(count / limit),
        currentPage: Number(page)
    })
}

const getAllProductsTesting = async(req,res) => {
    const products = await Product.find()
    res.status(201).json({ products })
}

module.exports = { getAllProducts, getAllProductsTesting };