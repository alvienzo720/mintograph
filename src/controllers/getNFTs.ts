import axios from "axios";
import { ConfigParams } from "../config";
import { sendMessage } from "../utils/telegram";

export async function getNfts() {
    try {
        const response = await axios.get(`https://api.opensea.io/api/v1/assets?owner=${ConfigParams.SENDER_ADDRESS}&order_direction=desc&offset=0&limit=20`);
        const assets = response.data.assets;

        if (assets.length > 0) {
            let message = 'Your NFTs:\n\n';

            assets.forEach((asset: { name: any; description: any; image_url: any; }) => {
                message += `Name: ${asset.name}\n`;
                message += `Description: ${asset.description}\n`;
                message += `Image URL: ${asset.image_url}\n\n`;
                sendMessage(message);
            })
        } else {
            let message = "No NFTs found for this address";
            sendMessage(message)

        }
    } catch (error) {

        console.log(error);

    }

}
