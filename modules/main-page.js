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

//event listner for search feild
document
  .getElementById("search-input")
  .addEventListener("keyup", getSearchInput);

//Event listenr for editing
document.getElementById("services").addEventListener("click", (event) => {
  const targetId = event.target.id;
  const CharsNum = separateCharsAndNumbers(targetId);

  console.log(CharsNum);
  //Handling delete
  if (CharsNum[0] === "delete-button-") {
    deleteService(CharsNum[1]);
    console.log(CharsNum);
  }

  //handling edit description
  if (CharsNum[0] === "description-") {
    event.target.innerHTML = `<textarea class='edit-description' id='edit-description-${CharsNum[1]}'>${event.target.innerHTML}</textarea>`;
    document
      .getElementById(`edit-description-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-description-${CharsNum[1]}`
          ).value;
          saveEditedDescription(value, CharsNum[1]);
          document.getElementById("description-" + CharsNum[1]).innerHTML =
            value;
          console.log(value);
        }
      });
  }

  //handling edit note
  if (CharsNum[0] === "note-") {
    event.target.innerHTML = `<textarea class='edit-note' id='edit-note-${CharsNum[1]}'>${event.target.innerHTML}</textarea>`;
    document
      .getElementById(`edit-note-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-note-${CharsNum[1]}`
          ).value;
          saveEditedNote(value, CharsNum[1]);
          document.getElementById("note-" + CharsNum[1]).innerHTML = value;
          console.log(value);
        }
      });
  }

  //Handling edit status
  if (CharsNum[0] === "status-") {
    event.target.innerHTML = `<select id='edit-status-${CharsNum[1]}' value='${event.target.value}'>
          <option>Pending</option>
          <option>Working on it</option>
          <option>Done</option>
        </select>`;
    document
      .getElementById(`edit-status-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-status-${CharsNum[1]}`
          ).value;
          saveEditedStatus(value, CharsNum[1]);
          document.getElementById("status-" + CharsNum[1]).innerHTML =
            "Status: " + value;
          console.log(value);
        }
      });
  }
});
