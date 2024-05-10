import { Anime } from "@prisma/client";

export type TypeNewAnimeData = Omit<Anime, "id">;
export type TypeUpdateCurrentEpisodeData = Omit<Anime, "name" | "weekday" | "releaseDate" | "status">;