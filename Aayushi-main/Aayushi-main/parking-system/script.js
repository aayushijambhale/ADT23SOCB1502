document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit-btn');

    function validateForm() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if all fields are filled
        const isFormValid = name && emailPattern.test(email) && password.length >= 6;

        // Enable or disable the submit button
        submitBtn.disabled = !isFormValid;
    }

    // Add event listeners for input changes
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
});