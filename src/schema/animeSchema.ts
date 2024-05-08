import joi from "joi";

export const newAnimeSchema = joi.object({
  name: joi.string().max(300).required(),
  weekday: joi.string().max(20).required(),
  currentEpisode: joi.number().required(),
  totalEpisodes: joi.number().required(),
  releaseDate: joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/).required(),
  status: joi.number().required(),
  userId: joi.number().required(),
});
