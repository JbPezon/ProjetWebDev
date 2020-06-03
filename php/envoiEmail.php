<?php
if(isset($_POST['submit'])){
    $to = "emma.valenza@isen.yncrea.fr";
    $from = $_POST['i_email'];
    $prenom = $_POST['i_prenom'];
    $nom = $_POST['i_nom'];
    $telephone = $_POST['phone'];
    $typeClient = $_POST['lst_typeclient'];
    $jourNaissance = $_POST['num_jour'];
    $moisNaissance = $_POST['num_mois'];
    $anneeNaissance = $_POST['num_annee'];



    $subject = "Nouveau rendez-vous depuis le site";
    $message = $prenom . " " . $nom . " wrote the following:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;



    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $prenom . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
}
?>