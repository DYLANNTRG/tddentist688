function validateName(name) {
  return /^[a-zA-ZÀ-Ỹà-ỹ\s]+$/.test(name);
}

function validateEmail(email) {
  // Update the email validation regex to not allow special characters
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function submitForm() {
  // Get form elements
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var agreeCheckbox = document.getElementById('agreeCheckbox');
  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var checkboxError = document.getElementById('checkboxError');

  // Reset previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  checkboxError.textContent = "";

  // Check if name input is empty
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Vui lòng nhập Họ và Tên.';
  } else if (!validateName(nameInput.value.trim())) {
    nameError.textContent = 'Họ và Tên chỉ được chứa chữ cái, dấu cách và dấu thanh.';
  }

  // Check if email input is empty
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Vui lòng nhập Email.';
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
  }

  // Validate checkbox
  if (!agreeCheckbox.checked) {
    checkboxError.textContent = 'Vui lòng đồng ý nhận email từ TD Dentist.';
  }

  // Check if any errors exist
  var hasErrors = nameError.textContent || emailError.textContent || checkboxError.textContent;

  if (!hasErrors) {
    // If there are no errors, add the "clicked" class to the button
    document.querySelector('.submit-button').classList.add('clicked');
  }
}