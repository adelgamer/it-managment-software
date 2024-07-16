function formatDateTime() {
  // Create a new Date object
  const now = new Date();

  // Get date components
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = now.getFullYear();

  // Get time components
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format the date and time
  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Combine date and time
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  // Output the result
  return formattedDateTime;
}

function formatDate() {
  // Create a new Date object
  const now = new Date();

  // Get date components
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = now.getFullYear();

  // Format the date and time
  const formattedDate = `${day}/${month}/${year}`;

  // Output the result
  return formattedDate;
}

function formatTime() {
  // Create a new Date object
  const now = new Date();

  // Get time components
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format the and time
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Output the result
  return formattedTime;
}

function addServicePopUp() {
  const popUp = document.getElementById("add-service-popup");
  const display = popUp.style.display;
  if (display === "none") {
    popUp.style.display = "block";
  } else {
    popUp.style.display = "none";
  }
}
