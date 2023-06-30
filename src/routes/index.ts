import { Application } from "express";
import { botRouter } from "./api/routes";

export const ConfigureRoutes = (app: Application) => {
    app.get('/healthcheck', (req, res) => {
        res.send('Hello World');
    })
    app.use([botRouter])
}
