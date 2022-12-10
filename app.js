const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
require('dotenv').config()
const router = require('./routes/products')
const connection=require('./db/conn')
const DB = process.env.MONGO_URL

app.get('/', (req,res) => {
    res.send('from app')
})

app.use('/api/v1/products', router);

const start = async() => {
    try {
        const conn = await connection(DB);
        if (conn) {
            console.log('🥳 connected successfully... 🥳');
        }
        app.listen(PORT, () => {
            console.log(`server running on ${PORT}`);
        })
    } catch (err) {
        console.log(`😒 ${err}`);
    }
}

start();
