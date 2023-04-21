<?php
// retrieve form data
$username = $_POST['uname'];
$password = $_POST['psw'];

// check if the user exists
$users = file('accounts.txt', FILE_IGNORE_NEW_LINES);
foreach ($users as $user) {
    list($existing_username, $existing_password) = explode('|', $user);
    if ($username === $existing_username && $password === $existing_password) {
        header('Location: GameOfLife.html');
        exit;
    }
}
header('Location: error.html');
exit;
?>