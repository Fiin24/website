
<?php
header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$oldPassword = $data['oldPassword'];
$newPassword = $data['newPassword'];

// Read users.json
$users = json_decode(file_get_contents('database/users.json'), true);

// Find and update user password
$userFound = false;
foreach ($users as &$user) {
    if ($user['username'] === $username && $user['password'] === $oldPassword) {
        $user['password'] = $newPassword;
        $userFound = true;
        break;
    }
}

if ($userFound) {
    // Save updated users back to file
    file_put_contents('database/users.json', json_encode($users, JSON_PRETTY_PRINT));
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
}
?>
