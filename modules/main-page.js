const popUp = document.getElementById("add-service-popup");

//Event listner for add service button
document
  .getElementById("add-button")
  .addEventListener("click", addServicePopUp);

//Event listner for tabs
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

//event listner for search input
document
  .getElementById("search-input")
  .addEventListener("keyup", getSearchInput);

function handleEdit(feildEdited, id) {
  //handling edit description
  if (CharsNum[0] === feildEdited) {
    event.target.innerHTML = `<textarea id='edit-description-${CharsNum[1]}'>${event.target.innerHTML}</textarea>`;
    document
      .getElementById(`edit-feildEdited-${CharsNum[1]}`)
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
}

//Event listenr for editing services
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

  //Handling edit name
  if (CharsNum[0] === "name-") {
    event.target.innerHTML = `<input type='text' value='${event.target.innerHTML}' id='edit-name-${CharsNum[1]}'></textarea>`;
    document
      .getElementById(`edit-name-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-name-${CharsNum[1]}`
          ).value;
          saveEditedField("customer_name", value, CharsNum[1]);
          document.getElementById("name-" + CharsNum[1]).innerHTML = value;
          console.log(value);
        }
      });
  }

  //Handling edit title
  if (CharsNum[0] === "title-") {
    event.target.innerHTML = `<textarea id='edit-title-${CharsNum[1]}'>${event.target.innerHTML}</textarea>`;
    document
      .getElementById(`edit-title-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-title-${CharsNum[1]}`
          ).value;
          saveEditedField("service_title", value, CharsNum[1]);
          document.getElementById("title-" + CharsNum[1]).innerHTML = value;
          console.log(value);
        }
      });
  }

  //Handling edit phone
  if (CharsNum[0] === "phone-") {
    event.target.innerHTML = `<input type='text' id='edit-phone-${CharsNum[1]}' value='${event.target.innerHTML}'></input>`;
    document
      .getElementById(`edit-phone-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-phone-${CharsNum[1]}`
          ).value;
          saveEditedField("phone", value, CharsNum[1]);
          document.getElementById("phone-" + CharsNum[1]).innerHTML = value;
          console.log(value);
        }
      });
  }

  //Handling edit price
  if (CharsNum[0] === "price-") {
    event.target.innerHTML = `<input type='number' min='0' step='100' id='edit-price-${CharsNum[1]}' value='${event.target.innerHTML}'></input>`;
    document
      .getElementById(`edit-price-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-price-${CharsNum[1]}`
          ).value;
          saveEditedField("service_price", value, CharsNum[1]);
          document.getElementById("price-" + CharsNum[1]).innerHTML =
            "Price: " + value;
          console.log(value);
        }
      });
  }

  //Handling edit price received
  if (CharsNum[0] === "price-received-") {
    event.target.innerHTML = `<input type='number' step='100' id='edit-price-received-${CharsNum[1]}' value='${event.target.innerHTML}'></input>`;
    document
      .getElementById(`edit-price-received-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-price-received-${CharsNum[1]}`
          ).value;
          saveEditedField("price_received", value, CharsNum[1]);
          document.getElementById("price-received-" + CharsNum[1]).innerHTML =
            "Price received: " + value;
          console.log(value);
        }
      });
  }

  //Handling edit service type
  if (CharsNum[0] === "service-type-") {
    event.target.innerHTML = `<select id='edit-service-type-${CharsNum[1]}' value='${event.target.value}'>
          <option>Sell</option>
          <option>Repair</option>
          <option>Installation</option>
          <option>Upgrade</option>
          <option>Cleaning</option>
        </select>`;
    document
      .getElementById(`edit-service-type-${CharsNum[1]}`)
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const value = document.getElementById(
            `edit-service-type-${CharsNum[1]}`
          ).value;
          saveEditedField("service_type", value, CharsNum[1]);
          document.getElementById("service-type-" + CharsNum[1]).innerHTML =
            value;
          console.log(value);
        }
      });
  }
});

document.getElementById("export-button").addEventListener("click", () => {
  exportCSV();
});
