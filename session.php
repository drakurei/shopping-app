<?php
// session.php - Session management functions

require_once 'config.php';

/**
 * Starts a secure session if not already started.
 *
 * @return void
 */
function startSecureSession() {
    if (session_status() == PHP_SESSION_NONE) {
        // Set session cookie parameters for security
        $secure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $httponly = true;
        $samesite = 'Strict';

        session_set_cookie_params([
            'lifetime' => SESSION_LIFETIME,
            'path' => '/',
            'domain' => '',
            'secure' => false,
            'httponly' => $httponly,
            'samesite' => 'Lax'
        ]);

        session_start();
    }
}

/**
 * Destroys the current session and clears session data.
 *
 * @return void
 */
function destroySession() {
    if (session_status() == PHP_SESSION_ACTIVE) {
        // Clear session data
        $_SESSION = [];

        // Destroy session cookie
        if (ini_get('session.use_cookies')) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params['path'], $params['domain'],
                $params['secure'], $params['httponly']
            );
        }

        // Destroy session
        session_destroy();
    }
}

/**
 * Validates if a user is logged in by checking session data.
 *
 * @return bool True if user is logged in, false otherwise.
 */
function isLoggedIn() {
    startSecureSession();
    return isset($_SESSION['user_id']) && !empty($_SESSION['user_id']);
}

/**
 * Gets the current logged-in user's ID from session.
 *
 * @return int|null The user ID if logged in, null otherwise.
 */
function getCurrentUserId() {
    if (isLoggedIn()) {
        return (int) $_SESSION['user_id'];
    }
    return null;
}

/**
 * Regenerates session ID for security (e.g., after login).
 *
 * @return void
 */
function regenerateSessionId() {
    if (session_status() == PHP_SESSION_ACTIVE) {
        session_regenerate_id(true);
    }
}
?>
