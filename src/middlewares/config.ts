import cors from "cors"
import express, { Express } from "express"
import bodyParser from "body-parser"
export const configureMiddlewares = (app: Express) => {
    app.use(cors())
    app.use(bodyParser.json());
}
