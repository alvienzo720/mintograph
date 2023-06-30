import cors from "cors"
import express, { Express } from "express"
export const configureMiddlewares = (app: Express) => {
    app.use(cors())
}
