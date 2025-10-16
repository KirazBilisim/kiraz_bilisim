const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/users", userRouter);

module.exports = app;
