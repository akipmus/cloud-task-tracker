// Finds the button in the HTML page
const button = document.getElementById("completeButton");

// Finds the status paragraph in the HTML page
const status = document.getElementById("status");

// Runs this function when the button is clicked
button.addEventListener("click", function () {
  // Changes the status message
  status.textContent = "Status: Step completed!";

  // Changes the button's label
  button.textContent = "Completed!";

  // Stops the button from being clicked again
  button.disabled = true;
});