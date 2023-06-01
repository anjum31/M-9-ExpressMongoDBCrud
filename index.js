const path = require("path");
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const bookRouter = require("./routes/book.routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use("/api/v1/", bookRouter);

const port = 3000;
app.listen(port, () => {
  console.log("Server started");
});
