const express = require('express');
const app = express();
const Routers = require('./routes/bfhlRoutes');

app.use(express.json());
app.use('/bfhl', Routers); 

app.get("/", (req, res) => {
  res.send("API is live! 🎉");
});


module.exports = app;