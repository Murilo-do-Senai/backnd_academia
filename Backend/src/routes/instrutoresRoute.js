import { listarInstrutores} from "../controllers/instrutoresController.js";
import { Router } from "express";

const router = Router();

router.get("/",listarInstrutores);

export default router;