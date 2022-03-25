const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const paymentRouter = require("./paymentRouter");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", paymentRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.MOONGO_CONNECT);
    app.listen(PORT, () => console.log(`server started ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
