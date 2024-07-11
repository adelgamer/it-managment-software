const fs = require("fs");

//This function format the date an time before logging it
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

//this function log a message into a text file an append the date an time prior the message
function log(message) {
  const text = formatDateTime() + "  " + message + "\n";
  fs.appendFileSync("./log.txt", text);
}

log("log system is loaded successfully");
