const mongoose = require('mongoose')

const tutorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true, // +998999999999
        minLength: 11,
        maxLengrth: 13
    },
    gender: {
        type: String,
        reqired: false,
        enum: ["male", "female", "others"],
        defualt: "male"
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "tutor",
        enum: ["tutor", "intern", "examinator", "instructor"]
    },
    birthDate: {
        type: Date,
        required: false
    },
    lunchTime: {
        type: String,
        required: false,
        defualt: "12:00 - 13:00"
    },
    workTimeStart: {
        type: String,
        required: false,
        defualt: "09:00"
    },
    workTimeEnd: {
        type: String,
        required: false,
        defualt: "19:40"
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch",
        required: true
    },
    fixSalary: {
        type: Number,
        required: false,
        defualt: 0
    },
    kpi: {
        type: Number,
        required: false,
        defualt: 0
    },
    salaryHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "salaryHistory"
        }
    ]
    
})

module.exports = mongoose.model('tutor', tutorSchema)
