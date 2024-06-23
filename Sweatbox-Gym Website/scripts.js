document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    // Validate form fields
    if (!name || !email || !password || !confirmPassword || !phone || !dob || !gender) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Perform further validation if needed (e.g., email format, password strength)

    // If validation passes
    alert('Registration successful');
    // You can then send the form data to the server or process it as needed
});
