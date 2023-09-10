import { Router } from "express";
import { typesController } from "../controllers/typesController.js";  // have to add name.JS before saving
import { checkRoleMiddleware } from "../middleware/checkRoleMiddleware.js";


export const typesRouter = new Router()


typesRouter.get('/',typesController.getAll)
typesRouter.post('/',checkRoleMiddleware('ADMIN'), typesController.create)
typesRouter.patch('/', typesController.update)
typesRouter.delete('/:id', typesController.delete)


