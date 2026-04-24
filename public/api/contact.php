<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Methode niet toegestaan.']);
    exit;
}

$payload = json_decode((string) file_get_contents('php://input'), true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ongeldig verzoek.']);
    exit;
}

function field(array $payload, string $key): string
{
    return trim((string) ($payload[$key] ?? ''));
}

$name = field($payload, 'name');
$email = field($payload, 'email');
$message = field($payload, 'message');

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Naam, e-mail en bericht zijn verplicht.']);
    exit;
}

$labels = [
    'formType' => 'Form type',
    'name' => 'Naam',
    'email' => 'E-mail',
    'phone' => 'Telefoon',
    'origin' => 'Herkomst',
    'destination' => 'Bestemming',
    'service' => 'Dienst',
    'volume' => 'Volume',
    'message' => 'Bericht',
];

$lines = [];

foreach ($labels as $key => $label) {
    $value = field($payload, $key);

    if ($value !== '') {
        $lines[] = $label . ': ' . $value;
    }
}

$to = 'info@stormlogistics.nl';
$subject = 'Storm Logistics aanvraag van ' . $name;
$body = implode("\n", $lines);
$headers = [
    'From: Storm Logistics <info@stormlogistics.nl>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['error' => 'Bericht kon niet worden verzonden.']);
    exit;
}

echo json_encode(['ok' => true]);
