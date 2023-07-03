import { ethers } from "ethers";
import { ABI } from "../config/ABI";
import { provider } from "../config";
import { sendMessage } from "../utils/telegram";

export async function transferNFT(providerUrl: any, privateKey: string, contractAddress: string, fromAddress: string, toAddress: string, tokenId: string) {
    const wallet = new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(contractAddress, ABI, wallet);

    const tx = await contract.transferFrom(fromAddress, toAddress, tokenId);
    const receipt = await tx.wait();

    let message = `NFT Transafered Successfully`
    message += `\n Hash: \`${receipt.transactionHash}\``
    message += `\n Gas Used: \`${ethers.utils.formatEther(receipt.gasUsed)}\``
    message += `\n To: \` ${receipt.to}\``
    message += `\n From: \` ${receipt.from}\``
    message += `\n View NFT at :https://sepolia.etherscan.io/tx/${receipt.transactionHash}`

    sendMessage(message)


    return 1;

}
