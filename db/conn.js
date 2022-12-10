const mongoose = require('mongoose');


const connection = (DB) => {

    return (
        mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    )
}

module.exports = connection;



