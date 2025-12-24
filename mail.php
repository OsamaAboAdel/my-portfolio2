<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

function respond(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond([
        'code' => false,
        'err' => 'Invalid request method.',
    ], 405);
}

$to = getenv('PORTFOLIO_CONTACT_TO');
if (!is_string($to) || trim($to) === '') {
    $to = 'algumaeiosama@gmail.com';
}

$name = trim((string)($_POST['contact-name'] ?? ''));
$phone = trim((string)($_POST['contact-phone'] ?? ''));
$email = trim((string)($_POST['contact-email'] ?? ''));
$subject = trim((string)($_POST['subject'] ?? ''));
$message = trim((string)($_POST['contact-message'] ?? ''));

$name = preg_replace('/\s+/u', ' ', $name) ?? '';
$phone = preg_replace('/\s+/u', ' ', $phone) ?? '';
$subject = preg_replace('/\s+/u', ' ', $subject) ?? '';

if ($name === '') {
    respond(['code' => false, 'field' => 'contact-name', 'err' => 'Name is required.']);
}
if (mb_strlen($name) > 100) {
    respond(['code' => false, 'field' => 'contact-name', 'err' => 'Name is too long.']);
}

if ($email === '') {
    respond(['code' => false, 'field' => 'contact-email', 'err' => 'Email is required.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(['code' => false, 'field' => 'contact-email', 'err' => 'Please enter a valid email address.']);
}

if ($subject === '') {
    respond(['code' => false, 'field' => 'subject', 'err' => 'Subject is required.']);
}
if (mb_strlen($subject) > 200) {
    respond(['code' => false, 'field' => 'subject', 'err' => 'Subject is too long.']);
}

if ($message === '') {
    respond(['code' => false, 'field' => 'contact-message', 'err' => 'Message is required.']);
}
if (mb_strlen($message) > 5000) {
    respond(['code' => false, 'field' => 'contact-message', 'err' => 'Message is too long.']);
}

$serverName = (string)($_SERVER['SERVER_NAME'] ?? 'localhost');
$serverName = preg_replace('/[^a-z0-9\.-]/i', '', $serverName) ?: 'localhost';

$emailSubject = '[Portfolio] ' . $subject;
$emailBody = "New message from your portfolio contact form:\n\n";
$emailBody .= "Name: {$name}\n";
$emailBody .= "Email: {$email}\n";
if ($phone !== '') {
    $emailBody .= "Phone: {$phone}\n";
}
$emailBody .= "\nMessage:\n{$message}\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Portfolio Contact <no-reply@' . $serverName . '>',
    'Reply-To: ' . $email,
];

$sent = @mail($to, $emailSubject, $emailBody, implode("\r\n", $headers));

if (!$sent) {
    error_log('mail.php: mail() returned false');
    respond([
        'code' => false,
        'err' => 'Server could not send the email. Please try again later.',
    ], 500);
}

respond([
    'code' => true,
    'success' => 'Your message has been sent successfully.',
]);
