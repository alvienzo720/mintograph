import { bot } from "../bot"
import { ConfigParams } from "../config"

export const normalizeeMessage = (message: string) => {
    return message
        .replaceAll("_", "\\_")
        .replaceAll("|", "\\|")
        .replaceAll(".", "\\.")
        .replaceAll("{", "\\{")
        .replaceAll("}", "\\}")
        .replaceAll("=", "\\=")
        .replaceAll("+", "\\+")
        .replaceAll(">", "\\>")
        .replaceAll("<", "\\<")
        .replaceAll("-", "\\-")
        .replaceAll("!", "\\!")

}


export const sendMessage = async (message: string, delete_message?: boolean) => {
    try {
        for (const id of ConfigParams.WHITELISTED_USERS) {
            await bot?.telegram?.sendMessage(id, normalizeeMessage(message), {
                parse_mode: "MarkdownV2",
                disable_web_page_preview: true
            }).then(({ message_id }) => {
                if (delete_message) {
                    setTimeout(
                        () => {
                            bot.telegram.deleteMessage(id, message_id),
                                ConfigParams.TELEGRAM_DELETE_MESSAGE_INTERVAL!
                        }
                    )
                }
            }).catch((error: any) => {
                console.log("error:", error)
            })
        }
    } catch (error: any) {
        console.log("error:", error)
    }
}
