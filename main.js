const express = require("express");
var mysql = require("mysql");
var cors = require("cors");

var app = express();

app.use(express.json());

app.use(cors());

var con = mysql.createConnection({
  host: "192.34.62.4", // Host del database
  user: "cE4yGn3dCjua", // Userna1me del database
  password: "A5twXYw0rWbflCv7", // Password del database
  database: "masstime-wp-TxkNuiUZ",
  debug: true,
});

app.get("/", (req, res) => {
  res.send({ msg: "api" });
});

app.post("/", (req, res) => {
  const { query } = req.body;
  con.connect(function (err) {
    console.log("Connected! ");
  });
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
