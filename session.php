<?php
error_reporting(E_ALL);
// Do not display PHP errors to the client; log them instead.
ini_set('display_errors', 0);
ini_set('log_errors', 1);

session_start();

function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

function getUserId() {
    return $_SESSION['user_id'] ?? null;
}

function logout() {
    session_destroy();
}
?>