const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
app.use(express.json({ limit: "2MB" }));
app.use(morgan("combined"));
app.use(cors());
mongoose.connect(
  "mongodb+srv://ozduranbaran:636636Bc@cluster0.opbgo.mongodb.net/my-first-database?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const CountrySchema = new mongoose.Schema({
  name: String,
  capital: String,
  population: Number,
  language: String,
  callingCode: String,
});
const CountriesArraySchema = new mongoose.Schema(
  {
    countries: { type: [CountrySchema], default: undefined },
  },
  { collection: "countries2" }
);
let Country = mongoose.model("Country", CountrySchema);
let Countries = mongoose.model("Countries", CountriesArraySchema);
let port = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Entered");
});

app.post("/", (req, res) => {
  Countries.remove({});
  let countries = new Countries(req.body);
  console.log(countries);
  countries.save((err) => {
    if (err) res.sendStatus(500);
    else {
      let allCountries = JSON.stringify(req.body);
      res.send(`${allCountries}`);
    }
  });
});

app.put("/", (req, res) => {
  console.log(req.body);
  let country = new Country(req.body);
  console.log(country);
  country.save((err) => {
    if (err) res.sendStatus(500);
    else {
      let newCountry = JSON.stringify(req.body);
      console.log(`We have a PUT request with the country ${newCountry}`);
      res.send(`${newCountry}`);
    }
  });
});

app.delete("/", (req, res) => {
  let nameOfDeletedCountry = JSON.stringify(req.body);
  res.send(`${nameOfDeletedCountry}`);
});

app.listen(port, () => console.log(`Started on PORT ${port}`));
