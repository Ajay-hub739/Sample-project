<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

function respond($statusCode, $payload) {
    http_response_code($statusCode);
    echo json_encode($payload);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ["status" => "error", "message" => "Method not allowed."]);
}

$privateConfig = [];
$privateConfigPath = dirname(__DIR__) . '/ggs-private-config.php';
if (is_file($privateConfigPath)) {
    $loadedConfig = require $privateConfigPath;
    if (!is_array($loadedConfig)) {
        error_log('GGS private configuration must return an array.');
        respond(500, ["status" => "error", "message" => "The contact form is not configured correctly."]);
    }
    $privateConfig = $loadedConfig;
}

$getConfigValue = function ($key) use ($privateConfig) {
    $environmentValue = getenv($key);
    if ($environmentValue !== false && $environmentValue !== '') {
        return $environmentValue;
    }
    return $privateConfig[$key] ?? '';
};

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);
if (!is_array($data)) {
    respond(400, ["status" => "error", "message" => "Invalid JSON request."]);
}

$requiredFields = [
    'businessName',
    'contactName',
    'phoneNumber',
    'emailAddress',
    'businessAddress',
    'products',
];
$formValues = [];
foreach ($requiredFields as $field) {
    if (!isset($data[$field]) || !is_string($data[$field]) || trim($data[$field]) === '') {
        respond(400, ["status" => "error", "message" => "Please complete all required fields."]);
    }
    $formValues[$field] = trim($data[$field]);
}

$message = isset($data['message']) && is_string($data['message']) ? trim($data['message']) : '';
$captchaToken = isset($data['captchaToken']) && is_string($data['captchaToken'])
    ? trim($data['captchaToken'])
    : '';

if (!filter_var($formValues['emailAddress'], FILTER_VALIDATE_EMAIL)) {
    respond(400, ["status" => "error", "message" => "Please provide a valid email address."]);
}
if ($captchaToken === '' || strlen($captchaToken) > 4096) {
    respond(400, [
        "status" => "error",
        "code" => "captcha_failed",
        "message" => "Please complete the CAPTCHA before submitting your request.",
    ]);
}

$captchaSecret = $getConfigValue('RECAPTCHA_SECRET_KEY');
$smtpUsername = $getConfigValue('SMTP_USERNAME');
$smtpPassword = $getConfigValue('SMTP_PASSWORD');
if ($captchaSecret === '' || $smtpUsername === '' || $smtpPassword === '') {
    error_log('GGS contact form requires RECAPTCHA_SECRET_KEY, SMTP_USERNAME, and SMTP_PASSWORD.');
    respond(503, ["status" => "error", "message" => "The contact form is temporarily unavailable."]);
}
if (!function_exists('curl_init')) {
    error_log('PHP cURL extension is required for CAPTCHA verification.');
    respond(503, ["status" => "error", "message" => "CAPTCHA verification is temporarily unavailable."]);
}

$curl = curl_init('https://www.google.com/recaptcha/api/siteverify');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'secret' => $captchaSecret,
        'response' => $captchaToken,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ]),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 10,
]);
$verificationResponse = curl_exec($curl);
$curlError = curl_error($curl);
$httpStatus = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

if ($verificationResponse === false || $httpStatus < 200 || $httpStatus >= 300) {
    error_log('Google reCAPTCHA verification request failed: ' . $curlError);
    respond(503, ["status" => "error", "message" => "CAPTCHA verification is temporarily unavailable. Please try again."]);
}

$verification = json_decode($verificationResponse, true);
if (!is_array($verification) || empty($verification['success'])) {
    respond(400, [
        "status" => "error",
        "code" => "captcha_failed",
        "message" => "CAPTCHA verification failed. Please try again.",
    ]);
}

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$escapeHtml = function ($value) {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};
$businessName = $escapeHtml($formValues['businessName']);
$contactName = $escapeHtml($formValues['contactName']);
$phoneNumber = $escapeHtml($formValues['phoneNumber']);
$emailAddress = $escapeHtml($formValues['emailAddress']);
$businessAddress = $escapeHtml($formValues['businessAddress']);
$products = $escapeHtml($formValues['products']);
$messageBody = $escapeHtml($message);

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUsername;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom($smtpUsername, 'GGS Utilities Website');
    $mail->addAddress('chandubilla050@gmail.com');
    $mail->addAddress('info@ggsutilities.com');
    $mail->addReplyTo($formValues['emailAddress'], $formValues['contactName']);

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission from ' . $contactName;

    $body = "
    <h2>New Contact Form Submission</h2>
    <table border='1' cellpadding='10' cellspacing='0'>
        <tr>
            <th>Business Name</th>
            <td>{$businessName}</td>
        </tr>
        <tr>
            <th>Contact Name</th>
            <td>{$contactName}</td>
        </tr>
        <tr>
            <th>Phone Number</th>
            <td>{$phoneNumber}</td>
        </tr>
        <tr>
            <th>Email Address</th>
            <td>{$emailAddress}</td>
        </tr>
        <tr>
            <th>Business Address</th>
            <td>{$businessAddress}</td>
        </tr>
        <tr>
            <th>Products of Interest</th>
            <td>{$products}</td>
        </tr>
        <tr>
            <th>Message</th>
            <td>" . nl2br($messageBody) . "</td>
        </tr>
    </table>
    ";

    $mail->Body = $body;
    $mail->AltBody = strip_tags(str_replace(['<br>', '</tr>', '</td>'], ["\n", "\n", "\t"], $body));

    $mail->send();
    respond(200, ["status" => "success", "message" => "Thank you for sending the mail"]);
} catch (Exception $e) {
    error_log('Contact form email delivery failed: ' . $mail->ErrorInfo);
    respond(500, ["status" => "error", "message" => "Message could not be sent. Please try again later."]);
}
