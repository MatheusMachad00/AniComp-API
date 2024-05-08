import express from "express";
import { validateSchemaMiddleware } from "../middleware/validateSchema";
import { loginSchema, signupSchema } from "../schema/authSchema";
import { authController } from "../controller/authController";

const router = express.Router();

router.post(
  "/login",
  validateSchemaMiddleware(loginSchema),
  authController.login
);

router.post(
  "/signup",
  validateSchemaMiddleware(signupSchema),
  authController.signup
);

export default router;
