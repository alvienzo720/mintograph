import axios from "axios";
import { ConfigParams } from "../config";
import { sendMessage } from "../utils/telegram";

export async function fetchTransactions() {
    try {
        const response = await axios.get(`https://api-sepolia.etherscan.io/api?module=account&action=tokentx&address=${ConfigParams.SENDER_ADDRESS}&startblock=0&endblock=999999999&sort=desc&apikey=${ConfigParams.ETH_SCAN_API}`);
        let transactions: any = response.data.result;

        if (transactions.length > 0) {
            // Get the last 10 transactions
            transactions = transactions.slice(0, 10);

            let message = 'Your Transactions:\n\n';

            transactions.forEach((Txn: { tokenSymbol: any; contractAddress: any; from: any; to: any; }) => {
            
            // //filiter tokenSymbol
            // const filterTokens=['NFT','ERC-721']
            // if(!filterTokens.includes(Txn['tokenSymbol'])) return "Not found"
            message += '\nTransaction Details:\n';

                message += `Token Symbol: ${Txn.tokenSymbol}\n`;
                message += `Contract Address: ${Txn.contractAddress}\n`;
                message += `From: ${Txn.from}\n`;
                message += `To: ${Txn.to}\n\n`;
            });

            sendMessage(message)
        } else {
            let message = 'No NFT transactions Found for this Address:\n\n';
            sendMessage(message);
        }

    } catch (error) {
        console.log(error)
    }
}
