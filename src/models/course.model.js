const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true // 9 months
    },
    price: {
        type: Number,
        required: true
    }, // 1000000
})

module.exports = mongoose.model('course', courseSchema)