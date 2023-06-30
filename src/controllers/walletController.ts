import { Request, Response } from "express"
import { ethers } from "ethers"
import { ConfigParams } from "../config";
import { sendMessage } from "../utils/telegram";
import { provider } from "../config";

export const connetWallet = async (privateKey: any) => {
    try {
        
        const wallet = new ethers.Wallet(privateKey, provider);
        const address = await wallet.getAddress();

        let message = `*\Wallet ${address} connected successfuly\*`
        // console.log("Address", address)
        sendMessage(message)
    } catch (error) {
        // console.log("Error", error)

        let message = `*\Error connecting to wallet check the wallet address\*`
        sendMessage(message)

    }
}

export const walletBalance = async (privateKey:any) => {
    try {
        const wallet =  new ethers.Wallet(privateKey,provider)
        const balance =  await wallet.getBalance();
        const readablebalance = parseFloat(ethers.utils.formatEther(balance)).toFixed(4);
        console.log("balance", readablebalance);
        let message = `*\Balance is : ${readablebalance} ETH\*`
        sendMessage(message);
    } catch (error:any) {
        console.log(error)
        
        
    }
    
}
