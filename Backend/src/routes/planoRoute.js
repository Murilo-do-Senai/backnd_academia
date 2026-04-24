import { listarPlanos} from "../controllers/planoController.js";
import { Router } from "express";

const router = Router();

router.get("/",listarPlanos);

export default router;