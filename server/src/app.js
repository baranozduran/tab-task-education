const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(express.json({ limit: "2MB" }));
app.use(morgan("combined"));
app.use(cors());

let port = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Entered");
});

app.post("/", (req, res) => {
  let allCountries = JSON.stringify(req.body);
  res.send(`${allCountries}`);
});

app.put("/", (req, res) => {
  let newCountry = JSON.stringify(req.body);
  console.log(`We have a PUT request with the country ${newCountry}`);
  res.send(`${newCountry}`);
});

app.delete("/", (req, res) => {
  let nameOfDeletedCountry = JSON.stringify(req.body);
  res.send(`${nameOfDeletedCountry}`);
});

app.listen(port, () => console.log(`Started on PORT ${port}`));
