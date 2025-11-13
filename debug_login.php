<?php
require_once 'config.php';
require_once 'auth.php';

$identifier = 'testuser';
$password = 'password123';

echo "Testing login with identifier: $identifier, password: $password\n";

$result = loginUser($identifier, $password);

echo "Result: " . json_encode($result) . "\n";

// Check database
try {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare('SELECT id, username, email, password_hash FROM users WHERE username = ? OR email = ?');
    $stmt->execute([$identifier, $identifier]);
    $user = $stmt->fetch();

    if ($user) {
        echo "User found: " . json_encode($user) . "\n";
        echo "Password verify: " . (password_verify($password, $user['password_hash']) ? 'true' : 'false') . "\n";
    } else {
        echo "User not found\n";
    }
} catch (PDOException $e) {
    echo "DB Error: " . $e->getMessage() . "\n";
}
?>
