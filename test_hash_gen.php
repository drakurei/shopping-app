<?php
$password = 'password123';
$hash = password_hash($password, PASSWORD_DEFAULT);
echo "Generated hash for '$password': $hash\n";
echo "Length: " . strlen($hash) . "\n";
echo "Verify: " . (password_verify($password, $hash) ? 'true' : 'false') . "\n";
?>
