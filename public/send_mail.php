<?php

// Add CORS headers to allow requests from the React app (dev or production)
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
    return ($environmentValue !== false && $environmentValue !== '')
        ? $environmentValue
        : ($privateConfig[$key] ?? '');
};

// Get JSON data from POST request
$data = json_decode(file_get_contents("php://input"), true);

if (!is_array($data)) {
    respond(400, ["status" => "error", "message" => "Invalid JSON request."]);
}

foreach (['businessName', 'contactName', 'phoneNumber', 'emailAddress', 'businessAddress', 'products'] as $requiredField) {
    if (!isset($data[$requiredField]) || !is_string($data[$requiredField]) || trim($data[$requiredField]) === '') {
        respond(400, ["status" => "error", "message" => "Please complete all required fields."]);
    }
}

if (!filter_var(trim($data['emailAddress']), FILTER_VALIDATE_EMAIL)) {
    respond(400, ["status" => "error", "message" => "Please provide a valid email address."]);
}

$captchaToken = isset($data['captchaToken']) && is_string($data['captchaToken'])
    ? trim($data['captchaToken'])
    : '';
if ($captchaToken === '' || strlen($captchaToken) > 4096) {
    respond(400, [
        "status" => "error",
        "code" => "captcha_failed",
        "message" => "Please complete the CAPTCHA before submitting your request.",
    ]);
}

$captchaSecret = $getConfigValue('RECAPTCHA_SECRET_KEY');
if ($captchaSecret === '') {
    error_log('GGS contact form requires RECAPTCHA_SECRET_KEY.');
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

respond(200, ["status" => "success", "message" => "CAPTCHA verified."]);
