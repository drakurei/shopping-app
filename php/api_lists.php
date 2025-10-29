<?php
header('Content-Type: application/json');
session_start();

// Vérifie session
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'Not logged in']);
    exit;
}

$userId = $_SESSION['user_id'];

// Récupère listes
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->prepare("SELECT * FROM shopping_lists WHERE user_id = ?");
    $stmt->execute([$userId]);
    echo json_encode($stmt->fetchAll());
}

// Ajoute liste
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO shopping_lists (user_id, items) VALUES (?, ?)");
    $stmt->execute([$userId, json_encode($data['items'])]);
    echo json_encode(['success' => true]);
}
?>