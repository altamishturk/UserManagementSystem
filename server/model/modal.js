const mongoose = require('mongoose');


let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})


const userDB = mongoose.model('crud_project_by_daily_tution', schema);


// exporting userdb module 
module.exports = userDB;