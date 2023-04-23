<?php
include_once("bd connect.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if ($request === null) {
    http_response_code(400); // Bad Request
    echo json_encode(array("error" => "Invalid"));
    exit;
}
if(isset($postdata) && !empty($postdata))
{
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    $sql = "SELECT * FROM profile where username='$username' and password='$password'";
    if($result = mysqli_query($mysqli,$sql))
    {
        $row = mysqli_fetch_assoc($result);
        if($row) {
            // Retrieve the username value from the row
            $username = $row['username'];
            // Return a welcome message with the retrieved username
            echo json_encode(array("message" => "Welcome $username"));
        } else {
            // Return an error message if no matching rows found
            http_response_code(400); // Bad Request
            echo json_encode(array("error" => "Invalid username or password"));
        }
    }
    else
    {
        http_response_code(400); // Bad Request
    }
}
?>
