const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./DB/database.db");

function prepareSQL(data) {
  let sql =
    "INSERT INTO services (customer_name, phone, service_title, service_price, price_received, service_type, status, description, note, date, time) VALUES (";
  let isFirstIteration = true;
  data.forEach((element) => {
    if (!isFirstIteration) {
      sql += ", '" + element + "'";
    } else {
      sql += "'" + element + "'";
      isFirstIteration = false;
    }
  });
  sql += ", '" + formatDate() + "', '" + formatTime() + "');";
  return sql;
}

function insertService(data) {
  const sql = prepareSQL(data);
  console.log(sql);
  db.run(sql, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
}
