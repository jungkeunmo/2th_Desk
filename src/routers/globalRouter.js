import express from "express";
import {
    mainController,
    resultController,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", mainController);
globalRouter.get("/result", resultController);

export default globalRouter;