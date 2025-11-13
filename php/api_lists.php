<?php
// php/api_lists.php - Shopping lists API endpoints

require_once '../config.php';
require_once '../session.php';
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

// Validate session
if (!isLoggedIn()) {
    sendJsonResponse(['error' => 'Unauthorized'], 401);
}

$userId = getCurrentUserId();

$method = $_SERVER['REQUEST_METHOD'];
$input = ($method === 'GET') ? $_GET : getJsonInput();

if (in_array($method, ['POST', 'PUT', 'DELETE']) && !$input) {
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
            // Get all lists for user
            $stmt = $conn->prepare('SELECT id, name, created_at FROM lists WHERE user_id = ? ORDER BY created_at DESC');
            $stmt->bind_param('i', $userId);
            $stmt->execute();
            $result = $stmt->get_result();
            $lists = $result->fetch_all(MYSQLI_ASSOC);

            // Get items for each list
            foreach ($lists as &$list) {
                $stmt = $conn->prepare('SELECT id, name, category, quantity, added_at FROM items WHERE list_id = ? ORDER BY added_at DESC');
                $stmt->bind_param('i', $list['id']);
                $stmt->execute();
                $result = $stmt->get_result();
                $list['items'] = $result->fetch_all(MYSQLI_ASSOC);
            }

            sendJsonResponse(['lists' => $lists]);
            break;

        case 'POST':
            $listId = (int) ($input['list_id'] ?? 0);
            $name = sanitizeInput($input['name'] ?? '');
            $category = sanitizeInput($input['category'] ?? '');
            $quantity = (int) ($input['quantity'] ?? 1);

            if ($listId) {
                // Add item to existing list
                if (empty($name)) {
                    sendJsonResponse(['error' => 'Item name is required'], 400);
                }

                // Verify list ownership
                $stmt = $conn->prepare('SELECT id FROM lists WHERE id = ? AND user_id = ?');
                $stmt->bind_param('ii', $listId, $userId);
                $stmt->execute();
                if (!$stmt->get_result()->fetch_assoc()) {
                    sendJsonResponse(['error' => 'List not found or access denied'], 403);
                }

                $stmt = $conn->prepare('INSERT INTO items (list_id, name, category, quantity, added_at) VALUES (?, ?, ?, ?, NOW())');
                $stmt->bind_param('issi', $listId, $name, $category, $quantity);
                $stmt->execute();
                $itemId = $conn->insert_id;

                sendJsonResponse(['success' => true, 'item_id' => $itemId], 201);
            } else {
                // Create new list
                if (empty($name)) {
                    sendJsonResponse(['error' => 'List name is required'], 400);
                }

                $stmt = $conn->prepare('INSERT INTO lists (user_id, name, created_at) VALUES (?, ?, NOW())');
                $stmt->bind_param('is', $userId, $name);
                $stmt->execute();
                $listId = $conn->insert_id;

                sendJsonResponse(['success' => true, 'list_id' => $listId], 201);
            }
            break;

        case 'PUT':
            // Update list or item
            $listId = (int) ($input['list_id'] ?? 0);
            $itemId = (int) ($input['item_id'] ?? 0);

            if ($itemId) {
                // Update item
                $name = sanitizeInput($input['name'] ?? '');
                $category = sanitizeInput($input['category'] ?? '');
                $quantity = (int) ($input['quantity'] ?? 1);

                $stmt = $conn->prepare('UPDATE items SET name = ?, category = ?, quantity = ? WHERE id = ? AND list_id IN (SELECT id FROM lists WHERE user_id = ?)');
                $stmt->bind_param('ssiii', $name, $category, $quantity, $itemId, $userId);
                $stmt->execute();

                sendJsonResponse(['success' => true]);
            } elseif ($listId) {
                // Update list name
                $name = sanitizeInput($input['name'] ?? '');
                $stmt = $conn->prepare('UPDATE lists SET name = ? WHERE id = ? AND user_id = ?');
                $stmt->bind_param('sii', $name, $listId, $userId);
                $stmt->execute();

                sendJsonResponse(['success' => true]);
            } else {
                sendJsonResponse(['error' => 'Invalid update request'], 400);
            }
            break;

        case 'DELETE':
            // Delete list or item
            $listId = (int) ($input['list_id'] ?? 0);
            $itemId = (int) ($input['item_id'] ?? 0);

            if ($itemId) {
                // Delete item
                $stmt = $conn->prepare('DELETE FROM items WHERE id = ? AND list_id IN (SELECT id FROM lists WHERE user_id = ?)');
                $stmt->bind_param('ii', $itemId, $userId);
                $stmt->execute();
            } elseif ($listId) {
                // Delete list and its items
                $stmt = $conn->prepare('DELETE FROM items WHERE list_id = ? AND list_id IN (SELECT id FROM lists WHERE user_id = ?)');
                $stmt->bind_param('ii', $listId, $userId);
                $stmt->execute();
                $stmt = $conn->prepare('DELETE FROM lists WHERE id = ? AND user_id = ?');
                $stmt->bind_param('ii', $listId, $userId);
                $stmt->execute();
            } else {
                sendJsonResponse(['error' => 'Invalid delete request'], 400);
            }

            sendJsonResponse(['success' => true]);
            break;

        default:
            sendJsonResponse(['error' => 'Method not allowed'], 405);
    }
} catch (Exception $e) {
    logApiError('Lists API error: ' . $e->getMessage());
    sendJsonResponse(['error' => 'Database error'], 500);
}
?>
