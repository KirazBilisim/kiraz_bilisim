const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(cors({
  origin: ["http://localhost:3001"],
  credentials: true,
  methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"],
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/users", userRouter);

module.exports = app;
