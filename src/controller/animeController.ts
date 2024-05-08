import { Request, Response } from "express";
import { animeService } from "../service/animeService";
import { TypeNewAnimeData } from "../type/animeType";

async function createNewAnime(req: Request, res: Response){
  const animeData: TypeNewAnimeData = req.body;
  await animeService.createNewAnime(animeData);
  res.sendStatus(201);
}

export const animeController = {
  createNewAnime
};