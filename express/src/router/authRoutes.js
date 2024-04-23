import { Router } from "express";
import { login, register, logout, profile } from "../controllers/authControllers.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateMiddlewares.js";
import { registerSchema, loginSchema } from "../schemas/authSchemas.js";

const authRoutes = Router();

authRoutes.post("/register", validateSchema(registerSchema), register);
authRoutes.post("/login", validateSchema(loginSchema), login);
authRoutes.post("/logout", logout);

authRoutes.get("/profile", authRequired, profile);

export default authRoutes;
