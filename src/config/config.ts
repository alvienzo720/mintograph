import "dotenv/config";
import { ethers } from "ethers";
export const ConfigParams = {
    BOT_TOKEN: process.env.BOT_TOKEN || "",
    PRIVATE_KEY: process.env.PRIVATE_KEY || "",
    INFURA_URL: process.env.INFURA_PROJECT_URL || "",
    WHITELISTED_USERS: [541365365],
    TELEGRAM_DELETE_MESSAGE_INTERVAL: 10,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS || "",
    RECIPIENT_ADDRESS: process.env.RECIPIENT_ADDRESS || "",
    TOKENURI: process.env.TOKENURI || ""
}

export const provider = new ethers.providers.JsonRpcProvider(ConfigParams.INFURA_URL);
