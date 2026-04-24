import { listarUsuario,criarUsuario,atualizarUsuario, deletarUsuario} from "../controllers/usuarioController.js";
import { Router } from "express";

const router = Router();

router.get("/",listarUsuario);
router.post("/",criarUsuario);
router.put("/:id",atualizarUsuario);
router.delete("/:id",deletarUsuario);

export default router;