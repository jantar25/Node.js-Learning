const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(bodyParser.json());

//Import Routers
const postsRouter = require("./routes/posts");
//Middlewares
app.use("/", postsRouter);

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);
//Listen to the server
app.listen(5000);
