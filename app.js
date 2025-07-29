const express = require('express');
const app = express();
const Routers = require('./routes/bfhlRoutes');

app.use(express.json());
app.use('/bfhl', Routers); 

module.exports = app;