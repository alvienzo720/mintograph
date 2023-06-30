import { Router } from "express"
import { connetWallet } from "../../controllers/walletController";

const router = Router();
router.post('/connectWallet', connetWallet)


export { router as botRouter }
