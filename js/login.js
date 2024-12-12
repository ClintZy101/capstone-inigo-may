// Function to handle the login form submission
async function loginUser(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Debug: Check if function is triggered
    console.log("Login form submitted");
  
    // Collect form data
    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value;
  
    // Debug: Log the collected data
    console.log("Collected Data:", { email, password });
  
    // Validate data
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      // Debug: Indicate API call start
      console.log("Sending login request to API...");
  
      // Send a POST request to the API endpoint
      const response = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      // Debug: Log the response status
      console.log("API Response Status:", response.status);
  
      // Handle the response
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
  
        // Notify the user
        alert(`Login successful. Welcome back, ${data.user.name}!`);
        // Optionally redirect the user to a dashboard or homepage
        window.location.href = "index.html";
      } else {
        const errorData = await response.json();
        console.error("Login error:", errorData);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  }
  
  // Attach the event listener to the login form
  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", loginUser);
    console.log("Login form event listener attached");
  } else {
    console.error("Login form not found in DOM.");
  }
  