// const fs = require("fs");

function exportCSV() {
  let csv = "";
  const rows = retreiveServicesCSV()
    .then((rows) => {
      console.log("Retrieved rows:", rows);
      rows.forEach((row) => {
        csv += `${row["id"]}, ${row["customer_name"]}, ${row["phone"]}, ${row["service_title"]}, ${row["service_type"]}, ${row["description"]}, ${row["status"]}, ${row["service_price"]}, ${row["price_received"]}, ${row["note"]}, ${row["date"]}, ${row["time"]}\n`;
      });

      fs.writeFileSync("data.csv", csv);
    })
    .catch((err) => {
      console.error("Error retrieving services:", err);
    });
}
