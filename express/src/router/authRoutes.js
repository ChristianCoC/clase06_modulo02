import { Router } from "express";
import { login, register, logout, profile } from "../controllers/authControllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

authRoutes.get("/profile", authRequired, profile);

export default authRoutes;
