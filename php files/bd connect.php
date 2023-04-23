<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Credential: true");
header("Access-Control-Allow-Headers: Origin, X_resquested_with, ,content_type, accept");
header("Access-Control-Allow-Methods: PUT , GET , POST , DELETE");
$servername = "localhost";
$username = "root";/*etait root change*/
$password = "";
$dbname = "petmatchdb";
$mysqli = new mysqli ($servername,$username,$password,$dbname,3307);
if($mysqli -> connect_error)
die('Error : ('.$mysqli -> connect_errno.')'.$mysqli -> connect_error);
?>