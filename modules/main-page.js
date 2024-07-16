const popUp = document.getElementById("add-service-popup");

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
