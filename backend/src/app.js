const express = require("express");
const routes = require("./routes");
const app = express();
const { errors } = require("celebrate");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

module.exports = app;
