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

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  console.error("errorHandler middleware:");
  console.error(err);
  res.render("error", { error: err });
});

module.exports = app;
