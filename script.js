const form = document.getElementById("contactForm");
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");

messageBox.addEventListener("input", function () {
  charCount.textContent = messageBox.value.length;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "none";
  successMessage.textContent = "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  } else if (message.length < 20) {
    document.getElementById("messageError").textContent = "Message must be at least 20 characters.";
    isValid = false;
  }

  if (isValid) {
    successMessage.style.display = "block";
    successMessage.textContent = `Thank you, ${name}! Your message has been submitted successfully.`;

    form.reset();
    charCount.textContent = "0";
  }
});

form.addEventListener("reset", function () {
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").style.display = "none";
  charCount.textContent = "0";
});