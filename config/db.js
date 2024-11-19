const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auth_db';
        await mongoose.connect(mongoURI);
        console.log('MongoDB підключено успішно');
    } catch (error) {
        console.error('Помилка підключення до MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
