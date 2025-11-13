-- setup.sql - Database setup script

CREATE DATABASE IF NOT EXISTS shopping_app;
USE shopping_app;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lists table
CREATE TABLE IF NOT EXISTS lists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Items table
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    list_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    quantity INT DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (list_id) REFERENCES lists(id) ON DELETE CASCADE
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255),
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cart table
CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    UNIQUE KEY unique_cart_item (user_id, product_id)
);

-- Insert sample user (password: password123)
INSERT INTO users (username, email, password_hash) VALUES
('testuser', 'test@example.com', '$2y$10$im09DetO7Hjyuq38GIvbU.hyvczrWlMWPWhm2vW7aigfynhIKPhJ6');

-- Insert sample products
INSERT INTO products (name, description, price, image, category) VALUES
('Fresh Apples', 'Crisp and juicy red apples, perfect for snacking.', 2.99, 'assets/apple.jpg', 'Fruits'),
('Organic Milk', 'Fresh organic whole milk, 1 gallon.', 3.49, 'assets/milk.jpg', 'Dairy'),
('Chicken Breast', 'Boneless skinless chicken breast, 1 lb.', 5.99, 'assets/chicken.jpg', 'Meat'),
('Whole Wheat Bread', 'Fresh baked whole wheat bread loaf.', 2.49, 'assets/bread.jpg', 'Bakery'),
('Bananas', 'Ripe yellow bananas, bunch of 6.', 1.99, 'assets/banana.jpg', 'Fruits'),
('Cheddar Cheese', 'Sharp cheddar cheese block, 8 oz.', 4.99, 'assets/cheese.jpg', 'Dairy'),
('Ground Beef', 'Lean ground beef, 1 lb.', 6.99, 'assets/beef.jpg', 'Meat'),
('Orange Juice', 'Fresh squeezed orange juice, 64 oz.', 4.49, 'assets/orange-juice.jpg', 'Beverages'),
('Strawberries', 'Fresh organic strawberries, 1 pint.', 4.99, 'assets/strawberries.jpg', 'Fruits'),
('Greek Yogurt', 'Plain Greek yogurt, 32 oz.', 3.99, 'assets/yogurt.jpg', 'Dairy'),
('Salmon Fillet', 'Fresh Atlantic salmon fillet, 6 oz.', 8.99, 'assets/salmon.jpg', 'Meat'),
('Croissant', 'Buttery French croissant, pack of 4.', 5.49, 'assets/croissant.jpg', 'Bakery'),
('Blueberries', 'Fresh blueberries, 1 pint.', 3.49, 'assets/blueberries.jpg', 'Fruits'),
('Butter', 'Unsalted butter, 1 lb.', 4.29, 'assets/butter.jpg', 'Dairy'),
('Turkey Breast', 'Sliced turkey breast, 1 lb.', 7.99, 'assets/turkey.jpg', 'Meat'),
('Bagels', 'Assorted bagels, pack of 6.', 3.99, 'assets/bagels.jpg', 'Bakery'),
('Oranges', 'Juicy navel oranges, 3 lb bag.', 4.49, 'assets/oranges.jpg', 'Fruits'),
('Eggs', 'Farm fresh eggs, dozen.', 2.99, 'assets/eggs.jpg', 'Dairy'),
('Pork Chops', 'Bone-in pork chops, 1 lb.', 6.49, 'assets/pork.jpg', 'Meat'),
('Muffins', 'Blueberry muffins, pack of 4.', 4.99, 'assets/muffins.jpg', 'Bakery'),
('Grapes', 'Seedless red grapes, 2 lb.', 3.99, 'assets/grapes.jpg', 'Fruits'),
('Cottage Cheese', 'Low-fat cottage cheese, 16 oz.', 2.49, 'assets/cottage-cheese.jpg', 'Dairy'),
('Lamb Chops', 'Grass-fed lamb chops, 1 lb.', 12.99, 'assets/lamb.jpg', 'Meat'),
('Cookies', 'Chocolate chip cookies, pack of 12.', 3.49, 'assets/cookies.jpg', 'Bakery'),
('Pineapple', 'Fresh whole pineapple.', 3.99, 'assets/pineapple.jpg', 'Fruits'),
('Ice Cream', 'Vanilla ice cream, 1 quart.', 4.49, 'assets/ice-cream.jpg', 'Dairy'),
('Shrimp', 'Large shrimp, 1 lb.', 11.99, 'assets/shrimp.jpg', 'Meat'),
('Donuts', 'Assorted donuts, pack of 6.', 4.99, 'assets/donuts.jpg', 'Bakery'),
('Mangoes', 'Ripe mangoes, 2 count.', 2.99, 'assets/mangoes.jpg', 'Fruits'),
('Sour Cream', 'Regular sour cream, 16 oz.', 2.29, 'assets/sour-cream.jpg', 'Dairy'),
('Bacon', 'Thick-cut bacon, 1 lb.', 5.99, 'assets/bacon.jpg', 'Meat'),
('Cake', 'Chocolate cake, serves 8.', 15.99, 'assets/cake.jpg', 'Bakery'),
('Lemons', 'Fresh lemons, 5 count.', 1.49, 'assets/lemons.jpg', 'Fruits'),
('Heavy Cream', 'Heavy whipping cream, 1 pint.', 3.49, 'assets/cream.jpg', 'Dairy'),
('Tuna Steak', 'Fresh tuna steak, 8 oz.', 9.99, 'assets/tuna.jpg', 'Meat'),
('Pie', 'Apple pie, serves 6.', 12.99, 'assets/pie.jpg', 'Bakery'),
('Avocados', 'Ripe avocados, 2 count.', 2.49, 'assets/avocados.jpg', 'Fruits'),
('Parmesan Cheese', 'Grated parmesan cheese, 8 oz.', 4.99, 'assets/parmesan.jpg', 'Dairy'),
('Sausages', 'Italian sausages, pack of 5.', 6.99, 'assets/sausages.jpg', 'Meat'),
('Brownies', 'Fudgy brownies, pack of 8.', 5.99, 'assets/brownies.jpg', 'Bakery'),
('Watermelon', 'Seedless watermelon, whole.', 6.99, 'assets/watermelon.jpg', 'Fruits'),
('Mozzarella Cheese', 'Fresh mozzarella balls, 8 oz.', 4.49, 'assets/mozzarella.jpg', 'Dairy'),
('Hot Dogs', 'Beef hot dogs, pack of 8.', 4.99, 'assets/hot-dogs.jpg', 'Meat'),
('Cupcakes', 'Vanilla cupcakes, pack of 6.', 7.99, 'assets/cupcakes.jpg', 'Bakery'),
('Kiwi', 'Fresh kiwi fruit, 4 count.', 2.99, 'assets/kiwi.jpg', 'Fruits'),
('Whipped Cream', 'Whipped cream, 8 oz.', 2.99, 'assets/whipped-cream.jpg', 'Dairy'),
('Chicken Wings', 'Chicken wings, 2 lb.', 7.49, 'assets/wings.jpg', 'Meat'),
('Bread Rolls', 'Dinner rolls, pack of 12.', 3.99, 'assets/rolls.jpg', 'Bakery'),
('Pears', 'Bartlett pears, 3 lb bag.', 3.49, 'assets/pears.jpg', 'Fruits'),
('Cream Cheese', 'Cream cheese, 8 oz.', 2.49, 'assets/cream-cheese.jpg', 'Dairy'),
('Ribeye Steak', 'Prime ribeye steak, 1 lb.', 14.99, 'assets/ribeye.jpg', 'Meat'),
('Pasta', 'Assorted pasta shapes, 1 lb.', 1.99, 'assets/pasta.jpg', 'Bakery'),
('Cherries', 'Sweet cherries, 1 lb.', 4.99, 'assets/cherries.jpg', 'Fruits'),
('Swiss Cheese', 'Swiss cheese slices, 8 oz.', 4.29, 'assets/swiss.jpg', 'Dairy'),
('Filet Mignon', 'Filet mignon steak, 8 oz.', 16.99, 'assets/filet.jpg', 'Meat'),
('Rice', 'Long grain white rice, 2 lb.', 2.49, 'assets/rice.jpg', 'Bakery');
