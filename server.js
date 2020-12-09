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

const AWS = require("aws-sdk");

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");
app.get("/", function (req, res) {
  res.render("index");
});
app.set("port", process.env.PORT || 8080);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

// configure the keys for accessing
(async function () {
  AWS.config.setPromisesDependency();
  try {
    AWS.config.update({
      region: process.env.S3_REGION,
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3();
    const response = await s3
      .listObjectsV2({
        Bucket: "childcareapp",
      })
      .promise();
    console.log(response);
  } catch (e) {
    console.log("our error", e);
  }
})();

// retrieve all nannies
app.get("/api/nanny", (req, res) => {
  db.any("SELECT * FROM nanny")
    .then((data) => res.json(data))
    .catch((error) => res.json({ error: error.message }));
});

//retrieve nanny by id
// app.get("/api/nanny/:id", (req, res) => {
//   const { id } = req.params;
//   return db
//     .one(
//       "SELECT id, first_name, last_name, tel, bio, photo, filter FROM nanny WHERE id=$1",
//       [id]
//     )
//     .then((data) => {
//       res.json(data);
//       console.log(data);
//     })
//     .catch((error) => res.json({ error: error.message }));
// });

// app.get("/api/nanny/:filter", (req, res) => {
// const { filter } = req.params;
// return db
//   .one(
//     "select * from nanny WHERE city = $1' and min_child_age <= $2 and max_child_age >= $2 and filter = $3", [filter[0], filter[1], filter[2]]
//   )
//   .then((data) => {
//     res.json(data);
//     console.log(data);
//   })

app.get("/api/nanny/:search", (req, res) => {
  let arr = req.params.search.split(",");
  const city = arr[0];
  const age = arr[1];
  const filter = arr[2];
  console.log(city, filter, "server.js");

  return db
    .any(
      `select * from nanny WHERE city = $1 and min_child_age <= $2 and max_child_age >= $2 and filter = $3`,
      [city, age, filter]
    )
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((error) => res.json({ error: error.message }));
});

app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
