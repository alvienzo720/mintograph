import { Router } from "express"
import { connetWallet } from "../../controllers/walletController";

const router = Router();
router.get('/connectWallet', connetWallet)


export { router as botRouter }
