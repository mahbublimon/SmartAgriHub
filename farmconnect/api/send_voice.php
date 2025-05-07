<?php
require '../db.php';

$targetDir = "../uploads/voice/";
$filename = basename($_FILES["file"]["name"]);
$targetFile = $targetDir . $filename;

if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
    $stmt = $conn->prepare("INSERT INTO voice_messages (filename) VALUES (?)");
    $stmt->bind_param("s", $filename);
    $stmt->execute();
    echo "Voice uploaded.";
} else {
    echo "Failed to upload.";
}
?>
