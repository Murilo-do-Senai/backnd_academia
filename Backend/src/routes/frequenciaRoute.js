import { listarFrequencias} from "../controllers/frequenciaController.js";
import { Router } from "express";

const router = Router();

router.get("/",listarFrequencias);

export default router;