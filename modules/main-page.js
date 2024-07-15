function addServicePopUp() {
  const display = popUp.style.display;
  if (display === "none") {
    popUp.style.display = "block";
  } else {
    popUp.style.display = "none";
  }
}

const popUp = document.getElementById("add-service-pop-up");

document
  .getElementById("add-button")
  .addEventListener("click", addServicePopUp);

// document.addEventListener("click", (event) => {
//   const targetId = event.target.id;
//   if (targetId !== "add-service-pop-up" || targetId !== "add-button") {
//     popUp.style.display = "none";
//   }
// });

// popUp.addEventListener("keydown", (event) => {
//   if (event.key === "Escape" || event.key === 27) {
//     popUp.style.display = "none";
//   }
// });
