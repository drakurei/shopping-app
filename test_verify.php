<?php
$password = 'password123';
$hash = '$2y$10$tZ9Ubxf0loQuvFaN7auYk.EayuYSG4nFqLE8RNPC6dkeuD4CntOxC';

echo "Password: $password\n";
echo "Hash: $hash\n";
echo "Verify: " . (password_verify($password, $hash) ? 'true' : 'false') . "\n";

// Generate new hash
$newHash = password_hash($password, PASSWORD_DEFAULT);
echo "New Hash: $newHash\n";
echo "Verify new: " . (password_verify($password, $newHash) ? 'true' : 'false') . "\n";
?>
