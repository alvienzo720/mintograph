import { Telegraf, Markup } from 'telegraf'
import { ConfigParams, provider } from '../config'
import { connetWallet, walletBalance } from '../controllers/walletController';
import { sendMessage } from '../utils/telegram';
import { mintNFT } from '../controllers/mintNFT';
import { transferNFT } from '../controllers/transferNFT';


const bot = new Telegraf(ConfigParams.BOT_TOKEN)

bot.start((ctx) => {
    ctx.reply("Welcome Connect your wallet and start minting NFTS");
    const custom_keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.callback('Connect Wallet', 'connectwallet'),
            Markup.button.callback('Wallet Balance', 'walletbalance'),
            ],
            [
                Markup.button.callback('Minit NFT', 'mintnft'),
                Markup.button.callback('Transafer NFT', 'transfernft')
            ],
        ]



    )
    ctx.reply('Please have your wallet key ready', { reply_markup: { inline_keyboard: custom_keyboard.reply_markup.inline_keyboard } })
})

bot.action('connectwallet', async (ctx) => {
    try {
        connetWallet(ConfigParams.PRIVATE_KEY)

    } catch (error) {
        let message: any = error
        sendMessage(message)

    }
})

bot.action("walletbalance", async (ctx) => {
    try {
        walletBalance(ConfigParams.PRIVATE_KEY)
    } catch (error: any) {
        console.log(error)

    }

})

bot.action("mintnft", async (ctx) => {
    try {
        mintNFT(ConfigParams.PRIVATE_KEY, ConfigParams.CONTRACT_ADDRESS, ConfigParams.TOKENURI)
    } catch (error) {
        console.log(error);

    }

})

let reciver_address = ""
bot.action("transfernft", async (ctx) => {
    ctx.reply('Please enter the recipient\'s address');
    bot.on('text', (ctx) => {
        reciver_address = ctx.message.text;
        try {
            if(reciver_address.length == 42 && reciver_address.startsWith("Ox")){
                transferNFT(provider, ConfigParams.PRIVATE_KEY, ConfigParams.CONTRACT_ADDRESS, ConfigParams.SENDER_ADDRESS, reciver_address, 21);
            }else {
                ctx.reply('Please enter a valid recipient\'s address ⚠️ ');
            } 
        } catch (error) {
            console.log("Error", error)
          
        }
    })

})

export { bot }

