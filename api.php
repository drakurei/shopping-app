<?php
// api.php - General API utilities

require_once 'config.php';

/**
 * Sends a JSON response with appropriate headers.
 *
 * @param mixed $data The data to encode as JSON.
 * @param int $statusCode The HTTP status code (default 200).
 * @return void
 */
function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header(JSON_CONTENT_TYPE . '; charset=utf-8');
    echo json_encode($data);
    exit;
}

/**
 * Gets the JSON input from the request body.
 *
 * @return array|null The decoded JSON array, or null if invalid.
 */
function getJsonInput() {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    return json_last_error() === JSON_ERROR_NONE ? $data : null;
}

/**
 * Validates CSRF token from session and request.
 *
 * @param string $token The token from request.
 * @return bool True if valid, false otherwise.
 */
function validateCsrfToken($token) {
    session_start();
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

/**
 * Generates a new CSRF token and stores in session.
 *
 * @return string The generated token.
 */
function generateCsrfToken() {
    session_start();
    $token = bin2hex(random_bytes(32));
    $_SESSION['csrf_token'] = $token;
    return $token;
}

/**
 * Sanitizes input to prevent XSS.
 *
 * @param string $input The input string.
 * @return string The sanitized string.
 */
function sanitizeInput($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

/**
 * Logs API errors for debugging.
 *
 * @param string $message The error message.
 * @return void
 */
function logApiError($message) {
    error_log('[API Error] ' . $message);
}
?>
