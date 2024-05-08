import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import 'express-async-errors';

dotenv.config();
const app = express();
app.use(cors(), express.json());

export default app;