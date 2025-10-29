<?php
error_reporting(E_ALL);
// Disable display of PHP errors to the client (send to logs instead)
ini_set('display_errors', 0);
ini_set('log_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'shopping-app-db';

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Erreur DB: ' . $conn->connect_error]);
    exit;
}
?>