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

app.listen(port, () => console.log(`Started on PORT ${port}`));
