
<?php
header('Content-Type: application/json');

try {
    // Get POST data
    $input = file_get_contents('php://input');
    if (!$input) {
        throw new Exception('Data tidak diterima');
    }

    $data = json_decode($input, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Format data tidak valid');
    }

    // Validate required fields
    if (empty($data['name']) || empty($data['email']) || empty($data['topic']) || empty($data['message'])) {
        throw new Exception('Semua field harus diisi');
    }

    // Validate email
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Format email tidak valid');
    }

    // Clean the data
    $data['name'] = strip_tags(trim($data['name']));
    $data['email'] = strip_tags(trim($data['email']));
    $data['topic'] = strip_tags(trim($data['topic']));
    $data['message'] = strip_tags(trim($data['message']));

    $dbDir = 'database';
    $contactsFile = $dbDir . '/contacts.json';

    // Ensure database directory exists with proper permissions
    if (!file_exists($dbDir)) {
        if (!mkdir($dbDir, 0777, true)) {
            throw new Exception('Gagal membuat direktori database');
        }
        chmod($dbDir, 0777);
    }

    // Load existing contacts
    $contacts = [];
    if (file_exists($contactsFile)) {
        $contactsContent = file_get_contents($contactsFile);
        if ($contactsContent !== false) {
            $contacts = json_decode($contactsContent, true) ?? [];
        }
    }

    // Add timestamp
    $data['timestamp'] = date('Y-m-d H:i:s');

    // Add new contact
    $contacts[] = $data;

    // Save to file with proper permissions
    if (file_put_contents($contactsFile, json_encode($contacts, JSON_PRETTY_PRINT)) === false) {
        throw new Exception('Gagal menyimpan pesan ke database');
    }
    chmod($contactsFile, 0777);

    echo json_encode([
        'success' => true,
        'message' => 'Pesan berhasil dikirim'
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>
