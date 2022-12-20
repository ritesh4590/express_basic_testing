const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

const staticPath = path.join(__dirname, "/public");
console.log(path.join(__dirname, "/public"));

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.status(200).json({ firstName: "Ritesh", lastName: "Singh" });
});

app.post("/", (req, res) => {
  res.send("Yo man this is post request");
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT} `);
});
