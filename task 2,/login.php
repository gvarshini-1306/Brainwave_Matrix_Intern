<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Simulated credentials (replace with actual authentication logic)
    $valid_username = "user123";
    $valid_password = "password123";

    // Get input values from the form
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Check if the provided credentials match the valid credentials
    if ($username == $valid_username && $password == $valid_password) {
        // Successful login
        session_start(); // Start session if not already started
        $_SESSION["username"] = $username; // Store username in session
        header("Location: dashboard.php"); // Redirect to dashboard or another page
        exit();
    } else {
        // Invalid credentials
        $error_message = "Invalid username or password.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
</head>
<body>

<div class="login-container">
    <h2>Login</h2>
    <?php if (isset($error_message)) { ?>
        <div class="error"><?php echo $error_message; ?></div>
    <?php } ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
</div>

</body>
</html>
