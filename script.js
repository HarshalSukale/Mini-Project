function toggleContent(postId) {
    const post = document.getElementById(postId);
    const preview = post.querySelector('.preview');
    const fullContent = post.querySelector('.full-content');
    const readMoreLink = post.querySelector('.read-more');

    if (fullContent.style.display === "none" || fullContent.style.display === "") {
        fullContent.style.display = "block";
        preview.style.display = "none";
        readMoreLink.textContent = "Show Less";
    } else {
        fullContent.style.display = "none";
        preview.style.display = "block";
        readMoreLink.textContent = "Read More";
    }
}

// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data (you can use this data to send to a server or process it as needed)
    const formData = new FormData(this);

    // Display a confirmation message
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const income = document.getElementById('income').value.trim();
    const age = document.getElementById('age').value.trim();
    const state = document.getElementById('state').value.trim();
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let errorMessage = '';

    // Validate Name
    if (name.length < 3) {
        isValid = false;
        errorMessage += 'Name must be at least 3 characters long.\n';
    }

    // Validate Email (HTML5 email validation will also apply)
    if (!validateEmail(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Validate Income
    if (isNaN(income) || income < 0) {
        isValid = false;
        errorMessage += 'Income must be a positive number.\n';
    }

    // Validate Age
    if (isNaN(age) || age < 18 || age > 100) {
        isValid = false;
        errorMessage += 'Age must be between 18 and 100.\n';
    }

    // Validate State
    if (state.length < 2) {
        isValid = false;
        errorMessage += 'State must be at least 2 characters long.\n';
    }

    // Validate Gender
    if (gender === '') {
        isValid = false;
        errorMessage += 'Please select a gender.\n';
    }

    // Validate Message
    if (message.length < 10) {
        isValid = false;
        errorMessage += 'Message must be at least 10 characters long.\n';
    }

    // If all validations pass
    if (isValid) {
        const responseMessage = document.getElementById('response-message');
        responseMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
        responseMessage.style.color = '#4CAF50';
        this.reset(); // Reset the form
    } else {
        alert(errorMessage); // Show error messages in an alert box
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
