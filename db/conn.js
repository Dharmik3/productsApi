const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const connection = (DB) => {

    return (
        mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    )
}

module.exports = connection;



