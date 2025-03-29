
<?php
header('Content-Type: application/json');

$users = json_decode(file_get_contents('php://input'), true);
file_put_contents('database/users.json', json_encode($users, JSON_PRETTY_PRINT));

echo json_encode(['success' => true]);
?>
