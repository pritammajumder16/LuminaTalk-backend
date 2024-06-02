import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { corsConfig } from "./constants/corsConfig";
import cors from "cors";
import router from "./router/routes";
import bodyParser from "body-parser";
import connectDB from "./utils/mongo/setup";
dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

app.use(cors(corsConfig));
connectDB(process.env.MONGO_URI);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/", (req, res, next) => {
  console.log("Request arrived at : ", req.url);
  next();
});
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
