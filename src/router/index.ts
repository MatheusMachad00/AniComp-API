import { Router } from "express";
import authRouter from "../router/authRoute";

const router = Router();

router.use(authRouter);

export default router;
