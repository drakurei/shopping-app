<?php
// php/api_products.php - Products API endpoints

require_once '../config.php';
require_once '../api.php';

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}

// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$method = $_SERVER['REQUEST_METHOD'];

try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }
    $conn->set_charset('utf8');

    switch ($method) {
        case 'GET':
            // Get all products or search/filter
            $category = $_GET['category'] ?? '';
            $search = $_GET['search'] ?? '';

            $query = 'SELECT id, name, description, price, image, category FROM products WHERE 1=1';
            $params = [];
            $types = '';

            if (!empty($category)) {
                $query .= ' AND category = ?';
                $params[] = $category;
                $types .= 's';
            }

            if (!empty($search)) {
                $query .= ' AND (name LIKE ? OR description LIKE ?)';
                $params[] = '%' . $search . '%';
                $params[] = '%' . $search . '%';
                $types .= 'ss';
            }

            $query .= ' ORDER BY name ASC';

            $stmt = $conn->prepare($query);
            if (!empty($params)) {
                $stmt->bind_param($types, ...$params);
            }
            $stmt->execute();
            $result = $stmt->get_result();
            $products = $result->fetch_all(MYSQLI_ASSOC);

            sendJsonResponse(['products' => $products]);
            break;

        default:
            sendJsonResponse(['error' => 'Method not allowed'], 405);
    }
} catch (Exception $e) {
    logApiError('Products API error: ' . $e->getMessage());
    sendJsonResponse(['error' => 'Database error'], 500);
}
?>
