<?php
require_once __DIR__ . '/config.php';

$name = '';
$email = '';
$subject = '';
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_validate($_POST['csrf_token'] ?? null)) {
        set_flash('error', 'Invalid form token. Please try again.');
        redirect('contact.php');
    }

    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');

    $emailValid = filter_var($email, FILTER_VALIDATE_EMAIL);
    if ($name === '' || !$emailValid || $message === '') {
        set_flash('error', 'Please provide your name, a valid email, and a message.');
    } else {
        set_flash('success', 'Thanks! Your message has been received.');
        $name = '';
        $email = '';
        $subject = '';
        $message = '';
    }
}

$pageTitle = 'Contact';
include __DIR__ . '/includes/header.php';
?>

<section class="content-card">
    <h2>Contact Us</h2>
    <p>Questions, feedback, or store support? Send us a message and we will get back to you.</p>
    <form method="post" novalidate>
        <?= csrf_field(); ?>
        <label for="contact-name">Name</label>
        <input type="text" id="contact-name" name="name" required value="<?= htmlspecialchars($name); ?>">

        <label for="contact-email">Email</label>
        <input type="email" id="contact-email" name="email" required value="<?= htmlspecialchars($email); ?>">

        <label for="contact-subject">Subject</label>
        <input type="text" id="contact-subject" name="subject" value="<?= htmlspecialchars($subject); ?>">

        <label for="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="5" required><?= htmlspecialchars($message); ?></textarea>

        <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
