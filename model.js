const mongoose = require("mongoose");

const User = mongoose.model(
    "User", 
    new mongoose.Schema({
        username : String,
        phone: {
            type : Number,
            required : true,
            unique : true
        },
        password: {
            type : String,
            required: true,
        },
    })
);
module.exports = User; 