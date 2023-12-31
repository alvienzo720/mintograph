import "dotenv/config";
import { ethers } from "ethers";
export const ConfigParams = {
    BOT_TOKEN: process.env.BOT_TOKEN || "",
    PRIVATE_KEY: process.env.PRIVATE_KEY || "",
    INFURA_URL: process.env.INFURA_PROJECT_URL || "",
    WHITELISTED_USERS: [541365365],
    TELEGRAM_DELETE_MESSAGE_INTERVAL: 10,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS || "",
    SENDER_ADDRESS: process.env.SENDER_ADDRESS || "",
    RECI_ADDRESS: process.env.RECI_ADDRESS || "",
    TOKENURI: process.env.TOKENURI || "",
    ETH_SCAN_API: process.env.ETH_SCAN_API || ""
}

export const provider = new ethers.providers.JsonRpcProvider(ConfigParams.INFURA_URL);
