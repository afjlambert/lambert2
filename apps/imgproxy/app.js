const express = require("express");
const { expressSharp, HttpAdapter } = require("express-sharp");

const app = express();

// Fetch original images via HTTP
app.use(
  "/",
  expressSharp({
    imageAdapter: new HttpAdapter(),
  })
);

module.exports = app;
