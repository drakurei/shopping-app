<?php
// php/api_panier.php - Cart/Panier API endpoints

require_once '../config.php';
require_once '../session.php';
require_once '../api.php';

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}

// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Validate session
if (!isLoggedIn()) {
    sendJsonResponse(['error' => 'Unauthorized'], 401);
}

$userId = getCurrentUserId();

$method = $_SERVER['REQUEST_METHOD'];
$input = ($method === 'GET') ? $_GET : getJsonInput();

if (in_array($method, ['POST', 'DELETE']) && !$input) {
    sendJsonResponse(['error' => 'Invalid JSON input'], 400);
}

try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }
    $conn->set_charset('utf8');

    switch ($method) {
        case 'GET':
            // Get cart items from cart table
            $stmt = $conn->prepare('
                SELECT c.id, c.quantity, p.name, p.price, p.image, p.category
                FROM cart c
                JOIN products p ON c.product_id = p.id
                WHERE c.user_id = ?
                ORDER BY c.added_at DESC
            ');
            $stmt->bind_param('i', $userId);
            $stmt->execute();
            $result = $stmt->get_result();
            $items = $result->fetch_all(MYSQLI_ASSOC);

            $totalItems = array_sum(array_column($items, 'quantity'));
            $totalPrice = array_sum(array_map(function($item) {
                return $item['price'] * $item['quantity'];
            }, $items));

            sendJsonResponse(['items' => $items, 'total_count' => $totalItems, 'total_price' => $totalPrice]);
            break;

        case 'POST':
            // Add product to cart
            $productId = (int) ($input['product_id'] ?? 0);
            $quantity = (int) ($input['quantity'] ?? 1);

            if (!$productId) {
                sendJsonResponse(['error' => 'Product ID is required'], 400);
            }

            // Check if product exists
            $stmt = $conn->prepare('SELECT id FROM products WHERE id = ?');
            $stmt->bind_param('i', $productId);
            $stmt->execute();
            if (!$stmt->get_result()->fetch_assoc()) {
                sendJsonResponse(['error' => 'Product not found'], 404);
            }

            // Add or update cart item
            $stmt = $conn->prepare('INSERT INTO cart (user_id, product_id, quantity, added_at) VALUES (?, ?, ?, NOW()) ON DUPLICATE KEY UPDATE quantity = quantity + ?');
            $stmt->bind_param('iiii', $userId, $productId, $quantity, $quantity);
            $stmt->execute();

            sendJsonResponse(['success' => true], 201);
            break;

        case 'PUT':
            // Update cart item quantity
            $cartId = (int) ($input['cart_id'] ?? 0);
            $quantity = (int) ($input['quantity'] ?? 1);

            if (!$cartId || $quantity < 1) {
                sendJsonResponse(['error' => 'Valid cart ID and quantity required'], 400);
            }

            $stmt = $conn->prepare('UPDATE cart SET quantity = ? WHERE id = ? AND user_id = ?');
            $stmt->bind_param('iii', $quantity, $cartId, $userId);
            $stmt->execute();

            sendJsonResponse(['success' => true]);
            break;

        case 'DELETE':
            // Remove item from cart
            $cartId = (int) ($input['cart_id'] ?? 0);

            if (!$cartId) {
                sendJsonResponse(['error' => 'Cart ID is required'], 400);
            }

            $stmt = $conn->prepare('DELETE FROM cart WHERE id = ? AND user_id = ?');
            $stmt->bind_param('ii', $cartId, $userId);
            $stmt->execute();

            sendJsonResponse(['success' => true]);
            break;

        default:
            sendJsonResponse(['error' => 'Method not allowed'], 405);
    }
} catch (Exception $e) {
    logApiError('Panier API error: ' . $e->getMessage());
    sendJsonResponse(['error' => 'Database error'], 500);
}
?>
