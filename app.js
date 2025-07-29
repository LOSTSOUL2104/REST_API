const express = require("express");
const app = express();

app.use(express.json());

const bfhlRoutes = require("./routes/bfhlRoutes");

app.use("/bfhl", bfhlRoutes);

app.get("/", (req, res) => {
  res.send("🔥 Priyansh's API is up and running!");
});

module.exports = app;
