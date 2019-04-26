require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
global.logger = require('./logger')
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path")
require("./config/db");

app.use(cors())
// API calls
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client", "build")))

app.use('/api', require("./api"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const server = app.listen(port, () => logger.info(`Listening on port ${port}`));
module.exports = app;