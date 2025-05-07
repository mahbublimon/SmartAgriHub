<?php
require '../db.php';

$targetDir = "../uploads/images/";
$filename = basename($_FILES["file"]["name"]);
$targetFile = $targetDir . $filename;

if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
    $stmt = $conn->prepare("INSERT INTO uploads (filename) VALUES (?)");
    $stmt->bind_param("s", $filename);
    $stmt->execute();
    echo "Image uploaded.";
} else {
    echo "Failed to upload.";
}
?>
