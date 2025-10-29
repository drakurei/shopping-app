<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'config.php';
require_once 'session.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if ($action === 'register') {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Erreur préparation: ' . $conn->error]);
            exit;
        }
        $stmt->bind_param("sss", $username, $email, $password);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Inscription réussie']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Erreur inscription: ' . $stmt->error]);
        }
        $stmt->close();
    } elseif ($action === 'login') {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
        if (!$stmt) {
            echo json_encode(['success' => false, 'message' => 'Erreur préparation: ' . $conn->error]);
            exit;
        }
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($row = $result->fetch_assoc()) {
            if (password_verify($password, $row['password'])) {
                $_SESSION['user_id'] = $row['id'];
                echo json_encode(['success' => true, 'message' => 'Connexion réussie']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Mot de passe incorrect']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Utilisateur non trouvé']);
        }
        $stmt->close();
    } elseif ($action === 'logout') {
        logout();
        echo json_encode(['success' => true, 'message' => 'Déconnexion réussie']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
}
$conn->close();
?>