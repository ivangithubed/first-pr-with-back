const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const User = require('./models/User');

const app = express();

// Підключення до бази даних
connectDB();

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? process.env.FRONTEND_URL 
        : 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.static('.')); // Для роздачі статичних файлів

// Реєстрація
app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Перевірка чи існує користувач
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Користувач вже існує' });
        }

        // Хешування паролю
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Створення нового користувача
        user = new User({
            email,
            password: hashedPassword
        });

        await user.save();
        res.status(201).json({ message: 'Користувач успішно зареєстрований' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Помилка сервера' });
    }
});

// Вхід
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Пошук користувача
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Невірний email або пароль' });
        }

        // Перевірка паролю
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Невірний email або пароль' });
        }

        res.json({ message: 'Успішний вхід' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Помилка сервера' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});
