const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        // mongodb connection string 
        const con = await mongoose.connect(process.env.mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log('connected to ' + con.connection.host);
    } catch (err) {
        console.log(err)
    }
}


// exporting connectDB module 
module.exports = connectDB;
