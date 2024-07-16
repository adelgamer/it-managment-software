// const { addServicePopUp } = require("./modules/main-page.js");

//this function get the data of all the inputs
function getAddFormInput() {
  const inputs = document.querySelectorAll(["input", "select", "textarea"]);
  const allInputsValues = [];
  inputs.forEach((element) => {
    allInputsValues.push(element.value);
  });
  allInputsValues.pop();
  console.log(allInputsValues);
  insertService(allInputsValues);
  cleanInputs(inputs);
}

function cleanInputs(inputs) {
  inputs.forEach((element) => {
    element.value = "";
  });
  inputs[3].value = 0;
  inputs[4].value = 0;
  inputs[5].value = "Sell";
  inputs[6].value = "Pending";
  addServicePopUp();
}

function getSearchInput() {
  const searchKeyword = document.getElementById("search-input").value;
  console.log(searchKeyword);
}

document.getElementById("save").addEventListener("click", getAddFormInput);
document
  .getElementById("search-input")
  .addEventListener("keyup", getSearchInput);
