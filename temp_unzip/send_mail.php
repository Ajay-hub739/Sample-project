<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Add CORS headers to allow requests from the React app (dev or production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Get JSON data from POST request
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data provided."]);
    exit();
}

$businessName = htmlspecialchars($data['businessName'] ?? '');
$contactName = htmlspecialchars($data['contactName'] ?? '');
$phoneNumber = htmlspecialchars($data['phoneNumber'] ?? '');
$emailAddress = htmlspecialchars($data['emailAddress'] ?? '');
$businessAddress = htmlspecialchars($data['businessAddress'] ?? '');
$products = htmlspecialchars($data['products'] ?? '');
$messageBody = htmlspecialchars($data['message'] ?? '');

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'raiseupdigi@gmail.com';
    $mail->Password   = 'fbhf ryka hhmt rrsp'; // App password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // or ENCRYPTION_STARTTLS with port 587
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('raiseupdigi@gmail.com', 'GGS Utilities Website');
    $mail->addAddress('chandubilla050@gmail.com');
    $mail->addAddress('pavanprabha800@gmail.com');
    $mail->addReplyTo($emailAddress, $contactName);

    // Content
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

    $mail->Body    = $body;
    $mail->AltBody = strip_tags(str_replace(['<br>', '</tr>', '</td>'], ["\n", "\n", "\t"], $body));

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Thank you for sending the mail"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
