import express from "express"
import { bot } from './bot/bot'
const app = express()
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
