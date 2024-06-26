import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import router from "./router/index";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware";

dotenv.config();
const app = express();
app.use(cors(), express.json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
