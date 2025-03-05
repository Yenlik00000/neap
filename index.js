const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Разрешаем CORS
app.use(bodyParser.json()); // Обработка JSON

// Новый массив продуктов
let products = [
    {
        id: 1,
        name: "Кубики для строительства",
        category: "Игры для дома",
        price: 46.00,
        old_price: 56.00,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_15-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    },
    {
        id: 2,
        name: "Игровой набор с цифрами",
        category: "Игры для дома",
        price: 37.60,
        old_price: 51.00,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_05-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    },
    {
        id: 3,
        name: "Сюрприз-яйцо с игрушками",
        category: "Игры для дома",
        price: 20.99,
        old_price: 36.00,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_16-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    },
    {
        id: 4,
        name: "Конструктор LEGO",
        category: "Игры для дома",
        price: 9.69,
        old_price: 24.99,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_08-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    },
    {
        id: 5,
        name: "Детская игровая площадка",
        category: "Игры для дома",
        price: 16.00,
        old_price: 56.00,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_03-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    },
    {
        id: 6,
        name: "Детская гитара с маракасами",
        category: "Игры для дома",
        price: 66.00,
        old_price: 76.99,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2024/01/product_20-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    },
    {
        id: 7,
        name: "Кубики с цифрами (Обучающие игрушки)",
        category: "Игры для дома",
        price: 23.56,
        old_price: 67.85,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_05-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    },
    {
        id: 8,
        name: "Плюшевый мишка с сердцем",
        category: "Игры для дома",
        price: 12.89,
        old_price: 26.00,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_02-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    },
    {
        id: 9,
        name: "Игрушечная собака на колесиках",
        category: "Игры для дома",
        price: 44.78,
        old_price: 89.67,
        rating: 5.0,
        image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_10-484x373.png",
        hover_image: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_19-484x373.png"
    }
];

// Получить все продукты
app.get('/products', (req, res) => {
    res.json(products);
});

// Добавить новый продукт
app.post('/products', (req, res) => {
    const { name, category, price, old_price, rating, image, hover_image } = req.body;

    if (!name || !category || !price || !old_price || !rating || !image || !hover_image) {
        return res.status(400).json({ message: 'Все поля обязательны!' });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        category,
        price,
        old_price,
        rating,
        image,
        hover_image
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`API работает на порту ${port}`);
});
