<?php
require_once 'config.php';

$password = 'password123';
$hash = password_hash($password, PASSWORD_DEFAULT);

echo "New hash: " . $hash . "\n";

try {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare('UPDATE users SET password_hash = ? WHERE id = 1');
    $stmt->execute([$hash]);
    echo "Hash updated successfully.\n";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
