<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Accept, Origin, X-Requested-With');

// Configuration
$to_email = 'sebastian.pinilla.arcila@gmail.com'; // Replace with your email address
$subject = 'Form Submission';

// Get the form data
$nombre = $_POST['introducir_nombre'];
$email = $_POST['introducir_email'];
$telefono = $_POST['introducir_telefono'];
$address = $_POST['introducir_address'];
$asunto = $_POST['introducir_asunto'];
$mensaje = $_POST['introducir_mensaje'];
$archivo = $_FILES['introducir_archivos'];

// Create a message body
$message = "Nombre: $nombre\n";
$message .= "Email: $email\n";
$message .= "Teléfono: $telefono\n";
$message .= "Dirección: $address\n";
$message .= "Asunto: $asunto\n";
$message .= "Mensaje: $mensaje\n";

// Check if a file was uploaded
if ($archivo['size'] > 0) {
    $message .= "Archivo: " . $archivo['name'] . "\n";
    $file_tmp = $archivo['tmp_name'];
    $file_name = $archivo['name'];
    $file_type = $archivo['type'];
    $file_size = $archivo['size'];
}

// Send the email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"_boundary\"\r\n";

$message .= "--_boundary\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$message .= $message . "\r\n";

if (isset($file_tmp)) {
    $message .= "--_boundary\r\n";
    $message .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n\r\n";
    $message .= chunk_split(base64_encode(file_get_contents($file_tmp))) . "\r\n";
}

$message .= "--_boundary--\r\n";

mail($to_email, $subject, $message, $headers);

// Redirect to a thank-you page or display a success message
header('Location: thank-you.html');
exit;
?>