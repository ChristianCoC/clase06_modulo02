import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./router/authRoutes.js";
import movieRouter from "./router/moviesRoute.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(authRoutes);
app.use(movieRouter);


export default app;
