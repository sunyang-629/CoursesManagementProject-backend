const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id: {
        type: String,
        uppercase:true,  
    },
    name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        default:'',
    }
});

const Model = mongoose.model('Course', schema);

module.exports = Model;