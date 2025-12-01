import fornecedorController from "../controller/fornecedor.controller.js";
import {Router} from "express";

const fornecedorRouter = Router();

fornecedorRouter.post("/fornecedores", fornecedorController.createFornecedorController);
fornecedorRouter.get("/fornecedores", fornecedorController.findAllFornecedorController);
fornecedorRouter.get("/fornecedores/:id", fornecedorController.findFornecedorByIdController);

export default fornecedorRouter;