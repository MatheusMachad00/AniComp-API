import { TypeNewAnimeData, TypeUpdateCurrentEpisodeData } from "../type/animeType";
import { animeRepository } from "../repository/animeRepository";

async function createNewAnime(anime: TypeNewAnimeData) {
  await animeRepository.createAnime(anime);
}

async function updateCurrentEpisode(animeData: TypeUpdateCurrentEpisodeData, newValue: number) {
  await findByIdOrFail(animeData.id);
  if (newValue > animeData.totalEpisodes) throw {type: "unprocessable_entity", message: "number placed exceeds total episodes."};
  await animeRepository.updateCurrentEpisode(animeData.id, newValue);
}

async function updateStatus(animeData: TypeUpdateCurrentEpisodeData, newValue: string) {
  // await animeRepository.updateStatus(id, newValue);
}

async function findByIdOrFail(id:number) {
  const result = await animeRepository.findById(id);
  if (!result) throw { type: 'not_found', message: 'Anime not found.' };
  return result;
}

export const animeService = {
  createNewAnime,
  updateCurrentEpisode,
  updateStatus,
};
