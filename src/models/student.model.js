// UYGA VAZIFA
// 1. O'quvchilar modelini tuzing.

const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    age: {
        type: Number, 
        required: true
    },
    gender: {
        type: String, 
        required: true,
        enum: ["male", "female", "others"],
        default: "male"
    },
    phone: {
        type: String, 
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "group"
    },
})

module.exports = mongoose.model('student', studentSchema)