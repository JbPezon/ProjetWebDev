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
    $commentaire = $_POST['area_precisions'];



    $subject = "Nouveau rendez-vous depuis le site";
    $message = $prenom . " " . $nom . " : " . $typeClient. "\n\n" . "Date de naissance : " .
        $jourNaissance . "/" .$moisNaissance . "/" . $anneeNaissance. "\n\n".
        "Num Telephone : ". $telephone . "\n\nCommentaire : ". $commentaire;
    $headers = "From:" . $from;




    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $prenom . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
}
?>