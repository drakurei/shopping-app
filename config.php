<?php
// config.php - Core configuration and helper functions

declare(strict_types=1);

require_once __DIR__ . '/session.php';

error_reporting(E_ALL);
ini_set('display_errors', '1');
date_default_timezone_set('UTC');

define('DB_HOST', 'localhost');
define('DB_PORT', 3306);
define('DB_NAME', 'shopping_app');
define('DB_USER', 'root');
define('DB_PASS', '');

/**
 * Returns a shared PDO instance.
 */
function db(): PDO {
    static $pdo = null;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $dsn = sprintf('mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4', DB_HOST, DB_PORT, DB_NAME);
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    return $pdo;
}

function redirect(string $path): void {
    header('Location: ' . $path);
    exit;
}

function is_logged_in(): bool {
    return isset($_SESSION['user_id']);
}

function current_user(): ?array {
    return $_SESSION['user'] ?? null;
}

/**
 * Returns a CSRF token for the current session.
 */
function csrf_token(): string {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['csrf_token'];
}

/**
 * Returns a hidden input field containing the CSRF token.
 */
function csrf_field(): string {
    $token = htmlspecialchars(csrf_token(), ENT_QUOTES, 'UTF-8');
    return '<input type="hidden" name="csrf_token" value="' . $token . '">';
}

/**
 * Validates a provided CSRF token against the current session token.
 */
function csrf_validate(?string $token): bool {
    $sessionToken = $_SESSION['csrf_token'] ?? '';
    if (!is_string($token) || $sessionToken === '') {
        return false;
    }

    return hash_equals($sessionToken, $token);
}

/**
 * Returns the total quantity of items in the user's cart.
 */
function cart_item_count(int $userId): int {
    $pdo = db();
    $stmt = $pdo->prepare('SELECT COALESCE(SUM(quantity), 0) FROM cart_items WHERE user_id = ?');
    $stmt->execute([$userId]);
    return (int) $stmt->fetchColumn();
}

function log_in_user(array $user): void {
    $_SESSION['user_id'] = (int) $user['id'];
    $_SESSION['user'] = [
        'id' => (int) $user['id'],
        'name' => $user['name'] ?? '',
        'email' => $user['email'] ?? ''
    ];
    regenerate_session();
}

function logout_user(): void {
    $_SESSION = [];
    regenerate_session();
}

function require_login(): void {
    if (!is_logged_in()) {
        set_flash('error', 'Please login to continue.');
        redirect('login.php');
    }
}

function set_flash(string $type, string $message): void {
    $_SESSION['flash'][$type][] = $message;
}

function get_flashes(): array {
    $flashes = $_SESSION['flash'] ?? [];
    unset($_SESSION['flash']);
    return $flashes;
}

function sanitize(string $value): string {
    return trim(filter_var($value, FILTER_UNSAFE_RAW));
}
?>
