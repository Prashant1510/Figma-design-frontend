/*========== menu icon navbar ==========*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//  ===============for the form validation and console the data==============
document
  .getElementById("register-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form submission

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic validation
    if (firstName === "") {
      alert("First Name is required");
      return;
    }

    if (lastName === "") {
      alert("Last Name is required");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid Email");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert("Please enter a valid Phone Number (10 digits)");
      return;
    }

    if (password === "") {
      alert("Password is required");
      return;
    }

    // If all fields are valid, consle log the information
    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: email,
      password: password,
    };

    console.log(formData);

    // Clear the input fields after successful submission
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("password").value = "";
  });

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone number validation function (10 digits)
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}
