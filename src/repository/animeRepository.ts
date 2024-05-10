import { prisma } from "../config/database";
import { TypeNewAnimeData } from "../type/animeType";

async function createAnime(anime: TypeNewAnimeData) {
  await prisma.anime.create({ data: anime });
}

async function findById(id: number) {
  const result = await prisma.anime.findUnique({
    where: { id },
  });
  return result;
}

async function updateCurrentEpisode(id: number, newValue: number) {
  await prisma.anime.update({
    where: { id },
    data: {
      currentEpisode: newValue,
    },
  });
}

async function updateStatus(id: number, newValue: string) {
  await prisma.anime.update({
    where: { id },
    data: {
      status: newValue,
    },
  });
}

export const animeRepository = {
  createAnime,
  findById,
  updateCurrentEpisode,
  updateStatus,
};
