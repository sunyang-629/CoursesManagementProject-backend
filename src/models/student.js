const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schema = new mongoose.Schema({
    _id: {
        type: String,
        uppercase: true,
        alias:"another id"
    },
    firstName: {
        type: String,
        required: true      
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator:email => !Joi.validate(email,Joi.string().email()).error,
            msg:"Invalid email format"
        }
    }
})

const Model = mongoose.model("Student", schema);

module.exports = Model;