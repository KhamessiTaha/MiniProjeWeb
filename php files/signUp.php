<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "petmatchdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get data from the signup form
$phoneNumber = $_POST["phoneNumber"];
$userName = $_POST["userName"];
$email = $_POST["email"];
$password = $_POST["password"];

// Insert data into the user table
$sql = "INSERT INTO user (username, email_adress, password,phone_num)
VALUES ('$userName', '$email', '$password','$phoneNumber')";

if ($conn->query($sql) === TRUE) {
  echo "New user created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>