require('dotenv').config()
const connection = require('./db/conn')
const Product = require('./models/products')
const productsData=require('./productsData.json')

const start = async() => {
    
    try {
        await connection(process.env.MONGO_URL);
       const res= await Product.create(productsData);
        if (res) {
        console.log('productsdata uploaded successfully');
    }

    } catch (err) {
        console.log(err);
    }

}

start();