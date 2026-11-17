// Get HTML elements
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

// Add click event to button
messageButton.addEventListener("click", function () {
    message.textContent = "Hello! Your static website is working.";
});