<?php
include_once("bd connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    if(isset($request->name) && isset($request->sexe) && isset($request->color) && isset($request->breed) && isset($request->age)
        && isset($request->weight) && isset($request->description) && isset($request->genre) && isset($request->register_adopt))
    {
        $name = mysqli_real_escape_string($mysqli, trim($request->name));
        $sexe = mysqli_real_escape_string($mysqli, trim($request->sexe));
        $color = mysqli_real_escape_string($mysqli, trim($request->color));
        $breed = mysqli_real_escape_string($mysqli, trim($request->breed));
        $age = mysqli_real_escape_string($mysqli, trim($request->age));
        $weight = mysqli_real_escape_string($mysqli, trim($request->weight));
        $description = trim($request->description);
        $genre = mysqli_real_escape_string($mysqli, trim($request->genre));
        $register_adopt = mysqli_real_escape_string($mysqli, trim($request->register_adopt));
        // Insert data into the database
        $sql = "INSERT INTO pending (name,sexe,color,breed,age,weight,description,genre,register_adopt)
        VALUES ('$name','$sexe','$color','$breed','$age','$weight','$description','$genre',' $register_adopt')";      
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
                'name' => $name,
                'sexe' => $sexe,
                'color' => $color,
                'breed' => $breed,
                'age' => $age,
                'weight' => $weight,
                'description' => $description,
                'genre' => $genre,
             'register_adopt' => $register_adopt
            ];

            echo "Success: Data successfully inserted into the database.";
        }
    }
    else {
        echo "Error: All fields must be filled in.";
    }
}
?>
