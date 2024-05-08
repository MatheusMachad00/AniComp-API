import { Router } from "express";
import authRouter from "../router/authRoute";
import animeRouter from "../router/animeRoute"

const router = Router();

router.use(authRouter);
router.use(animeRouter);

export default router;
