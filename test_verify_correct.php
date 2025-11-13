<?php
$password = 'password123';
$hash = '$2y$10$WOWjZNZ4E3P6Efkpr/US2.D3P7VphR0ToYJlPWuVy1jx7eC52OS6q';

echo "Password: $password\n";
echo "Hash: $hash\n";
echo "Verify: " . (password_verify($password, $hash) ? 'true' : 'false') . "\n";
?>
