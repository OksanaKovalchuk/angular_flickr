<php
error_reporint(E_ALL);
ini_set('display errors', 1);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'http://www/google.com')
