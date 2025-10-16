const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

const app = express();

//"http://localhost:3001"
app.use(
  cors({
    origin: ["https://kirazbilisim.vercel.app/"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/users", userRouter);

module.exports = app;
