const mongoose = require("mongoose");

const db = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB

