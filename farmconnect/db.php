<?php
$host = "localhost";
$user = "root";
$password = ""; // Default XAMPP password
$db = "farmconnect";

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
