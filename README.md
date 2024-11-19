# Authentication System

Повнофункціональна система аутентифікації з використанням сучасних веб-технологій.

## Технології

- Frontend:
  - HTML5
  - Tailwind CSS
  - Vanilla JavaScript

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - bcryptjs для хешування паролів
  - CORS для безпечних крос-доменних запитів

## Функціонал

- Реєстрація користувачів
- Вхід в систему
- Валідація форм
- Безпечне зберігання паролів
- Responsive дизайн

## Встановлення

1. Клонуйте репозиторій:
```bash
git clone [URL репозиторію]
cd [назва-проекту]
```

2. Встановіть залежності:
```bash
npm install
```

3. Створіть файл `.env` і додайте необхідні змінні оточення:
```env
MONGODB_URI=your_mongodb_uri
```

4. Запустіть проект:
```bash
# Запуск сервера
npm start

# В окремому терміналі запустіть Tailwind для компіляції CSS
npm run watch:css
```

## Розробка

- `input.css` - вхідний файл для Tailwind CSS
- `output.css` - скомпільований CSS файл
- `server.js` - основний файл сервера
- `index.html` - головна сторінка

## Деплой

Проект налаштований для деплою на Render.com:

1. Build Command: `npm install && npm run build`
2. Start Command: `npm start`
3. Додайте змінні оточення в налаштуваннях Render

## Ліцензія

ISC
