<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$mail = $_POST['email'];
$message = $_POST['mensaje'];

echo json_encode($nombre . $apellido . $mail . $message);

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $nombre . " " . $apellido . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'duran.chimal.gonzalo.1992@gmail.com';
$asunto = $nombre . " " . $apellido . ' se ha contactado contigo por medio de Mi-Portafolio';

mail($para, $asunto, utf8_decode($message), $header);
?>