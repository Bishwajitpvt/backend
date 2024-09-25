import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// configuring cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// handle json data
app.use(
  express.json({
    limit: "20kb",
  })
);

// data from url encoded
app.use(
  express.urlencoded({
    extended: true,
    limit: "20kb",
  })
);

app.use(express.static("public"));

//perfom CRUD operations on user cookies
app.use(cookieParser());

export default app;
