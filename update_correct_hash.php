<?php
require_once 'config.php';

$password = 'password123';
$correctHash = password_hash($password, PASSWORD_DEFAULT);

echo "Correct hash for '$password': $correctHash\n";

try {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare('UPDATE users SET password_hash = ? WHERE id = 1');
    $stmt->execute([$correctHash]);
    echo "Hash updated successfully.\n";

    // Verify update
    $stmt = $pdo->prepare('SELECT password_hash FROM users WHERE id = 1');
    $stmt->execute();
    $row = $stmt->fetch();
    echo "Stored hash: " . $row['password_hash'] . "\n";
    echo "Verify: " . (password_verify($password, $row['password_hash']) ? 'true' : 'false') . "\n";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
