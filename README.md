# Shopping App (PHP + MySQL)

A lightweight shopping experience built with PHP, MySQL, and a sprinkle of JavaScript. Users can register, log in, browse products, and manage a persistent cart. Each JS file is under 100 lines and the project is intentionally small and structured.

## Features

- Account creation and login with hashed passwords
- Product catalogue rendered on the server
- Cart stored in the database per user
- Flash messages for feedback
- Contact, terms, and legal pages
- JSON API endpoint for cart count
- Minimal JS modules (`flash.js`, `cart.js`) for progressive enhancement

## Getting Started

1. **Create the database**
   ```sql
   mysql -u root -p < setup.sql
   ```

2. **Configure credentials** in `config.php` if needed.

3. **Run the site** via XAMPP/MAMP/WAMP: place the project in `htdocs` and open `http://localhost/shopping-app/`.

4. **Register** a new account and start adding items to your cart.

## Development & Production

- **Local development**: XAMPP/MAMP/WAMP with PHP and MySQL.
- **Production**: deploy to a PHP-compatible hosting provider (shared hosting, VPS, or PaaS).
- **Database**: run `setup.sql` on the target server and update `config.php` credentials.

## Project Layout

- `config.php`, `auth.php`, `session.php`: backend utilities
- `index.php`, `login.php`, `register.php`, `cart.php`, `logout.php`: pages
- `includes/`: shared header/footer
- `css/style.css`: base styling
- `js/flash.js`, `js/cart.js`, `js/cart-count.js`: small enhancements (<100 LOC each)
- `setup.sql`: schema + seed products
- `contact.php`, `terms.php`, `legal.php`: auxiliary pages
- `api/cart-count.php`: JSON endpoint

Feel free to extend the catalog or add checkout/payment integrations.
