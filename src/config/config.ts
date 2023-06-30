import "dotenv/config"

export const ConfigParams = {
    BOT_TOKEN: process.env.BOT_TOKEN || "",
    PRIVATE_KEY: process.env.PRIVATE_KEY || "",
    INFURA_URL: process.env.INFURA_PROJECT_URL || ""
}
