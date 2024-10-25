const mongoose = require('mongoose');
const Contact = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    Emessage: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Contact", Contact);