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

function prepareHTML(row) {
  console.log(row);
  const html = `<div class='container-service'>
  <div class='container-service-body'>
    <!-- The body is divided into 3 vertical bodies -->
    <div class='body-1'>
      <div class='container-profile-name-date'>
        <div class='container-profile'><img src='./ressources/icons/boy.png' alt='' srcset=''></div>
        <div class='container-name-date'>
          <p class='customer-name'>${row["customer_name"]}</p>
          <p>${row["date"]} ${row["time"]}</p>
        </div>
      </div>
      <div class='container-description'>${row["description"]}</div>
    </div>
    <div class='body-2'>
      <p class='service-title'>${row["service_title"]}</p>
      <p>#${row["id"]}</p>
      <p>${row["phone"]}</p>
      <p>Status: ${row["status"]}</p>
      <p>Price: ${row["service_price"]}</p>
      <p>Price received: ${row["price_received"]}</p>
    </div>
    <div class='body-3'>
      <p class='service-status'>${row["service_type"]}</p>
      <p>${row["note"]}</p>
    </div>
  </div>
  <!-- The delete and edit buttons are here -->
  <div class='container-edit-delete'>
    <button id='edit-button-' class='service-buttons green-bg'>Edit</button>
    <button id='delete-button-' class='service-buttons red-bg'>Delete</button>
  </div>
</div>
`;
  return html;
}

function injectServicesHTML(services) {
  const list = document.getElementById("services");
  list.innerHTML = "";
  services.forEach((row) => {
    const html = prepareHTML(row);
    list.insertAdjacentHTML("afterbegin", html);
  });
}

function changeTabColor(tab) {
  const allTabs = document.querySelectorAll(".tabs-buttons");
  allTabs.forEach((Tab) => {
    Tab.classList.remove("active-tab");
    Tab.classList.add("inactive-tab");
  });
  document.getElementById(tab).classList.remove("inactive-tab");
  document.getElementById(tab).classList.add("active-tab");
}

function getSearchInput() {
  const searchKeyword = document.getElementById("search-input").value;
  console.log(searchKeyword);
  search = searchKeyword;
  searchService(searchKeyword);
}
