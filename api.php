<?php
// Enable all error reporting for debugging
error_reporting(E_ALL);
// Do not display PHP errors directly in responses. Convert errors/exceptions to JSON responses.
ini_set('display_errors', 0);
ini_set('log_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

session_start();

// Log session for debugging (kept) — won't leak to client
file_put_contents('debug_session.txt', print_r($_SESSION, true));

require_once 'config.php';
require_once 'session.php';

// Global error/exception handlers to return JSON instead of HTML
set_error_handler(function($severity, $message, $file, $line) {
    http_response_code(500);
    header('Content-Type: application/json');
    error_log("PHP error: $message in $file:$line");
    echo json_encode(['success' => false, 'message' => 'Server error']);
    exit;
});

set_exception_handler(function($ex) {
    http_response_code(500);
    header('Content-Type: application/json');
    error_log($ex);
    echo json_encode(['success' => false, 'message' => 'Server exception']);
    exit;
});

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

header('Content-Type: application/json');

if (!isLoggedIn()) {
    echo json_encode(['success' => false, 'message' => 'Not logged in']);
    exit;
}

$user_id = getUserId();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if ($action === 'add') {
        $product_name = $_POST['product_name'];
        $quantity = $_POST['quantity'] ?? 1;
        $price = $_POST['price'];

        $stmt = $conn->prepare("INSERT INTO shopping_lists (user_id, product_name, quantity, price) VALUES (?, ?, ?, ?)");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Preparation error: ' . $conn->error]);
            exit;
        }
        $stmt->bind_param("isid", $user_id, $product_name, $quantity, $price);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Product added']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Add error: ' . $stmt->error]);
        }
        $stmt->close();
    } elseif ($action === 'remove') {
        $id = $_POST['id'];

        $stmt = $conn->prepare("DELETE FROM shopping_lists WHERE id = ? AND user_id = ?");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Preparation error: ' . $conn->error]);
            exit;
        }
        $stmt->bind_param("ii", $id, $user_id);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Product removed']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Removal error: ' . $stmt->error]);
        }
        $stmt->close();
    } elseif ($action === 'update') {
        // Added update action for quantity
        $id = $_POST['id'];
        $quantity = $_POST['quantity'];

        $stmt = $conn->prepare("UPDATE shopping_lists SET quantity = ? WHERE id = ? AND user_id = ?");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Preparation error: ' . $conn->error]);
            exit;
        }
        $stmt->bind_param("iii", $quantity, $id, $user_id);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Quantity updated']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Update error: ' . $stmt->error]);
        }
        $stmt->close();
    } elseif ($action === 'get') {
        $stmt = $conn->prepare("SELECT id, product_name, quantity, price FROM shopping_lists WHERE user_id = ?");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Preparation error: ' . $conn->error]);
            exit;
        }
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        $result = $stmt->get_result();
        $lists = [];
        while ($row = $result->fetch_assoc()) {
            $lists[] = $row;
        }
        echo json_encode(['success' => true, 'lists' => $lists]);
        $stmt->close();
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
$conn->close();
?>