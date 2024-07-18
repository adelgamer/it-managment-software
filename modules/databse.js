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

function retreiveDoneServices() {
  const sql = "SELECT * FROM services WHERE status = 'Done';";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log(rows);
    injectServicesHTML(rows);
  });
}

function searchService(keyword) {
  let sql;
  let params;

  if (activeTab === "All") {
    sql = `
      SELECT * FROM services 
      WHERE UPPER(CONCAT(service_title, description, customer_name, note)) LIKE ?;
    `;
    params = [`%${keyword.toUpperCase()}%`];
  } else {
    sql = `
      SELECT * FROM services 
      WHERE UPPER(CONCAT(service_title, description, customer_name, note)) LIKE ? 
      AND status = ?;
    `;
    params = [`%${keyword.toUpperCase()}%`, activeTab];
  }

  console.log(activeTab + " here");
  db.all(sql, params, (err, rows) => {
    if (err) {
      throw err;
    }
    injectServicesHTML(rows);
  });
}

function deleteService(id) {
  const sql = `DELETE FROM services WHERE id = ?`;
  db.run(sql, [id]);
  tabChooser(activeTab);
}

function saveEditedDescription(description, id) {
  // Detailed logging
  console.log(`Attempting to update description with id: ${id}`);
  console.log(`New description: ${description}`);

  // SQL query
  const sql = "UPDATE services SET description = ? WHERE id = ?;";

  // Executing the SQL query
  db.run(sql, [description, id], function (err) {
    if (err) {
      console.error("Error executing SQL query:", err.message);
      return;
    }

    // Logging the changes
    console.log("Update successful!");
    console.log(`Rows affected: ${this.changes}`);
  });
}

function saveEditedStatus(status, id) {
  console.log(`Attempting to update status with id: ${id}`);
  console.log(`New status: ${status}`);

  const sql = "UPDATE services SET status = ? WHERE id = ?;";

  db.run(sql, [status, id], function (err) {
    if (err) {
      console.error("Error executing SQL query:", err.message);
      return;
    }

    console.log("Update successful!");
    console.log(`Rows affected: ${this.changes}`);
  });
}

function saveEditedNote(note, id) {
  console.log(`Attempting to update note with id: ${id}`);
  console.log(`New note: ${note}`);

  const sql = "UPDATE services SET note = ? WHERE id = ?;";

  db.run(sql, [note, id], function (err) {
    if (err) {
      console.error("Error executing SQL query:", err.message);
      return;
    }

    console.log("Update successful!");
    console.log(`Rows affected: ${this.changes}`);
  });
}
