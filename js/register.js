// Function to handle the registration form submission
async function registerUser(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById('full-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Validate password and confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Construct the user data object
  const userData = {
    name,
    email,
    password,
  };

  try {
    // Send a POST request to the API endpoint
    const response = await fetch("http://localhost:5001/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Handle the response
    if (response.ok) {
      const data = await response.json();
      alert(`Registration successful: ${data.message}`);
      // Optionally redirect the user to a login page
      window.location.href = "acc-login.html";
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error registering user:", error);
    alert("An error occurred while registering. Please try again later.");
  }
}

// Attach the event listener to the form
const registerForm = document.querySelector(".register-form");
registerForm.addEventListener("submit", registerUser);
