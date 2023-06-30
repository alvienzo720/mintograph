import { Request, Response } from "express"
import {ethers} from "ethers"
import { ConfigParams } from "../config";


export const connetWallet = async (req: Request, res: Response) => {
    try {
        const privateKey = req.body.privateKey;
       const provider = new ethers.providers.JsonRpcProvider(ConfigParams.INFURA_URL);
       const wallet = new ethers.Wallet(privateKey, provider);
       const address = await wallet.getAddress();
       res.json({message:`Wallet ${address} connected successfuly`})
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Error connecting to wallet" })

    }
}
