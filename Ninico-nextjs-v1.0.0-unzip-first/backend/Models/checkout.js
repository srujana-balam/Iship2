const mongoose = require('mongoose');
const CheckOut = new mongoose.Schema({
    Country: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: Number,
        required: true
    },
    caddress: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    state:{
        type:String,
        required:true
    },
    postalcode:{
        type:String,
        required:true
    },
    cemail:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("CheckOut", CheckOut);