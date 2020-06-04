<?php
$to = "jb.pezonchanut@gmail.com";
$from = $_POST['i_email'];
$prenom = $_POST['i_prenom'];
$nom = $_POST['i_nom'];
$telephone = $_POST['phone'];
$typeClient = $_POST['lst_typeclient'];
$jourNaissance = $_POST['num_jour'];
$moisNaissance = $_POST['num_mois'];
$anneeNaissance = $_POST['num_annee'];
$commentaire = $_POST['commentaires'];



$subject = "Nouveau rendez-vous depuis le site";
$message = $prenom . " " . $nom . " : " . $typeClient. "\n\n" . "Date de naissance : " .
    $jourNaissance . "/" .$moisNaissance . "/" . $anneeNaissance. "\n\n".
    "Num Telephone : ". $telephone . "\n\nCommentaire : ". $commentaire;
$headers = "From:" . $from;

$sent = mail($to,$subject,$message,$headers);


if ($sent) {

    ?><html>
    <head>
        <title>Thank You</title>
    </head>
    <body>
    <h1>Thank You</h1>
    <p>Thank you for your feedback.</p>
    </body>
    </html>
    <?php

} else {

    ?><html>
    <head>
        <title>Something went wrong</title>
    </head>
    <body>
    <h1>Something went wrong</h1>
    <p>We could not send your feedback. Please try again.</p>
    </body>
    </html>
    <?php

    // You can also use header('Location: thank_you.php'); to redirect to another page.
}
?>