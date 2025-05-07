<?php
require '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$consultant_id = $data['consultant_id'] ?? 0;
$farmer_name = $data['farmer_name'] ?? '';
$farmer_contact = $data['farmer_contact'] ?? '';
$preferred_time = $data['preferred_time'] ?? '';
$notes = $data['notes'] ?? '';

if ($consultant_id && $farmer_name && $preferred_time) {
    $stmt = $conn->prepare("INSERT INTO appointments (consultant_id, farmer_name, farmer_contact, preferred_time, notes) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("issss", $consultant_id, $farmer_name, $farmer_contact, $preferred_time, $notes);
    $stmt->execute();
    echo "Appointment booked.";
} else {
    echo "Missing required fields.";
}
?>
