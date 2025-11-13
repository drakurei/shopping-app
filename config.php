<?php
// config.php - Database configuration and constants

// Database constants
define('DB_HOST', 'localhost');
define('DB_NAME', 'shopping_app');
define('DB_USER', 'root');
define('DB_PASS', '');

// Security constants
define('HASH_ALGO', PASSWORD_DEFAULT); // For password hashing
define('SESSION_LIFETIME', 3600); // 1 hour in seconds

// API constants
define('API_VERSION', 'v1');
define('JSON_CONTENT_TYPE', 'application/json');

// Error reporting (disable in production)
error_reporting(0);
ini_set('display_errors', 0);

// Timezone
date_default_timezone_set('UTC');

// Function to get database connection
/**
 * Establishes and returns a PDO database connection.
 *
 * @return PDO The database connection object.
 * @throws PDOException If connection fails.
 */
function getDbConnection() {
    try {
        $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8';
        $pdo = new PDO($dsn, DB_USER, DB_PASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    } catch (PDOException $e) {
        // Log error and throw
        error_log('Database connection failed: ' . $e->getMessage());
        throw new PDOException('Database connection failed.');
    }
}
?>
