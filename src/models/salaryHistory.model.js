const mongoose = require('mongoose')

const salaryHistory = new mongoose.Schema({
    worker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ["admin", "mentor", "tutor"]
    },
    salary: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('salaryHistory', salaryHistory)