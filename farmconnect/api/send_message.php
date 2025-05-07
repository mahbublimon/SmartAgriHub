<?php
require '../db.php';

$message = $_POST['message'] ?? '';

if (!empty($message)) {
    $stmt = $conn->prepare("INSERT INTO messages (message) VALUES (?)");
    $stmt->bind_param("s", $message);
    $stmt->execute();
    echo "Message saved.";
} else {
    echo "No message received.";
}
?>
