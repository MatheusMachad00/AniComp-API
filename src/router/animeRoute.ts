import express from "express";
import { validateSchemaMiddleware } from "../middleware/validateSchema";
import { newAnimeSchema } from "../schema/animeSchema";
import { animeController } from "../controller/animeController";

const router = express.Router();

router.post(
  "/newAnime",
  validateSchemaMiddleware(newAnimeSchema),
  animeController.createNewAnime
);

export default router;