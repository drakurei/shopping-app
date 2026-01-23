<?php
require_once __DIR__ . '/../config.php';

header('Content-Type: application/json; charset=utf-8');

if (!is_logged_in()) {
    echo json_encode(['ok' => false, 'count' => 0]);
    exit;
}

$userId = (int) ($_SESSION['user_id'] ?? 0);
$count = $userId > 0 ? cart_item_count($userId) : 0;

echo json_encode(['ok' => true, 'count' => $count]);
