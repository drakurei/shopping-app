<?php
// php/api_auth.php - Authentication API endpoints

require_once '../config.php';
require_once '../auth.php';
require_once '../api.php';

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}

// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(['error' => 'Method not allowed'], 405);
}

$input = getJsonInput();
if (!$input) {
    sendJsonResponse(['error' => 'Invalid JSON input'], 400);
}

$action = $input['action'] ?? '';

try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }
    $conn->set_charset('utf8');

    switch ($action) {
        case 'register':
            $username = sanitizeInput($input['username'] ?? '');
            $email = sanitizeInput($input['email'] ?? '');
            $password = $input['password'] ?? '';

            $result = registerUser($username, $email, $password);
            $status = $result['success'] ? 201 : 400;
            sendJsonResponse($result, $status);
            break;

        case 'login':
            $identifier = sanitizeInput($input['identifier'] ?? '');
            $password = $input['password'] ?? '';

            $result = loginUser($identifier, $password);
            if ($result['success']) {
                $result['csrf_token'] = generateCsrfToken();
            }
            $status = $result['success'] ? 200 : 401;
            sendJsonResponse($result, $status);
            break;

        case 'logout':
            $result = logoutUser();
            sendJsonResponse($result, 200);
            break;

        case 'validate':
            $result = validateSession();
            sendJsonResponse($result, $result['valid'] ? 200 : 401);
            break;

        default:
            sendJsonResponse(['error' => 'Invalid action'], 400);
    }
} catch (Exception $e) {
    logApiError('Auth API error: ' . $e->getMessage());
    sendJsonResponse(['error' => 'Database error'], 500);
}
?>
