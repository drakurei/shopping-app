<?php
$hash = password_hash('password123', PASSWORD_DEFAULT);
echo $hash . PHP_EOL;
echo password_verify('password123', $hash) ? 'true' : 'false';
?>
