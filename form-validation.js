function validateForm() {
  // Form inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error display elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Subject validation
  if (subject === "") {
    subjectError.textContent = "Subject is required.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  // Password validation
//   if (password === "") {
//     passwordError.textContent = "Password is required.";
//     isValid = false;
//   } else if (password.length < 6) {
//     passwordError.textContent = "Password must be at least 6 characters.";
//     isValid = false;
//   }

  return isValid; // Prevents form submission if false
}

function validateEmail(email) {
  // Simple email pattern
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
}
