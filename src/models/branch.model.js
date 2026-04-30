const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin" // reference 
    },
    tutors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tutor"
        }
    ],
    mentors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "mentor"
        }
    ],
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student"
        }
    ]
})