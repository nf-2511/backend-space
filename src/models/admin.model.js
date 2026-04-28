const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    firstname: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: false
    },
    phone: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        default: "admin",
        enum: ["admin", "cashier", "branch manager"]
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch"
    },
    salaryHistory: {
        type: Array,
        default: []
    },
    attendance: {
        type: Array,
        default: []
    },
    time: {
        lunchTimeStart: {
            type: Date,
            default: null
        },
        lunchTimeEnd: {
            type: Date,
            default: null
        },
        workTimeStart: {
            type: Date,
            default: null
        },
        workTimeEnd: {
            type: Date,
            default: null
        }
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        default: "male"
    },
    birthDate: {
        type: Date,
        default: null
    },
    address: {
        type: String,
        default: null
    }
})

// "Azizxon" 

module.exports = mongoose.model('admin', adminSchema)