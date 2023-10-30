const express = require("express");
const cors = require("cors");

const CustomError = require("./utils/customError");

const app = express();
app.use(cors());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    error: false,
    message: "Successfully hit '/' endpoint",
    timestamp: new Date(Date.now()).toISOString()
  });
});

app.all("*", (req, res, next) => {
  const error = new CustomError(404, "Route not found");
  next(error);
});

app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      error: true,
      message: err.message,
      type: err.type
    });
  } else {
    console.error(err);
    res.status(400).json({
      error: true,
      message: "Unknown error occurred"
    });
  }
});

module.exports = app;
