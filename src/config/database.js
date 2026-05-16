const mongoose = require('mongoose')

const connectDatabase = async () => {
    try{
        await mongoose.connect('mongodb+srv://Bekzod:6862442@cluster0.vssewsn.mongodb.net/LMS2?appName=Cluster0')
        console.log("Database ulandi...")
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDatabase