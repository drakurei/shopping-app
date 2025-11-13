<?php
// test_password.php - Test password hashing and verification

require_once 'config.php';

$password = 'password123';
$hash = password_hash($password, HASH_ALGO);

echo "Password: $password<br>";
echo "Hash: $hash<br>";

$verify = password_verify($password, $hash);
echo "Verification: " . ($verify ? 'Success' : 'Failed') . "<br>";

// Test with database hash
$dbHash = '$2y$10$LOCORMsqvG2PB9Gyc6U9nO1YZpykf7QWviFpnlOVIRGUrF8pMnoRe';
$verifyDb = password_verify($password, $dbHash);
echo "DB Hash Verification: " . ($verifyDb ? 'Success' : 'Failed') . "<br>";
?>
