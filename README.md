# Shopping App

A Single Page Application (SPA) for managing shopping lists, built with HTML, CSS, JavaScript frontend and PHP backend. Users can authenticate, create and manage shopping lists, sort items by name or category, and track live counters for added/removed items.

## Features

- **Single Page Application (SPA)**: Seamless navigation without page reloads.
- **Authentication**: User login and registration with secure password hashing.
- **Shopping List Management**: Create, read, update, and delete shopping lists and items.
- **Sorting**: Sort items by name or category in ascending/descending order.
- **Live Counters**: Real-time updates for items added or removed.
- **Form Validation**: Helpers guide input formats; submit buttons disabled until all fields are valid.
- **Temporary Storage**: User data stored temporarily in the browser.
- **Static Pages**: Terms & Conditions, Legal Notice, Social Media links, and Contact Form.
- **Security**: Protection against SQL injection, XSS, and CSRF.
- **Responsive Design**: Works on various devices with semantic HTML and CSS.

## Setup Instructions

### Development Environment

1. **Prerequisites**:
   - XAMPP (or similar) with Apache, MySQL, and PHP installed.
   - A web browser (e.g., Chrome, Firefox).

2. **Clone or Download the Project**:
   - Place the `shopping-app` folder in `c:/xampp/htdocs/`.

3. **Database Setup**:
   - Start XAMPP and open phpMyAdmin.
   - Create a database named `shopping_app`.
   - Import the SQL schema (if provided) or create tables manually:
     - `users`: id (INT, PRIMARY), username (VARCHAR), email (VARCHAR), password_hash (VARCHAR), created_at (TIMESTAMP).
     - `lists`: id (INT, PRIMARY), user_id (INT, FOREIGN), name (VARCHAR), created_at (TIMESTAMP).
     - `items`: id (INT, PRIMARY), list_id (INT, FOREIGN), name (VARCHAR), category (VARCHAR), quantity (INT), added_at (TIMESTAMP).

4. **Configuration**:
   - Edit `config.php` to set database credentials (DB_HOST, DB_NAME, DB_USER, DB_PASS).

5. **Run the Application**:
   - Start Apache and MySQL in XAMPP.
   - Open `http://localhost/shopping-app/` in your browser.

6. **Testing**:
   - Register a new user.
   - Log in and create/manage shopping lists.
   - Test sorting, counters, and form validation.

### Production Environment

1. **Server Requirements**:
   - PHP 7.4+ with MySQL/MariaDB.
   - Apache or Nginx web server.

2. **Deployment**:
   - Upload the project files to your web server.
   - Set up the database as in development.
   - Configure `config.php` with production database credentials.
   - Ensure file permissions are secure (e.g., 755 for directories, 644 for files).
   - Enable HTTPS for security.

3. **Additional Steps**:
   - Set up cron jobs if needed for maintenance.
   - Monitor logs for errors.
   - Use a CDN for assets if applicable.

## Contributing

- Follow Git practices: Work on feature branches, commit with Angular-style messages (e.g., "feat: add user authentication").
- Push stable versions to main branch daily.

## License

This project is for educational purposes. Add appropriate license if needed.
