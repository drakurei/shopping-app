<?php
// api_auth.php - API for user authentication (login/register)
// Requires PDO for database connection

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // For development, adjust for production
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection
try {
    $pdo = new PDO('mysql:host=localhost;dbname=shopping_app_db;charset=utf8', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $password = $data['password'];

    if (isset($data['register'])) {
        // Register new user
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['error' => 'Invalid email']);
            exit;
        }
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        try {
            $stmt = $pdo->prepare("INSERT INTO users (email, password_hash) VALUES (?, ?)");
            $stmt->execute([$email, $hashedPassword]);
            echo json_encode(['success' => true, 'message' => 'User registered']);
        } catch (PDOException $e) {
            echo json_encode(['error' => 'Email already exists']);
        }
    } else {
        // Login
        $stmt = $pdo->prepare("SELECT id, email, password_hash FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($user && password_verify($password, $user['password_hash'])) {
            // Start session or return token (for simplicity, return user data)
            echo json_encode(['success' => true, 'user' => ['id' => $user['id'], 'email' => $user['email']]]);
        } else {
            echo json_encode(['error' => 'Invalid credentials']);
        }
    }
} else {
    echo json_encode(['error' => 'Method not allowed']);
}
?>