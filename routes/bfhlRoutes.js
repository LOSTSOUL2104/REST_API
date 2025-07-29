const express = require("express");
const router = express.Router();
const { handleBFHL } = require("../controllers/controller");

router.post("/", handleBFHL); 

module.exports = router;
