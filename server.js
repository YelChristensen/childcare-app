require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const app = express();
const db = pgp({
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");
app.get("/", function (req, res) {
  res.render("index");
});
app.set("port", process.env.PORT || 8080);

// retrieve all nannies
app.get("/api/nanny", (req, res) => {
  db.any("SELECT * FROM nanny")
    .then((data) => res.json(data))
    .catch((error) => res.json({ error: error.message }));
});

app.listen(8080, function () {
  console.log("Listening on port 8080");
});
