var mysql = require("mysql");

var con = mysql.createConnection({
  host: "192.34.62.4", // Host del database
  user: "cE4yGn3dCjua", // Userna1me del database
  password: "A5twXYw0rWbflCv7", // Password del database
  database: "masstime-wp-TxkNuiUZ",
  debug: true,
});

con.connect(function (err) {
  console.log("Connected! ");
  console.log(err);
});
