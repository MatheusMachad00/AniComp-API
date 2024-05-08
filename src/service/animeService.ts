import { TypeNewAnimeData } from "../type/animeType";
import { animeRepository } from "../repository/animeRepository";

async function createNewAnime(anime: TypeNewAnimeData){
  await animeRepository.createAnime(anime);
}

export const animeService = {
  createNewAnime
};