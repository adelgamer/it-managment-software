//this function get the data of all the inputs feilds in add service screen
function getAddFormInput() {
  //Getting all the inputs in an array named inputs
  const inputs = document.querySelectorAll(["input", "select", "textarea"]);
  //Appending all the inputs values in an array named allInputsValues
  const allInputsValues = [];
  inputs.forEach((element) => {
    allInputsValues.push(element.value);
  });
  allInputsValues.pop();
  //Adding time and date to the array
  allInputsValues.push(formatDate());
  allInputsValues.push(formatTime());

  //logging
  log("Service added: " + allInputsValues.toString());
  //Inserting the service into the database
  insertService(allInputsValues);
  //Retreiving services to refresh
  retreiveServices();
  //Cleaning add service inputs  and hiding it for next addition
  cleanInputs(inputs);
}

//Cleans the inputs of add service pop up
function cleanInputs(inputs) {
  inputs.forEach((element) => {
    element.value = "";
  });
  inputs[3].value = 0;
  inputs[4].value = 0;
  inputs[5].value = "Sell";
  inputs[6].value = "Pending";
  //Hiding the add service pop up
  addServicePopUp();
}

//event listener for save button
document.getElementById("save").addEventListener("click", getAddFormInput);
