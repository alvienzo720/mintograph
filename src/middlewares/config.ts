import cors from "cors";
import express, { Express } from "express";
import bodyParser from "body-parser";
import { session } from "telegraf";
import { bot } from "../bot";
export const configureMiddlewares = (app: Express) => {
    app.use(cors())
    app.use(bodyParser.json());
    bot.use(session())
}
