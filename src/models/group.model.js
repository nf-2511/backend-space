const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    groupCode: {
        type: String,
        required: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student"
        }
    ],
    course: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "course"
        }
    ],
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "branch"
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mentor"
    },
    coin: {
        type: Number,
        default: 0
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

groupSchema.virtual("coin").get(() => {
    return this.students.length * 100
})



module.exports = mongoose.model('group', groupSchema)