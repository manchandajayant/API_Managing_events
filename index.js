const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const router = require("./event/router");
const eventModel = require("./event/model");
const port = 3000;

const app = express();

const middleware = cors();
app.use(middleware);

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => console.log(`This is running on port ${port}`));
