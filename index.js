import express from "express";
import router from "./src/route/index.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(cookieParser());
app.use(helmet());

app.use(router);

app.listen(5000, () => console.log("Server Running port:", 5000));
