require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to mongoDB: ', error);
        process.exit(1);
    }
}

module.exports = connectDB;