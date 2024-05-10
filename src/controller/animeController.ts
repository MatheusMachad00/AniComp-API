import { Request, Response } from "express";
import { animeService } from "../service/animeService";
import { TypeNewAnimeData, TypeUpdateCurrentEpisodeData } from "../type/animeType";

async function createNewAnime(req: Request, res: Response){
  const animeData: TypeNewAnimeData = req.body;
  await animeService.createNewAnime(animeData);
  res.sendStatus(201);
}

async function updateCurrentEpisode(req: Request, res: Response) {
  const animeData: TypeUpdateCurrentEpisodeData = req.body;
  const episodeUpdateValue: number = req.body.newValue;
  await animeService.updateCurrentEpisode(animeData, episodeUpdateValue);
  res.sendStatus(200);
}

export const animeController = {
  createNewAnime,
  updateCurrentEpisode,
};