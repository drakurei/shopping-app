-- setup.sql - Initialize shopping_app database

CREATE DATABASE IF NOT EXISTS shopping_app;
USE shopping_app;

DROP TABLE IF EXISTS cart_items;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uniq_cart_product (user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO products (name, description, price, image) VALUES
('Fresh Apples', 'Crisp apples perfect for snacking.', 2.99, 'assets/apples.svg'),
('Organic Milk', 'One gallon of whole organic milk.', 4.25, 'assets/milk.svg'),
('Whole Wheat Bread', 'Fresh baked loaf with a soft center.', 3.10, 'assets/bread.svg'),
('Free Range Eggs', 'A dozen large free range eggs.', 3.75, 'assets/eggs.svg'),
('Ground Coffee', 'Medium roast beans with chocolate notes.', 9.50, 'assets/coffee.svg'),
('Dark Chocolate', '70% cacao chocolate bar.', 2.50, 'assets/chocolate.svg'),
('Baby Spinach', 'Washed leaves ready for salads.', 3.40, 'assets/spinach.svg'),
('Atlantic Salmon', 'Skin-on fillet, 6oz portion.', 12.50, 'assets/salmon.svg'),
('Almond Granola', 'Crunchy granola with roasted almonds.', 6.90, 'assets/granola.svg'),
('Orange Juice', 'Fresh squeezed juice, 64oz.', 5.25, 'assets/orange-juice.svg'),
('Greek Yogurt', 'Plain yogurt, 32oz tub.', 4.80, 'assets/yogurt.svg'),
('Herbal Tea', 'Calming mint infusion, 20 bags.', 4.10, 'assets/tea.svg');
