<?php
// add_products.php - Script to add products with internet images to database

require_once 'config.php';

try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $conn->set_charset('utf8');

    // Clear existing products first (optional - comment out if you want to keep existing)
    // $conn->query("DELETE FROM products");

    $products = [
        ['Whole Wheat Bread', 'Fresh whole wheat bread loaf', 3.25, 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', 'Bakery'],
        ['Strawberries', 'Fresh organic strawberries, 1 pint', 4.99, 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400', 'Fruits'],
        ['Greek Yogurt', 'Plain Greek yogurt, 32 oz', 3.75, 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400', 'Dairy'],
        ['Farm Fresh Eggs', 'Farm fresh eggs, dozen', 4.25, 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400', 'Dairy'],
        ['Tomato Sauce', 'Organic tomato sauce, 24 oz', 2.99, 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400', 'Pantry'],
        ['Whole Wheat Pasta', 'Whole wheat pasta, 16 oz', 2.49, 'https://images.unsplash.com/photo-1551467847-0d2026d8baa6?w=400', 'Pantry'],
        ['Brown Rice', 'Brown rice, 2 lb', 3.99, 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', 'Pantry'],
        ['Extra Virgin Olive Oil', 'Extra virgin olive oil, 17 oz', 8.99, 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400', 'Pantry'],
        ['Ground Coffee', 'Ground coffee, 12 oz', 7.49, 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', 'Beverages'],
        ['Green Tea', 'Green tea bags, 20 count', 4.99, 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400', 'Beverages'],
        ['Dark Chocolate Bar', 'Dark chocolate, 3.5 oz', 2.99, 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400', 'Snacks'],
        ['Raw Almonds', 'Raw almonds, 8 oz', 6.99, 'https://images.unsplash.com/photo-1508061253366-fd7da158b6d9?w=400', 'Snacks'],
        ['Pure Honey', 'Pure honey, 12 oz', 5.49, 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400', 'Pantry'],
        ['Whole Grain Cereal', 'Whole grain cereal, 18 oz', 4.25, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', 'Breakfast'],
        ['Fresh Orange', 'Fresh navel orange', 1.25, 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400', 'Fruits'],
        ['Russet Potatoes', 'Russet potatoes, 5 lb bag', 3.49, 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', 'Vegetables'],
        ['Yellow Onions', 'Yellow onions, 3 lb bag', 1.99, 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400', 'Vegetables'],
        ['Fresh Garlic', 'Fresh garlic, 8 oz', 0.99, 'https://images.unsplash.com/photo-1553729784-e91953dec042?w=400', 'Vegetables'],
        ['Romaine Lettuce', 'Romaine lettuce, head', 2.25, 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400', 'Vegetables'],
        ['Vine Tomatoes', 'Vine-ripened tomatoes, 1 lb', 3.49, 'https://images.unsplash.com/photo-1546470427-e9e85214c45b?w=400', 'Vegetables'],
        ['Mixed Bell Peppers', 'Mixed bell peppers, 1 lb', 4.99, 'https://images.unsplash.com/photo-1561136594-7f68413cca0c?w=400', 'Vegetables'],
        ['Fresh Spinach', 'Fresh spinach, 10 oz', 2.99, 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400', 'Vegetables'],
        ['Button Mushrooms', 'Button mushrooms, 8 oz', 3.25, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', 'Vegetables'],
        ['Ripe Avocados', 'Ripe avocados, 2 count', 3.99, 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400', 'Fruits'],
        ['Fresh Lemons', 'Fresh lemons, 1 lb', 2.49, 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=400', 'Fruits'],
        ['Red Grapes', 'Red seedless grapes, 2 lb', 3.75, 'https://images.unsplash.com/photo-1537640538966-79f36943f303?w=400', 'Fruits'],
        ['Fresh Blueberries', 'Fresh blueberries, 6 oz', 4.49, 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400', 'Fruits'],
        ['Unsalted Butter', 'Unsalted butter, 1 lb', 3.99, 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400', 'Dairy'],
        ['Heavy Cream', 'Heavy cream, 8 oz', 2.75, 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400', 'Dairy'],
        ['Ground Turkey', 'Ground turkey, 1 lb', 7.99, 'https://images.unsplash.com/photo-1544378730-6f3c834d9b2a?w=400', 'Meat'],
        ['Bone-in Pork Chops', 'Bone-in pork chops, 1.5 lb', 9.99, 'https://images.unsplash.com/photo-1544378730-6f3c834d9b2a?w=400', 'Meat'],
        ['Grass-fed Lamb Chops', 'Grass-fed lamb chops, 1 lb', 14.99, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400', 'Meat'],
        ['Large Shrimp', 'Large shrimp, 1 lb', 11.99, 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400', 'Seafood'],
        ['Tilapia Fillets', 'Tilapia fillets, 1 lb', 8.49, 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=400', 'Seafood'],
        ['Butter Croissant', 'Butter croissant', 2.25, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', 'Bakery'],
        ['Blueberry Muffin', 'Blueberry muffin', 2.75, 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400', 'Bakery'],
        ['Plain Bagel', 'Plain bagel', 1.99, 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400', 'Bakery'],
        ['Glazed Donut', 'Glazed donut', 1.75, 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', 'Bakery'],
        ['Chocolate Chip Cookies', 'Chocolate chip cookies, 12 oz', 4.49, 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400', 'Bakery'],
        ['Chocolate Cake', 'Chocolate cake, serves 8', 5.99, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', 'Bakery'],
        ['Vanilla Ice Cream', 'Vanilla ice cream, 48 oz', 4.99, 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400', 'Frozen'],
        ['Pepperoni Pizza', 'Pepperoni pizza, 20 oz', 6.49, 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400', 'Frozen'],
        ['Mixed Vegetables', 'Mixed vegetables, 16 oz', 2.99, 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400', 'Frozen'],
        ['Cola', 'Cola, 2 liter', 1.99, 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400', 'Beverages'],
        ['Energy Drink', 'Energy drink, 16 oz', 2.49, 'https://images.unsplash.com/photo-1622543925917-763c18beecf2?w=400', 'Beverages'],
        ['Craft Beer', 'Craft beer, 6 pack', 8.99, 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400', 'Beverages'],
        ['Red Wine', 'Red wine, 750 ml', 12.99, 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', 'Beverages'],
        ['Potato Chips', 'Potato chips, 10 oz', 3.49, 'https://images.unsplash.com/photo-1566479179818-1e1b38f6d0b3?w=400', 'Snacks'],
        ['Microwave Popcorn', 'Microwave popcorn, 3 pack', 2.99, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', 'Snacks'],
        ['Mixed Nuts', 'Mixed nuts, 12 oz', 7.99, 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=400', 'Snacks'],
        ['Energy Granola Bars', 'Energy granola bars, 6 pack', 4.25, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', 'Snacks'],
        ['Assorted Candy', 'Assorted candy, 16 oz', 3.99, 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400', 'Snacks'],
        ['Lavender Soap', 'Lavender soap bar', 2.99, 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400', 'Household'],
        ['Herbal Shampoo', 'Herbal shampoo, 12 oz', 5.49, 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400', 'Household'],
        ['Lemon Dish Soap', 'Lemon dish soap, 25 oz', 3.25, 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400', 'Household'],
        ['Paper Towel Rolls', 'Paper towel rolls, 6 pack', 4.99, 'https://images.unsplash.com/photo-1585435557343-3b092031e2bb?w=400', 'Household'],
        ['Trash Bags', 'Trash bags, 30 count', 5.49, 'https://images.unsplash.com/photo-1610574530080-2599e6c10a8c?w=400', 'Household'],
        ['Multi-surface Cleaner', 'Multi-surface cleaner, 32 oz', 3.99, 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400', 'Household']
    ];

    $stmt = $conn->prepare("INSERT INTO products (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)");

    $count = 0;
    foreach ($products as $product) {
        $stmt->bind_param("ssdss", $product[0], $product[1], $product[2], $product[3], $product[4]);
        if ($stmt->execute()) {
            $count++;
        }
    }

    $stmt->close();
    $conn->close();

    echo "<h1>Products Added Successfully!</h1>";
    echo "<p>$count products have been added to your database.</p>";
    echo "<p><a href='index.html'>Return to Shopping App</a></p>";

} catch (Exception $e) {
    echo "<h1>Error</h1>";
    echo "<p>Failed to add products: " . $e->getMessage() . "</p>";
}
?>
