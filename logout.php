<?php
require_once __DIR__ . '/config.php';

if (is_logged_in()) {
    logout_user();
    set_flash('success', 'You have been logged out.');
}

redirect('login.php');
?>
