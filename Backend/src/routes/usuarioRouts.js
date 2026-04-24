import { listarUsuario,criarUsuario} from "../controllers/usuarioController.js";
import { Router } from "express";

const router = Router();

router.get("/",listarUsuario);
router.post("/",criarUsuario);

export default router;