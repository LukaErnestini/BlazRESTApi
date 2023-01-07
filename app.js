var express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes/router");

const sequelize = require("./db");

var app = express();

app.use(bodyParser.json());

app.use(routes);

sequelize
  .sync()
  .then((result) => {
    //console.log(result);
    app.listen(3005);
  })
  .catch((err) => {
    console.log(err);
  });
