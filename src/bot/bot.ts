import {Telegraf} from 'telegraf'
import { ConfigParams } from '../config'

const bot =  new Telegraf(ConfigParams.BOT_TOKEN)

bot.start((ctx)=> ctx.reply("Welcome Connect your wallet and start minting NFTS"))

export {bot}

