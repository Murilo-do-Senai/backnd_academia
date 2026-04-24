import { listarAlunos} from "../controllers/alunoController.js";
import { Router } from "express";

const router = Router();

router.get("/",listarAlunos);


export default router;