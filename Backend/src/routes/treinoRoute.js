import { listarTreino} from "../controllers/treinoController.js";
import { Router } from "express";

const router = Router();

router.get("/",listarTreino);

export default router;