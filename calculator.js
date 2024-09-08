// script.js

// Function to calculate tax savings
function calculateSavings() {
    const incomeInput = document.getElementById('income');
    const savingsOutput = document.getElementById('savings');

    // Get the income value
    const income = parseFloat(incomeInput.value);

    // Simple calculation for estimated savings (10% of income)
    if (!isNaN(income) && income > 0) {
        const estimatedSavings = income * 0.1; // Assuming a 10% saving
        savingsOutput.textContent = `Your Estimated Savings: ₹${estimatedSavings.toFixed(2)}`;
    } else {
        savingsOutput.textContent = 'Please enter a valid income.';
    }
}

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Here you can add the logic to send the form data to a server
    alert(`Message sent from ${nameInput.value} (${emailInput.value}): ${messageInput.value}`);

    // Clear the form
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}

// Attach event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Calculate savings button
    const calculateButton = document.querySelector('button');
    calculateButton.addEventListener('click', calculateSavings);

    // Contact form submission
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', handleContactForm);
});