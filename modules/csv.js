const fs = require("fs");

function exportCSV() {
  let csv = "";
  const rows = retreiveServicesCSV()
    .then((rows) => {
      console.log("Retrieved rows:", rows);
      rows.forEach((row) => {
        csv += ``;
      });

      fs.writeFileSync("data.csv", csv);
    })
    .catch((err) => {
      console.error("Error retrieving services:", err);
    });
}
