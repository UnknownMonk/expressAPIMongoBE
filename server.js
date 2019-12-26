const express = require("express");
const dotenv = require("dotenv");

//Route files
const bootcamps = require("./routs/bootcamps");

dotenv.config({ path: "./config/config.env" });

const app = express();

//Mount routers

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 6000;
app.listen(
  6000,
  console.log(`Server Runnig in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
