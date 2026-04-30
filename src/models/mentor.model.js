const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
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
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: "mentor",
        enum: ["mentor","academy manager"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "others"]
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch",
        enum : ["Yunusobod", "Tinchlik", "Chilonzor", "Sergili", "Qutbiniso", "Minor"],
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: null
    },
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "level",
        required: true,
        enum: ["Junior", "Middle", "Senior", "Teamlead", "Architect"]
    },
    salary: {
        type: Number,
        required: false,
        default: 0
    },
    salaryHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "salaryHistory"
        }
    ]
})

module.exports = mongoose.model('mentor', mentorSchema)