<?php
if(isset($_POST['email'])) {
    $email_to = "duran.chimal.gonzalo.1992@gmail.com";
    $email_subject = "Contacto desde portafolio con GitHub";

/*$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$mail = $_POST['email'];
$message = $_POST['mensaje'];*/

if(!isset($_POST['nombre']) ||
!isset($_POST['apellido']) ||
!isset($_POST['email']) ||
!isset($_POST['mensaje']) || {

    echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
    echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
    die();
    }
    
    $email_message = "Detalles del formulario de contacto:\n\n";
    $email_message .= "Nombre: " . $_POST['nombre'] . "\n";
    $email_message .= "Apellido: " . $_POST['apellido'] . "\n";
    $email_message .= "E-mail: " . $_POST['email'] . "\n";
    $email_message .= "Mensaje: " . $_POST['mensaje'] . "\n\n";
    
    // Ahora se envía el e-mail usando la función mail() de PHP
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
    
    echo "¡El formulario se ha enviado con éxito!";
    }
?>