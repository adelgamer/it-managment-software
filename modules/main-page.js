const popUp = document.getElementById("add-service-popup");

document
  .getElementById("add-button")
  .addEventListener("click", addServicePopUp);
document.getElementById("container-tabs").addEventListener("click", (event) => {
  const targetId = event.target.id;

  console.log(targetId);

  switch (targetId) {
    case "all-tab":
      retreiveServices();
      activeTab = "All";
      break;
    case "working-tab":
      retreiveWorkingServices();
      activeTab = "Working on it";
      break;
    case "pending-tab":
      retreivePendingServices();
      activeTab = "Pending";
      break;
    case "done-tab":
      retreiveDoneServices();
      activeTab = "Done";
      break;
    default:
      retreiveServices();
      activeTab = "All";
      break;
  }
  changeTabColor(targetId);
});

document
  .getElementById("search-input")
  .addEventListener("keyup", getSearchInput);
