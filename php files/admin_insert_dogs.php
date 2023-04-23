<?php
include_once("bd connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    if(isset($request->name) && isset($request->sexe) && isset($request->color) && isset($request->breed) && isset($request->age)
        && isset($request->weight) && isset($request->description) && isset($request->genre))
    {
        $name = mysqli_real_escape_string($mysqli, trim($request->name));
        $sexe = mysqli_real_escape_string($mysqli, trim($request->sexe));
        $color = mysqli_real_escape_string($mysqli, trim($request->color));
        $breed = mysqli_real_escape_string($mysqli, trim($request->breed));
        $age = mysqli_real_escape_string($mysqli, trim($request->age));
        $weight = mysqli_real_escape_string($mysqli, trim($request->weight));
        $description = trim($request->description);
        $genre = mysqli_real_escape_string($mysqli, trim($request->genre));
        if(strlen($genre) =='dog'){
           // echo "Erreur : Le mot de passe doit avoir au moins 8 caractères.";
        
        // Insert data into the database
        $sql = "INSERT INTO cats (name,sexe,color,breed,age,weight,description,genre)
        VALUES ('$name','$sexe','$color','$breed','$age','$weight','$description','$genre')";      
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
                'name' => $name,
                'sexe' => $sexe,
                'color' => $color,
                'breed' => $breed,
                'age' => $age,
                'weight' => $weight,
                'description' => $description,
                'genre' => $genre

            ]; }

            echo "Success: Data successfully inserted into the database.";
        }
        else{
            $sql = "INSERT INTO dogs (name,sexe,color,breed,age,weight,description,genre)
        VALUES ('$name','$sexe','$color','$breed','$age','$weight','$description','$genre')";      
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
                'name' => $name,
                'sexe' => $sexe,
                'color' => $color,
                'breed' => $breed,
                'age' => $age,
                'weight' => $weight,
                'description' => $description,
                'genre' => $genre
 
            ]; }
            echo "Success: Data successfully inserted into the database.";

            }
        }
    }
    else {
        echo "Error: All fields must be filled in.";
    }

?>
