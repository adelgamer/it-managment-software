const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./DB/database.db");

function insertService(data) {
  // const sql = prepareSQL(data);
  const sql =
    "INSERT INTO services (customer_name, phone, service_title, service_price, price_received, service_type, status, description, note, date, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
  console.log(sql);
  db.run(sql, data, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
}

function retreiveServices() {
  const sql = "SELECT * FROM services;";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log(rows);
    injectServicesHTML(rows);
  });
}

function retreiveWorkingServices() {
  const sql = "SELECT * FROM services WHERE status = 'Working on it';";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log(rows);
    injectServicesHTML(rows);
  });
}

function retreivePendingServices() {
  const sql = "SELECT * FROM services WHERE status = 'Pending';";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log(rows);
    injectServicesHTML(rows);
  });
}
