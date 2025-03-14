import { Router} from "express";
import TaskControllers from "../controllers/TaskControllers.js";

const router = Router()

router.get('/', TaskControllers.index)
router.get('/cadastro', (req, res) => {
  res.render("cadastro")
})
router.post('/criarCadastro', TaskControllers.store)
router.get('/deletaCadastro/:id', TaskControllers.delete)
router.post('/editaCadastro/:id', TaskControllers.update)
router.get('/editaCadastro/:id', TaskControllers.show)

export default router