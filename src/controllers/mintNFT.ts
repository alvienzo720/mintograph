import {ethers} from "ethers";
import { ABI } from "../config/ABI";
import { provider } from "../config";
import { sendMessage } from "../utils/telegram";


export async function mintNFT(privateKey:any,contactAddress:string,tokenURI:string){
    const wallet =  new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(contactAddress, ABI, wallet);
    const tx = await contract.mintNFT(tokenURI);
    const receipt =  await tx.wait();


    let message = `NFT minted successfully`
    message += `\n Hash: \`${receipt.transactionHash}\``
    message += `\n Gas Used: \`${ethers.utils.formatEther(receipt.gasUsed)}\``
    message += `\n To: \` ${receipt.to}\``
    message += `\n From: \` ${receipt.from}\``
    message += `\n View NFT at :https://sepolia.etherscan.io/tx/${receipt.transactionHash}`


    sendMessage(message);

    console.log("Our Hash", receipt.transactionHash)

    return 1;

}
