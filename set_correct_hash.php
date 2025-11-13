<?php
require_once 'config.php';

$correctHash = '$2y$10$tZ9Ubxf0loQuvFaN7auYk.EayuYSG4nFqLE8RNPC6dkeuD4CntOxC';

try {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare('UPDATE users SET password_hash = ? WHERE id = 1');
    $stmt->execute([$correctHash]);
    echo "Hash updated successfully to: $correctHash\n";

    // Verify
    $stmt = $pdo->prepare('SELECT password_hash FROM users WHERE id = 1');
    $stmt->execute();
    $row = $stmt->fetch();
    echo "Stored hash: " . $row['password_hash'] . "\n";
    echo "Length: " . strlen($row['password_hash']) . "\n";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>
