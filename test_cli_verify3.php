<?php
$hash = '$2y$10$WOWjZNZ4E3P6Efkpr/US2.D3P7VphR0ToYJlPWuVy1jx7eC52OS6q';
$result = password_verify('password123', $hash);
echo $result ? 'true' : 'false';
echo "\nHash: $hash\n";
echo "Length: " . strlen($hash) . "\n";
?>
