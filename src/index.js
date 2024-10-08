import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

const app = express();
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error" + error);
  });
