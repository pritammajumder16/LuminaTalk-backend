import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { corsConfig } from "./constants/corsConfig";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 3000;

const app: Express = express();

app.use(cors(corsConfig));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
