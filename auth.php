<?php
// auth.php - Authentication functions

require_once 'config.php';
require_once 'session.php';

/**
 * Registers a new user with username, email, and password.
 *
 * @param string $username The username (string).
 * @param string $email The email address (string).
 * @param string $password The plain text password (string).
 * @return array Associative array with 'success' (bool) and 'message' (string).
 */
function registerUser($username, $email, $password) {
    // Validate inputs
    if (empty($username) || empty($email) || empty($password)) {
        return ['success' => false, 'message' => 'All fields are required.'];
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ['success' => false, 'message' => 'Invalid email format.'];
    }
    if (strlen($password) < 8) {
        return ['success' => false, 'message' => 'Password must be at least 8 characters long.'];
    }

    try {
        $pdo = getDbConnection();

        // Check if username or email already exists
        $stmt = $pdo->prepare('SELECT id FROM users WHERE username = ? OR email = ?');
        $stmt->execute([$username, $email]);
        if ($stmt->fetch()) {
            return ['success' => false, 'message' => 'Username or email already exists.'];
        }

        // Hash password
        $passwordHash = password_hash($password, HASH_ALGO);

        // Insert new user
        $stmt = $pdo->prepare('INSERT INTO users (username, email, password_hash, created_at) VALUES (?, ?, ?, NOW())');
        $stmt->execute([$username, $email, $passwordHash]);

        return ['success' => true, 'message' => 'User registered successfully.'];
    } catch (PDOException $e) {
        error_log('Registration failed: ' . $e->getMessage());
        return ['success' => false, 'message' => 'Registration failed. Please try again.'];
    }
}

/**
 * Logs in a user with username/email and password.
 *
 * @param string $identifier The username or email (string).
 * @param string $password The plain text password (string).
 * @return array Associative array with 'success' (bool), 'message' (string), and optionally 'user_id' (int).
 */
function loginUser($identifier, $password) {
    // Validate inputs
    if (empty($identifier) || empty($password)) {
        return ['success' => false, 'message' => 'Username/email and password are required.'];
    }

    try {
        $pdo = getDbConnection();

        // Find user by username or email
        $stmt = $pdo->prepare('SELECT id, username, email, password_hash FROM users WHERE username = ? OR email = ?');
        $stmt->execute([$identifier, $identifier]);
        $user = $stmt->fetch();

        // Debug logging (remove in production)
        error_log('Login attempt for identifier: ' . $identifier);
        error_log('User found: ' . ($user ? 'yes' : 'no'));
        if ($user) {
            error_log('User ID: ' . $user['id']);
            error_log('Password hash exists: ' . (!empty($user['password_hash']) ? 'yes' : 'no'));
            $passwordValid = password_verify($password, $user['password_hash']);
            error_log('Password verification result: ' . ($passwordValid ? 'valid' : 'invalid'));
        }

        if (!$user) {
            error_log('Login failed: User not found');
            return ['success' => false, 'message' => 'Invalid credentials.'];
        }

        // Verify password
        if (!password_verify($password, $user['password_hash'])) {
            error_log('Login failed: Invalid password');
            return ['success' => false, 'message' => 'Invalid credentials.'];
        }

        // Start session and set user ID
        startSecureSession();
        $_SESSION['user_id'] = $user['id'];
        regenerateSessionId();

        error_log('Login successful for user ID: ' . $user['id']);
        return ['success' => true, 'message' => 'Login successful.', 'user_id' => $user['id']];
    } catch (PDOException $e) {
        error_log('Login failed with exception: ' . $e->getMessage());
        return ['success' => false, 'message' => 'Login failed. Please try again.'];
    }
}

/**
 * Logs out the current user.
 *
 * @return array Associative array with 'success' (bool) and 'message' (string).
 */
function logoutUser() {
    destroySession();
    return ['success' => true, 'message' => 'Logout successful.'];
}

/**
 * Validates the current session and user authentication.
 *
 * @return array Associative array with 'valid' (bool) and optionally 'user_id' (int).
 */
function validateSession() {
    if (isLoggedIn()) {
        return ['valid' => true, 'user_id' => getCurrentUserId()];
    }
    return ['valid' => false];
}
?>
