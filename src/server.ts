import express from "express"
import { bot } from './bot/bot'
import { ConfigureRoutes } from "./routes"
import { configureMiddlewares } from "./middlewares"

const app = express()
configureMiddlewares(app);
ConfigureRoutes(app);
const startBot = async () => {
    console.log(`---`.repeat(10))
    console.log(`starting bot  🤖 `)
    console.log(`---`.repeat(10))
    bot.launch().then(() => { }).catch((error) => {
        console.log(error)
    })

}
startBot();
app.listen(5000, () => {
    console.log("Server is Up Baby")
})
