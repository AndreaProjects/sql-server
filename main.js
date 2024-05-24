const express = require("express");
var mysql = require("mysql");
const app = express();
app.use(express.json());

var con = mysql.createConnection({
  host: "192.34.62.4", // Host del database
  user: "andrea", // Userna1me del database
  password: "A5twXYw0rWbflCv7", // Password del database
  database: "masstime-wp-TxkNuiUZ",
  debug: true,
});

app.get("/", (req, res) => {
  con.connect(function (err) {
    console.log("Connected! ");
    console.log(err);
  });
});
