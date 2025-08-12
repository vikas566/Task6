const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(element, message) {
  element.textContent = message;
  element.classList.add('show');
}

function hideError(element) {
  element.textContent = '';
  element.classList.remove('show');
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;

  // Reset errors
  hideError(nameError);
  hideError(emailError);
  hideError(messageError);
  successMessage.classList.remove('show');

  // Validate Name
  if (nameInput.value.trim() === '') {
    showError(nameError, 'Name is required.');
    valid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    showError(emailError, 'Email is required.');
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(emailError, 'Invalid email format.');
    valid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    showError(messageError, 'Message is required.');
    valid = false;
  }

  if (valid) {
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.classList.add('show');
    form.reset();
  }
});
