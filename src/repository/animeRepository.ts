import { prisma } from "../config/database";
import { TypeNewAnimeData } from "../type/animeType";

async function createAnime (anime: TypeNewAnimeData){
  await prisma.anime.create({data: anime});
}

export const animeRepository = {
  createAnime
}