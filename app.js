const express = require("express");
const app = express();
const errorHandler = require("./error_handler");
const router = require("./routes");
const cors = require("cors");

require('dotenv').config()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use(router);

app.use(errorHandler);

module.exports = app;