<?php
include_once("bd connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
   
    $username = trim($request->username);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email_adress = mysqli_real_escape_string($mysqli, trim($request->email_adress));
    $phone_num= trim($request->phone_num);
        
    // Vérifier si le mot de passe a au moins 8 caractères
    if(strlen($password) < 8){
        echo "Erreur : Le mot de passe doit avoir au moins 8 caractères.";
    } else {
        // Vérifier si l'e-mail existe déjà dans la base de données
        $email_adressExistsQuery = "SELECT * FROM user WHERE email_adress = '$email_adress'";
        $email_adressExistsResult = $mysqli->query($email_adressExistsQuery);
        if($email_adressExistsResult->num_rows > 0){
            echo "Erreur : Email déjà existant dans la base de données.";
        } else {
            // Insérer les données dans la base de données
            $sql = "INSERT INTO user (username,password,email_adress,phone_num) VALUES ('$username','$password','$email_adress','$phone_num')";
            if ($mysqli->query($sql) === TRUE) {
                $authdata = [
                    'username' => $username,
                    'password' => '',
                    'email_adress' => $email_adress,
                    'phone_num' => $phone_num
                ];
                echo "Succès : Données insérées avec succès dans la base de données.";
            } else {
                echo "Erreur : " . $mysqli->error;
            }
        }
    }
} else {
    echo "Erreur : Tous les champs doivent être remplis.";
}


?>
